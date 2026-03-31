from sentence_transformers import SentenceTransformer, util

class SemanticRouter:
    def __init__(self, model_name='all-MiniLM-L6-v2'):
        """
        Initializes the Semantic Router using a lightweight, local embedding model.
        This avoids external API latency for intent routing.
        """
        self.model = SentenceTransformer(model_name)

        # Define intent clusters
        self.intent_corpus = {
            "frustration": ["I give up", "This is too hard", "I don't understand", "I'm confused"],
            "isolation": ["I feel alone", "I have no friends", "No one talks to me"],
            "curiosity": ["How does this work", "Why is that?", "Tell me more about"],
            "task_request": ["Help me solve this", "Can you calculate", "Write a summary"]
        }

        # Pre-compute embeddings for intents
        self.intent_embeddings = {}
        for intent, phrases in self.intent_corpus.items():
            embeddings = self.model.encode(phrases, convert_to_tensor=True)
            self.intent_embeddings[intent] = embeddings

    def route_query(self, query: str) -> str:
        """
        Embeds the incoming query and compares it via cosine similarity against the clustered intent vectors.
        Returns the closest matching intent category.
        """
        query_embedding = self.model.encode(query, convert_to_tensor=True)

        best_intent = "unknown"
        highest_score = -1.0

        for intent, cluster_embeddings in self.intent_embeddings.items():
            cosine_scores = util.cos_sim(query_embedding, cluster_embeddings)
            max_score = cosine_scores.max().item()

            if max_score > highest_score:
                highest_score = max_score
                best_intent = intent

        # Threshold to avoid false positives
        if highest_score < 0.4:
            return "general"

        return best_intent

if __name__ == "__main__":
    router = SemanticRouter()
    print("Routing 'I can't figure this out':", router.route_query("I can't figure this out"))
    print("Routing 'I'm feeling really sad today':", router.route_query("I'm feeling really sad today"))

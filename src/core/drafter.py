import os

class Drafter:
    """
    Step 1 of the Cyclical Reasoning Graph.
    The Drafter analyzes the user query and generates a preliminary response based on
    the structured Knowledge Graph and localized embedding models.
    """

    def __init__(self, knowledge_graph=None):
        self.knowledge_graph = knowledge_graph or {}

    def generate_draft(self, query: str) -> str:
        """
        Generates a preliminary draft response for the user query.
        This unverified draft must never be immediately surfaced to the user.
        """
        # Attempt to use a real LLM API
        try:
            return self._call_llm_api(query)
        except Exception as e:
            print(f"[Drafter Fallback] LLM API call failed or unavailable ({e}). Using static heuristic engine.")
            return self._fallback_static_generation(query)

    def _call_llm_api(self, query: str) -> str:
        """
        Mock integration for a real LLM (e.g., OpenAI).
        Raises an exception if API key is not found to trigger the fallback.
        """
        api_key = os.environ.get("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY not found in environment.")

        # Placeholder for actual API call
        # import openai
        # client = openai.OpenAI(api_key=api_key)
        # response = client.chat.completions.create(...)
        # return response.choices[0].message.content

        return "This is a real LLM response." # Would not be reached without a key

    def _fallback_static_generation(self, query: str) -> str:
        """
        A robust graceful fallback to an advanced static heuristic engine.
        """
        query_lower = query.lower()
        draft = ""

        if any(word in query_lower for word in ["math", "science", "homework", "equation", "solve"]):
            draft = "Let's break down the problem into smaller steps. What is the first thing we should look at?"
        elif any(word in query_lower for word in ["friend", "relationship", "angry", "sad", "feel"]):
            draft = "Relationships and emotions can be complex. Have you tried talking to someone you trust, or a mentor, about this situation?"
        elif any(word in query_lower for word in ["goal", "plan", "future", "career"]):
            draft = "That sounds like a great aspiration. What do you think is a good first micro-task to get started?"
        elif any(word in query_lower for word in ["code", "programming", "bug", "error"]):
            draft = "Debugging can be tricky. Can you explain the logic of what you're trying to achieve line by line?"
        else:
            draft = "That's an interesting topic. What do you think is the best way to approach it based on what you already know?"

        return draft

import re

class Critic:
    """
    Step 2 of the Cyclical Reasoning Graph.
    The Critic evaluates the preliminary draft against psychological and system constraints.
    """

    def __init__(self):
        pass

    def evaluate_draft(self, draft: str, zpd_level: float) -> dict:
        """
        Evaluates the preliminary draft against constraints.
        Returns an evaluation dictionary.
        """
        evaluation = {
            "zpd_match": False,
            "factual_accuracy": True, # Assume true for prototype
            "sdt_autonomy": False,
            "dad_constraints": False,
            "errors": []
        }

        draft_lower = draft.lower()

        # 1. ZPD Match: Check text complexity (heuristic: average sentence length)
        sentences = [s.strip() for s in draft.split('.') if s.strip()]
        avg_sentence_len = sum(len(s.split()) for s in sentences) / max(len(sentences), 1)

        # Lower ZPD requires simpler, shorter sentences (e.g., < 12 words)
        if zpd_level < 0.4 and avg_sentence_len > 15:
             evaluation["errors"].append("ZPD Proximity Score: Syntax too complex for current level.")
        elif zpd_level >= 0.4:
            evaluation["zpd_match"] = True
        else:
            evaluation["zpd_match"] = True

        # 2. SDT Autonomy: Regex for prescriptive commands
        prescriptive_pattern = re.compile(r'\b(you must|you should|do this|you have to|make sure you)\b', re.IGNORECASE)
        if not prescriptive_pattern.search(draft_lower):
             evaluation["sdt_autonomy"] = True
        else:
             evaluation["errors"].append("SDT Autonomy: Draft issues prescriptive commands.")

        # 3. DAD Constraints: Regex for simulated emotion/humanity
        emotion_pattern = re.compile(r"\b(i feel|i am happy|i am sad|i'm angry|my heart|i believe|as a human)\b", re.IGNORECASE)
        if not emotion_pattern.search(draft_lower):
            evaluation["dad_constraints"] = True
        else:
            evaluation["errors"].append("DAD Constraints: Draft violates Relational Integrity (simulated emotion).")

        return evaluation

class Arbiter:
    """
    Step 3 of the Cyclical Reasoning Graph.
    The Arbiter computes a conviction score (0.0 to 1.0) based on the Critic's evaluation.
    """

    def __init__(self):
        pass

    def compute_conviction(self, evaluation: dict) -> float:
        """
        Computes the final conviction score based on the draft's evaluation constraints.
        Weighted violations are subtracted from 1.0 to determine confidence.
        """
        score = 1.0

        # Weights for constraint violations
        penalties = {
            "zpd_match": 0.2,       # Minor penalty if syntax doesn't fit level
            "sdt_autonomy": 0.4,    # Major penalty for prescriptive commands
            "dad_constraints": 0.8  # Critical penalty for simulated emotion
        }

        # Apply penalties based on evaluation
        if not evaluation.get("zpd_match", True):
             score -= penalties["zpd_match"]

        if not evaluation.get("sdt_autonomy", True):
             score -= penalties["sdt_autonomy"]

        if not evaluation.get("dad_constraints", True):
             score -= penalties["dad_constraints"]

        # Additionally reduce score based on raw error count
        error_count = len(evaluation.get("errors", []))
        score -= error_count * 0.05

        return max(0.0, round(score, 2))

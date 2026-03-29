import json
import sys
import os

# Append src to path to allow importing from other modules
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from src.core.drafter import Drafter
from src.core.critic import Critic
from src.core.arbiter import Arbiter
from src.memory.memory_manager import MemoryManager

import logging

# Configure basic logging for orchestrator
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class Orchestrator:
    """
    Manages the multi-agent loop for the Cyclical Reasoning Graph.
    Ensures that the drafted response meets the required ZPD and SDT constraints
    before returning a final structured JSON output.
    """

    def __init__(self):
        self.drafter = Drafter()
        self.critic = Critic()
        self.arbiter = Arbiter()
        self.memory = MemoryManager()
        self.max_iterations = 3

    def process_query(self, query: str) -> dict:
        """
        Executes the cyclical reasoning graph for a user query.
        Returns a structured JSON response.
        """
        zpd_level = self.memory.get_zpd_level()
        iteration = 0
        conviction_score = 0.0
        draft = ""
        errors = []

        try:
            while conviction_score < 0.95 and iteration < self.max_iterations:
                iteration += 1
                logging.info(f"Starting iteration {iteration} for query processing.")

                # Step 1: Draft
                query_context = query
                if errors:
                     query_context += f" (Regenerating to fix: {', '.join(errors)})"

                draft = self.drafter.generate_draft(query_context)

                # Step 2: Critique
                evaluation = self.critic.evaluate_draft(draft, zpd_level)
                errors = evaluation.get("errors", [])

                # Step 3: Refine
                conviction_score = self.arbiter.compute_conviction(evaluation)
                logging.info(f"Iteration {iteration} complete. Conviction: {conviction_score}")

            if conviction_score < 0.95:
                logging.warning(f"Failed to reach conviction threshold after {self.max_iterations} iterations. Proceeding with best effort.")

            # Simulate external action based on heuristics
            recommended_action = "Consider discussing this with a mentor." if zpd_level > 0.7 else "Take a short break and revisit this later."

            # Update memory metrics (Simulating success if score is high)
            success = conviction_score >= 0.8
            self.memory.update_metrics(frustration=False, mastery=success, success=success)

            # Format Final Output as JSON Schema per AGENTS.md
            final_output = {
                "user_facing_dialogue": draft,
                "internal_zpd_metric": round(self.memory.get_zpd_level(), 2),
                "friction_applied": len(errors) > 0,
                "scaffolding_type": "socratic" if zpd_level < 0.5 else "partial_hint",
                "recommended_external_action": recommended_action
            }
            return final_output

        except Exception as e:
            logging.error(f"Critical failure during reasoning graph execution: {e}")
            # Ensure graceful degradation
            return {
                "user_facing_dialogue": "Jane's system encountered a temporary constraint issue. How would you like to proceed?",
                "internal_zpd_metric": round(zpd_level, 2),
                "friction_applied": False,
                "scaffolding_type": "direct_support",
                "recommended_external_action": "System maintenance. No action needed."
            }

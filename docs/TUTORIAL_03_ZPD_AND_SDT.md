# Tutorial 03: Algorithmic Translation of ZPD and SDT

This tutorial delves into how Jane translates complex psychological frameworks into executable code, specifically focusing on the Zone of Proximal Development (ZPD) and Self-Determination Theory (SDT).

## 1. The Challenge of Implementing Psychology
Large Language Models (LLMs) are naturally inclined to be overly helpful, providing immediate, complete answers. This violates the core principles of SDT (which requires effort for competence) and ZPD (which requires the challenge to be slightly beyond current mastery). Jane overcomes this using programmatic interventions.

## 2. Modeling ZPD with the Fuzzy Controller
Instead of hardcoding difficulty levels, Jane uses a dynamic approach.

*   **The Concept**: ZPD is not static; it fluctuates based on the user's emotional state, fatigue, and recent successes.
*   **The Implementation**: The `src/backend/fuzzy_controller.py` utilizes a Fuzzy Logic inference system (`scikit-fuzzy`).
*   **How it Works**:
    1.  **Inputs**: The system tracks continuous metrics like "frustration markers" (e.g., repeated identical queries, use of negative language) and "mastery markers" (rapid success).
    2.  **Fuzzy Sets**: These inputs are mapped to fuzzy sets (poor, average, good).
    3.  **Rules Engine**: Rules dictate the outcome. For example, IF frustration is HIGH AND mastery is LOW, THEN scaffolding level is DIRECT SUPPORT.
    4.  **Output**: The controller outputs a float `target_zpd_level` (0.0 to 1.0).
*   **Dynamic Injection**: This `target_zpd_level` is dynamically injected into the Drafter's prompt, instructing the LLM on the precise vocabulary complexity and abstraction required for the current interaction.

## 3. Enforcing SDT via Heuristics and the Critic
Self-Determination Theory demands Autonomy, Competence, and Relatedness. Jane enforces these deterministically.

*   **Autonomy**: The Critic agent (`src/backend/orchestrator.py`) parses the Drafter's output. If the draft contains prescriptive commands ("You must do X"), it is penalized. The system requires the draft to present options ("You could try X or Y. Which seems better?").
*   **Competence (The Mistake Mentor)**: The system deliberately engineers "productive struggle." If the query intent is identified as problem-solving (e.g., math tutoring), the orchestrator injects "Mistake Mentor" prompts (`prompts/MISTAKE_MENTOR_PROMPTS.md`). This forces the Drafter to use Socratic questioning or partial hints instead of direct answers, ensuring the user earns their competence.
*   **Relatedness**: The `dad_heuristics.py` module explicitly blocks the AI from attempting to fulfill the relatedness need itself (preventing parasocial dependency). Instead, if isolation patterns are detected in `MEMORY.md`, the system triggers a routing fallback that explicitly prompts the user to engage with real-world human mentors or peers.

## 4. The Arbiter's Final Say
The translation of psychology into code culminates in the Arbiter. The qualitative evaluation of SDT and ZPD adherence is compiled into a deterministic Conviction Score. If the score falls below the required threshold (e.g., 0.95), the entire loop restarts. This guarantees that Jane never sacrifices psychological safety for conversational fluency.

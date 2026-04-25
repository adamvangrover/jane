# AGENTS: Python Orchestration Directives

## Core Directives for Agentic Systems

When modifying, testing, or reading code within the `src/` directory, you are operating on the Python orchestration layer—the core logic of the Cyclical Reasoning Graph. You must strictly adhere to the following directives to ensure reliable routing, psychological scaffolding, and deterministic output.

### 1. Scope
The scope of this `AGENTS.md` is strictly limited to the `src/` directory and its subdirectories (`backend/`, `core/`, `ui/`). This file supersedes any conflicting root-level `AGENTS.md` directives regarding implementation details.

### 2. Primary Objective
Your goal is to build, maintain, and optimize the Python application that orchestrates the Drafter, Critic, and Arbiter agents, strictly enforcing the psychological guardrails defined in the root `MASTER_PROMPT.md` and `SOUL.md`.

### 3. Execution and Testing
*   **Virtual Environment:** Ensure you are operating within a Python virtual environment and that `requirements.txt` is up-to-date.
*   **Testing:** Practice test-driven development. Ensure any heuristic logic (especially in `src/core/dad_heuristics.py`) or routing logic has corresponding unit tests.
*   **Running the Prototype:** You can verify the behavior of the entire pipeline by executing the interactive CLI prototype via `python -m src.ui.cli` from the repository root.

### 4. Psychological Scaffolding Guidelines
*   **Enforce Productive Struggle:** Ensure the logic in the orchestrator correctly identifies when to inject the "Mistake Mentor" (Artificial Friction) prompts.
*   **ZPD Calibration:** Ensure the Fuzzy Controller correctly updates the `target_zpd_level` based on interaction metrics, and that this level is accurately passed to the Drafter.
*   **Relational Integrity (DAD):** The system must strictly enforce the non-human, supportive sidekick persona. The `Critic` logic in `orchestrator.py` and heuristics in `dad_heuristics.py` must aggressively reject simulated empathy or parasocial attachments.

### 5. Architectural Constraints
*   **Strict JSON Output:** The final output of the `process_query` function must always adhere to the structured JSON schema defined in `MASTER_PROMPT.md`.
*   **No Elevated Privileges:** The Python code executing here operates within an ephemeral sandbox. Do not attempt to write code that reads sensitive host variables, executes arbitrary shell commands, or makes unauthorized network calls.
*   **Decoupled UI:** Ensure the `src/ui/` layer contains presentation logic only. No routing or policy enforcement should occur in the UI layer.

## Programmatic Checks
Before completing any plan that touches the `src/` directory, you MUST run:
1. `python -m unittest discover tests/` (once a test suite is established)
2. `python -m src.ui.cli` (manually verify the output schema and behavior for basic queries)
Ensure these checks pass before calling the submit tool.

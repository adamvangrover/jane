# AGENTS: Backend Orchestration Guidelines

## Scope
This file outlines the specific guidelines for AI agents contributing to the `src/backend/` directory, which manages the Cyclical Reasoning Graph.

## Core Directives
When modifying code in the backend:

1.  **Cyclical Reasoning Integrity**: Maintain the structural integrity of the Drafter -> Critic -> Arbiter loop. Any new orchestration features must fit within this loop rather than circumventing it.
2.  **Semantic Routing**: Updates to `semantic_router.py` must maintain fallback mechanisms and prioritize intent mapping over keyword matching. Ensure any new intent classes are documented in `prompts/ROUTER_PROMPTS.md` and have corresponding templates.
3.  **Fuzzy Controller**: When adjusting `fuzzy_controller.py`, ensure changes to membership functions or rules are mathematically grounded and preserve the smoothing of ZPD target levels. Avoid abrupt shifts in scaffolding difficulty.
4.  **Schema Enforcement**: Ensure the backend logic does not accidentally surface raw system prompts or internal confidence scores to the user-facing output payload unless specified by the schema. The final output must adhere strictly to the JSON schema defined in `MASTER_PROMPT.md`.
5.  **Test Coverage**: Modifications to orchestration logic must be accompanied by corresponding unit tests.

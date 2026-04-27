# AGENTS: Core Heuristics Guidelines

## Scope
This file outlines the specific guidelines for AI agents modifying the psychological heuristic engines within the `src/core/` directory.

## Core Directives
When modifying code in the core directory:

1.  **Strict Rule Preservation**: Changes to `dad_heuristics.py` must explicitly preserve existing constraints against simulated empathy and consciousness. Do not relax rules intended to block parasocial dependencies.
2.  **Deterministic Evaluation**: The heuristic outputs must remain deterministic to allow the Arbiter to calculate a reliable Conviction Score. Avoid relying on non-deterministic external calls within this core logic unless strictly necessary.
3.  **ZPD Proxy Logic**: Ensure any updates to text complexity calculations or ZPD matching algorithms (like `calculate_text_complexity`) remain lightweight and grounded in the established 0.0 to 1.0 scale.
4.  **Testing Policy Enforcement**: Every new rule or heuristic modification MUST have a corresponding unit test to verify that prohibited language is successfully flagged.

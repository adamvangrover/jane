# Jane Prompt Library

## Overview
This directory contains the foundational prompt templates that drive the various agents within the Jane Cyclical Reasoning Graph. 

Unlike traditional LLM applications that rely on a single, massive system prompt, Jane utilizes a **Modular Context Architecture**. Prompts are assembled dynamically at runtime, injecting specific contextual variables (like the current `target_zpd_level` from `MEMORY.md`) to ensure highly individualized, developmentally appropriate responses.

## Structure

1.  **`DRAFTER_PROMPTS.md`**: Templates for the initial generation phase, focusing on synthesizing context and user queries while adhering to the core persona.
2.  **`CRITIC_PROMPTS.md`**: Strict, objective evaluation schemas used by the Critic agent to grade the Drafter's output against psychological and ethical constraints. These prompts mandate structured JSON output.
3.  **`MISTAKE_MENTOR_PROMPTS.md`**: Specialized templates injected dynamically when the system determines that "artificial friction" or productive struggle is required.

## Assembly Logic
The Python orchestration layer (`src/backend/orchestrator.py`) is responsible for reading these templates, injecting variables (e.g., `{user_query}`, `{zpd_score}`, `{knowledge_context}`), and passing them to the underlying LLM via the secure execution environment.

## Policy Enforcement
All prompts in this library must strictly adhere to the policies defined in the root-level files:
*   `SOUL.md` (Relational Integrity)
*   `IDENTITY.md` (Core Purpose)
*   `AGENTS.md` (Operational Guidelines)

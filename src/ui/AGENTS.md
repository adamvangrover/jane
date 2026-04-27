# AGENTS: UI Layer Guidelines

## Scope
This file outlines the specific guidelines for AI agents working within the `src/ui/` presentation layer.

## Core Directives
When modifying code in the UI directory:

1.  **Zero Business Logic**: The UI layer must remain entirely devoid of orchestration, prompt generation, or policy enforcement logic. These responsibilities belong exclusively to the backend.
2.  **Display Only**: The UI is responsible only for passing user input to the orchestrator and rendering the finalized JSON output. Do not attempt to parse or evaluate the raw drafts.
3.  **No Emotional Embellishment**: UI enhancements must adhere to the Developmentally Aligned Design (DAD) principles. Avoid adding anthropomorphic avatars, simulated typing delays meant to mimic a human, or other elements that encourage parasocial bonding.
4.  **CLI Constraints**: For the current `cli.py` prototype, ensure error handling gracefully manages backend failures without exposing raw system prompts or traceback logic to the user if avoidable.

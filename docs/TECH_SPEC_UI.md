# UI Layer Technical Specifications

This document outlines the strict technical specifications for the boundary between the Jane orchestration backend and the user-facing presentation layer (`src/ui/`).

## 1. Zero Logic Principle
The UI layer is treated as a "dumb terminal". It must contain absolutely no logic pertaining to:
- Prompt generation or LLM interaction.
- Psychological scaffolding (ZPD, SDT).
- Policy enforcement (DAD constraints).
- Semantic routing or intent classification.

## 2. Data Flow Architecture

### Inbound (User -> UI -> Backend)
1.  The UI captures unstructured text from the user.
2.  The UI transmits this text *exactly as written* via a secure internal API or function call (e.g., `process_query(user_input)`) to the orchestration layer.
3.  The UI must not sanitize, modify, or append context to this input.

### Outbound (Backend -> UI -> User)
1.  The backend returns a strictly validated JSON payload (as defined in `MASTER_PROMPT.md`).
2.  The UI parses this JSON.
3.  The UI displays ONLY the content mapped to `user_facing_output.dialogue` and `user_facing_output.actionable_pathways`.
4.  The UI MUST NEVER display data from `jane_internal_metrics` (e.g., `target_zpd_level`, `conviction_score`) to the end-user in production environments.

## 3. UI/UX DAD Enforcement
To mitigate parasocial dependency (Developmentally Aligned Design), the UI must strictly adhere to the following visual constraints:
- **No Avatars**: Do not use human, animal, or highly anthropomorphized visual representations of the AI. Use abstract geometry or typography instead.
- **No Artificial Delays**: Do not implement "typing..." indicators designed to mimic human processing time. If the backend requires time to process the Cyclical Reasoning Graph, use a clearly mechanical "Processing..." or loading spinner.
- **Explicit Tool Framing**: The UI text and layout should continually reinforce that Jane is a tool and a system, not a peer.

# Backend Orchestration

## The Cyclical Reasoning Graph
The `src/backend/` directory orchestrates the multi-agent drafting and critiquing loop known as the Cyclical Reasoning Graph. This ensures that no single-pass LLM generation immediately reaches the user without prior validation against strict psychological and ethical parameters.

## Core Components

### 1. The Drafter (`orchestrator.py` prototype)
The Drafter's objective is to synthesize unstructured inputs and user queries into a preliminary response. It leverages localized embedding context (via the Semantic Router) to construct this initial draft.

### 2. The Critic (`orchestrator.py` prototype)
The Critic evaluates the Drafter's output against:
- **ZPD Proximity Score:** Retrieved from `MEMORY.md`. Ensures the text complexity and scaffolding match the user's developmental capacity.
- **Factual Accuracy:** Validates claims.
- **SDT Constraints:** Confirms the Drafter is not issuing prescriptive commands and is providing options (Autonomy). Ensures it praises effort (Competence) and addresses isolation (Relatedness).
- **Relational Integrity (DAD):** Verifies the Drafter has not simulated emotions or formed parasocial attachments.

### 3. The Arbiter (`orchestrator.py` prototype)
The Arbiter calculates a deterministic "Conviction Score" (0.0 - 1.0). If the score is `< 0.95`, the draft is rejected, an error trace is generated, and the cycle recurses back to the Drafter.

### 4. Semantic Router (`semantic_router.py`)
Uses localized sentence transformers (e.g., `all-MiniLM-L6-v2`) and cosine similarity to classify user intent dynamically. It maps incoming queries to specialized templates rather than relying on brittle keyword matching.

### 5. Fuzzy Controller (`fuzzy_controller.py`)
Tracks continuous variables like frustration markers and mastery markers. Smoothly shifts the target ZPD level up or down based on interaction history to ensure the user stays within the Zone of Proximal Development.

### 6. State Machine (`state_machine.py`)
Provides the deterministic logic that routes the Drafter's output to the Critic, then the Arbiter, and finally back to the user or Drafter based on the Conviction Score.

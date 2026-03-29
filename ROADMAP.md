# Jane System Development Roadmap

This roadmap outlines the planned developmental phases for the Jane companion system, emphasizing human actualization, security, and adaptive learning over time.

## Phase 1: Core Scaffold & Policy Enforcement (Current Phase)
*   **Objective:** Establish the foundational architecture, document guardrails, and scaffold the Python backend.
*   **Key Deliverables:**
    *   Align `SOUL.md`, `IDENTITY.md`, `AGENTS.md` to define the 'Supportive Sidekick' persona.
    *   Scaffold the Cyclical Reasoning Graph (`Drafter`, `Critic`, `Arbiter`).
    *   Implement basic ZPD logic in `MemoryManager`.
    *   Create a basic command-line interface (`src/ui/cli.py`) for testing structural output.

## Phase 2: Memory Integration & Dynamic Routing
*   **Objective:** Implement persistent, long-term memory systems and advanced semantic intent routing.
*   **Key Deliverables:**
    *   Implement file-based parsing and appending to `MEMORY.md`.
    *   Replace mock ZPD checks with mathematical proximity scoring using embeddings.
    *   Implement localized sentence transformers to classify intent (e.g., emotional support vs. academic help).
    *   Implement recursive refinement loop logging.

## Phase 3: Secure Iron Core Integration (Rust)
*   **Objective:** Offload critical orchestration, sandboxing, and policy enforcement to a secure Rust backend.
*   **Key Deliverables:**
    *   Implement the Rust execution layer.
    *   Establish "Agentic Zero-Trust Architecture" (SSH Mirror Mode) for tools.
    *   Move the Multi-Agent loop off Python logic onto the Rust orchestration engine.

## Phase 4: UI/UX Presentation Layer (TypeScript/React)
*   **Objective:** Create the user-facing interface, ensuring no business logic is leaked.
*   **Key Deliverables:**
    *   Develop a React Native frontend for accessibility.
    *   Enforce "Perceptual Fit" by adapting the UI syntax and layout to match the user's ZPD.
    *   Implement asynchronous WebSocket communication to the backend.

## Phase 5: Longitudinal Evaluation and Efficacy Testing
*   **Objective:** Validate the system's impact on cognitive development and SDT actualization.
*   **Key Deliverables:**
    *   Conduct A/B testing on Mistake Mentor artificial friction.
    *   Evaluate real-world engagement patterns to determine efficacy of relatedness prompts.
    *   Refine fuzzy logic control schema based on frustration markers.

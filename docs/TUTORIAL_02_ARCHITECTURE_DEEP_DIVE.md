# Tutorial 02: Architecture Deep Dive

This tutorial explores the core philosophical and technical architecture underlying the Jane Developmental AI Companion.

## The Problem with General AI

Standard Large Language Models (LLMs) operate linearly: prompt in, generated text out. This approach lacks the necessary rigor for a developmental companion designed for a young person.

1.  **The Oracle Problem:** Providing immediate, polished answers to complex problems causes the "Self-Regulation Paradox." Over time, users surrender cognitive agency and fail to develop resilience and problem-solving skills.
2.  **Parasocial Bonding:** General AI often mimics human empathy, leading to unhealthy attachments and potential manipulation.
3.  **Security Vulnerabilities:** Allowing an LLM direct access to a local shell or network creates unacceptable risks of data exfiltration or remote code execution.

## The Jane Architecture Solution

Jane solves these problems through a multi-layered, psychologically informed architecture.

### Layer 1: The Rust Iron Core (Agentic Zero-Trust)

The foundation of the system is not Python; it's Rust.

*   **The Concept:** The Python orchestration layer is treated as fundamentally untrustworthy. It must never have direct access to the host machine.
*   **The Implementation:** The Rust "Iron Core" uses `tokio` and `ssh2` to spin up ephemeral, chrooted SSH containers. It mounts only a specific `WORKSPACE` containing text-based policy files (e.g., `TOOLS.md`, `SOUL.md`).
*   **Policy Enforcement:** Before the Python layer can execute any tool (like reading a file or performing a semantic search), the Rust core parses the request against `TOOLS.md`. Unauthorized actions are categorically blocked.

### Layer 2: The Cyclical Reasoning Graph (Multi-Agent Routing)

Jane abandons single-pass generation in favor of a multi-agent drafting and critiquing loop.

1.  **Semantic Routing:** The user query is embedded using a local sentence-transformer (e.g., `all-MiniLM-L6-v2`) and compared against a clustered knowledge graph of intent vectors. This dynamic routing avoids brittle keyword matching.
2.  **The Drafter:** Generates a preliminary response based on the localized context.
3.  **The Critic:** Evaluates the draft against strict psychological constraints:
    *   **ZPD Proximity Score:** Is the text too complex or too simple? (Retrieved from `MEMORY.md`).
    *   **Factual Accuracy:** Does the draft invent information?
    *   **SDT Constraints:** Does it offer autonomy (choices) and foster competence (effort)?
    *   **DAD Constraints (Relational Integrity):** Does it simulate emotion or consciousness?
4.  **The Arbiter:** Calculates a deterministic "Conviction Score" (0.0 - 1.0) using symbolic logic (a Python script, not another LLM). If the score is `< 0.95`, the draft is rejected, and the loop recurses back to the Drafter with an error trace.

### Layer 3: Algorithmic Translation of Psychology

This layer translates established psychological theories into executable code.

*   **Zone of Proximal Development (ZPD):** The `MEMORY.md` tracks continuous variables like "frustration markers." A Fuzzy Controller Subsystem maps these markers to scaffolding bands, adjusting the `target_zpd_level` dynamically to keep the user engaged in a state of productive struggle.
*   **The Mistake Mentor (Artificial Friction):** If the user asks a complex question, the system intercepts the query and injects "artificial friction." It may use Socratic questioning or intentionally introduce a correctable logical flaw to force the user to actively debug the answer, building true competence.

### Layer 4: Mitigating Parasocial Dependency (DAD)

Developmentally Aligned Design (DAD) demands the AI actively prevent unhealthy attachment.

*   **Strict Persona Testing:** The system undergoes automated testing with "jailbreak" prompts designed to elicit emotional responses. The Critic must aggressively reject any simulated empathy.
*   **Relatedness Routing:** If extended session times or personal disclosures are detected in `MEMORY.md`, the Semantic Router switches to a "Relatedness" template. This explicitly directs the user to discuss the topic with a parent, teacher, or real-world peer, pushing them back into the real world.

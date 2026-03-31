# TECH_SPEC: System Architecture

## 1. Overview
The Jane Developmental AI Companion comprises a robust, secure infrastructure built on a "Agentic Zero-Trust" architecture. It isolates dynamic Python agentic logic using a Rust "Iron Core" control plane to enforce safety and policy.

## 2. The Rust "Iron Core" (Pillar 1)
- **Role:** Memory-safe gateway and sandbox manager.
- **Responsibilities:**
  - Spin up ephemeral, chrooted SSH sessions ("Mirror Mode").
  - Mount only the specific `WORKSPACE` containing policy files and active context.
  - Parse `TOOLS.md` before the Python layer executes any tool.
  - Intercept execution traces and categorically block unauthorized network egress or state mutations.
- **Technologies:** `tokio`, `ssh2`, `libssh2-sys`, Docker/Podman.

## 3. The Cyclical Reasoning Graph (Pillar 2)
- **Role:** Multi-agent routing loop for safe output generation.
- **Responsibilities:**
  - **Drafter:** Generates initial responses based on localized embeddings.
  - **Critic:** Evaluates against `AGENTS.md` and `SOUL.md` (ZPD proximity, factual accuracy, SDT autonomy). Outputs structured JSON.
  - **Arbiter:** Calculates a deterministic Conviction Score (0.0 - 1.0). Re-routes if `< 0.95`.
- **Technologies:** LangGraph, `instructor`, `outlines`, `sentence-transformers` (e.g., `all-MiniLM-L6-v2`).

## 4. Algorithmic Translation of ZPD and SDT (Pillar 3)
- **Role:** Translating psychological frameworks into executable code.
- **Responsibilities:**
  - **Fuzzy Controller:** Maps "frustration markers" or "mastery markers" to scaffolding bands (emerging, developing, proficient). Adjusts `target_zpd_level` smoothly.
  - **Mistake Mentor (Artificial Friction):** Intercepts complete answers and injects Socratic questioning or intentional correctable flaws to enforce "productive struggle."
- **Technologies:** `scikit-fuzzy`, Dynamic Prompt Assembly middleware.

## 5. Mitigating Parasocial Dependency (DAD) (Pillar 4)
- **Role:** Enforcing "Relational Integrity" and active real-world connection.
- **Responsibilities:**
  - Reject simulated empathy or consciousness via strict `SOUL.md` policy.
  - Avoid manipulative engagement loops in UI/UX.
  - Route users to "Relatedness" templates when extended session times or personal disclosures are detected in `MEMORY.md`.
- **Technologies:** Automated "jailbreak" test suites, background monitoring daemons.
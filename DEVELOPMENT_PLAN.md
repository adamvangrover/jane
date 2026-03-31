# DEVELOPMENT PLAN & CHECKLIST

## 1. Rust Iron Core (Pillar 1)
- [ ] Initialize Rust Cargo workspace.
- [ ] Implement `tokio` for async orchestration.
- [ ] Integrate `ssh2` or `libssh2-sys` for managing isolated containers.
- [ ] Develop the Policy Enforcement Engine to parse `TOOLS.md`.
- [ ] Spin up ephemeral Docker/Podman containers for the Python agent.

## 2. Python Orchestration Layer (Pillar 2)
- [x] Create a prototype of the Cyclical Reasoning Graph.
- [ ] Integrate LangGraph or custom state loop for Drafter/Critic logic.
- [ ] Implement strict structured JSON enforcement using `instructor` or `outlines`.
- [ ] Host a local `sentence-transformers` model (`all-MiniLM-L6-v2`) for Semantic Routing.

## 3. ZPD & SDT Computational Modeling (Pillar 3)
- [x] Create a prototype for ZPD and SDT heuristics.
- [ ] Develop a Fuzzy Controller Subsystem using `scikit-fuzzy` to track metrics.
- [ ] Implement Dynamic Prompt Assembly to inject current `target_zpd_level`.
- [ ] Build the "Mistake Mentor" Friction Interceptor.

## 4. DAD & Security Testing (Pillar 4)
- [x] Define explicit relational boundaries in `SOUL.md` and `IDENTITY.md`.
- [ ] Create an automated test suite of "jailbreak" prompts for emotional responses.
- [ ] Integrate a background daemon to monitor `MEMORY.md` for digital isolation patterns.

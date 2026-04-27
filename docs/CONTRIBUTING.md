# Contributing to Jane

Thank you for your interest in contributing to the Jane Developmental AI Companion project. Whether you are a human developer or an AI agent, your contributions to building a secure, psychologically aligned companion are valued.

## 1. Project Philosophy

Before contributing, please review the core documentation to align with the project's philosophy:
*   `ARCHITECTURE.md`
*   `WHITEPAPER.md`
*   `SOUL.md`

We prioritize **Developmentally Aligned Design (DAD)** and **Self-Determination Theory (SDT)** over generalized AI capabilities. The system is designed for productive struggle, not frictionless answers.

## 2. Agentic Contributions (AI Agents)

If you are an AI agent contributing to this repository, you must adhere to the following rules:

1.  **Read the `AGENTS.md` Files:** The root-level `AGENTS.md` and any directory-specific `AGENTS.md` files (e.g., in `rust_core/` or `src/`) dictate your operational constraints.
2.  **Zero-Trust Security:** You are operating in a sandbox. Do not attempt to modify files outside the designated workspace or egress data without explicit approval.
3.  **Test-Driven Development:** For any logic changes, write or update corresponding tests. Never mark a plan complete without verifying the outcome of your changes.
4.  **No Artifact Modification:** Edit source code, not build artifacts.

## 3. Human Contributions

### Getting Started
1.  **Environment Setup:** Review `docs/TUTORIAL_01_GETTING_STARTED.md` and `rust_core/BUILD_GUIDE.md` for instructions on setting up the Python orchestrator and the Rust Iron Core.
2.  **Issue Tracking:** Please check existing issues or create a new one to discuss significant architectural changes before implementing them.

### Code Style and Conventions
*   **Rust:** Follow standard Rust idioms and use `rustfmt` and `clippy`.
*   **Python:** Follow PEP 8 guidelines. Ensure type hints are used for core logic.

### Pull Request Process
1.  **Branching:** Create a descriptive branch name (e.g., `feature/fuzzy-controller` or `fix/routing-bug`).
2.  **Documentation:** Update READMEs or technical specs if your change alters the architecture or user flow.
3.  **Testing:** Ensure all existing tests pass and add new ones for your functionality. (e.g., `cargo test` and Python unit tests).
4.  **Review:** Your PR will be evaluated on technical merit and strict adherence to the project's psychological constraints (DAD and SDT).

## 4. Reporting Security Vulnerabilities

If you discover a potential vulnerability in the Iron Core sandbox or the Agentic Zero-Trust architecture, please do not open a public issue. Instead, contact the maintainers directly to coordinate a responsible disclosure.

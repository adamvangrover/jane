# AGENTS: Rust Core Directives

## Core Directives for Agentic Systems

When modifying, testing, or reading code within the `rust_core/` directory, you are operating on the system's most critical security boundary: the Iron Core control plane. You must strictly adhere to the following directives to ensure memory safety, robust sandboxing, and policy enforcement.

### 1. Scope
The scope of this `AGENTS.md` is strictly limited to the `rust_core/` directory and its subdirectories. This file supersedes any conflicting root-level `AGENTS.md` directives regarding implementation details.

### 2. Primary Objective
Your goal is to build, maintain, and secure the Rust gateway that manages the ephemeral SSH sandboxes (Mirror Mode) and enforces the `TOOLS.md` policy.

### 3. Execution and Testing
*   **Compilation:** You must always verify that your code compiles cleanly using `cargo check` and builds successfully with `cargo build`.
*   **Testing:** Practice test-driven development. If you introduce new logic (especially for parsing `TOOLS.md` or managing sandboxes), write comprehensive unit tests in `src/`. Run tests using `cargo test`.
*   **No Untested Commits:** Do not assume a change works without running `cargo test`.

### 4. Security Imperatives
*   **Strict Memory Safety:** Leverage Rust's borrow checker to ensure memory safety. Do not use `unsafe` blocks unless absolutely necessary and thoroughly documented.
*   **Zero-Trust Policy Enforcement:** Ensure the Iron Core meticulously parses the root `TOOLS.md` file. Any action requested by the Python layer that is not explicitly allowlisted in `TOOLS.md` must be categorically blocked.
*   **Workspace Isolation:** The sandboxing mechanism must strictly mount only the designated `WORKSPACE` directory. Ensure the Python process cannot traverse directories, access host environment variables, or execute arbitrary shell commands.
*   **Secure Dependencies:** Thoroughly vet any new crates added to `Cargo.toml`. Prefer well-maintained, established libraries (e.g., `tokio`, `serde`, `ssh2`).

### 5. Interaction Guidelines
*   **Documentation:** Ensure all public functions and complex logic blocks are documented clearly.
*   **Clear Error Handling:** Implement robust error handling. Do not `panic!` on foreseeable errors (e.g., failing to parse a policy file); return structured errors to the caller.

## Programmatic Checks
Before completing any plan that touches the `rust_core/` directory, you MUST run:
1. `cd rust_core && cargo check`
2. `cd rust_core && cargo test` (if tests exist)
Ensure these checks pass before calling the submit tool.

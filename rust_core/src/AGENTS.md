# AGENTS: Rust Source Guidelines

## Scope
This file outlines the guidelines for AI agents modifying the inner workings of the Rust Iron Core located in `rust_core/src/`.

## Core Directives
When modifying code in the Rust source directory:

1.  **Memory Safety over Features**: Any changes to `main.rs`, `policy.rs`, or `sandbox.rs` must prioritize Rust's memory safety guarantees. Avoid `unsafe` blocks entirely unless explicitly justified and thoroughly audited.
2.  **Sandbox Integrity**: The `sandbox.rs` implementation (managing ephemeral SSH or chrooted environments) is critical. Do not loosen the `WORKSPACE` mount restrictions. Ensure the Python process absolutely cannot traverse to the host system.
3.  **Strict Policy Enforcement**: In `policy.rs`, the parsing of `TOOLS.md` must be infallible. If a requested capability by the Python orchestration layer is not explicitly mapped and approved in the policy, it must be robustly denied.
4.  **Error Handling**: Do not use `unwrap()` or `expect()` in production paths. Bubble up errors gracefully using `Result` so the control plane can handle sandbox failures predictably.
5.  **Compilation & Testing**: Every change MUST compile cleanly (`cargo check`) and pass existing tests (`cargo test`).

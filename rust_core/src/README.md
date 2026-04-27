# Rust Core Internals

This directory contains the foundational logic for the Rust "Iron Core" sandbox manager.

## Core Modules

### 1. `main.rs`
The entry point for the Iron Core daemon.
- **Responsibilities:**
  - Initializes the asynchronous runtime (`tokio`).
  - Bootstraps the configuration and parses command-line arguments.
  - Instantiates the `SandboxManager` and `PolicyEngine`.
  - Spawns the main event loop to monitor and manage the isolated Python orchestration processes.

### 2. `policy.rs`
The Policy Enforcement Engine.
- **Responsibilities:**
  - Reads and meticulously parses the `TOOLS.md` file from the workspace root.
  - Maintains the in-memory representation of allowlisted capabilities.
  - Intercepts requests from the Python layer and evaluates them against the active policy.
  - Returns robust `Result` types indicating explicit approval or categorical denial of an action.

### 3. `sandbox.rs`
The Execution Isolation Manager.
- **Responsibilities:**
  - Manages the lifecycle of the ephemeral execution environments (e.g., via `ssh2` or container APIs).
  - Enforces "Mirror Mode" by strictly mounting only the designated `WORKSPACE` directory.
  - Sets up chroot jails or network namespaces to prevent unauthorized egress and host state mutation.
  - Handles the secure teardown of the environment upon session completion or fatal error.

## Development Philosophy
Modifications within this directory must prioritize memory safety and zero-trust principles above all else. Refer to `AGENTS.md` for specific rules regarding compilation, testing, and error handling.

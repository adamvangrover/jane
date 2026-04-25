# Rust Iron Core: The Control Plane

## Overview
The Rust "Iron Core" forms the foundational execution layer of the Jane Developmental AI Companion architecture. It enforces the "Agentic Zero-Trust" protocol, serving as a memory-safe gateway that isolates the dynamic Python orchestration layer from the host system.

## Key Responsibilities
1. **Sandboxing:** Spins up ephemeral, chrooted SSH sessions ("Mirror Mode").
2. **Policy Enforcement:** Parses `TOOLS.md` before the Python layer can execute any tool. Intercepts execution traces to block unauthorized network egress or state mutations outside the designated `WORKSPACE`.
3. **Memory Safety:** Rust's strict borrowing and ownership rules prevent buffer overflows and memory leaks, mitigating common attack vectors in sandboxed environments.
4. **Lifecycle Management:** Controls the creation and destruction of secure execution environments using container technologies (Docker/Podman).

## Core Technologies
*   **Rust:** Chosen for its unparalleled memory safety guarantees and performance.
*   **`tokio`:** Powers asynchronous orchestration and non-blocking I/O.
*   **`ssh2` / `libssh2-sys`:** Manages SSH connections to isolated containers.
*   **Docker / Podman:** Used to instantiate the ephemeral `WORKSPACE`.

## Structure
*   `Cargo.toml`: The workspace manifest defining dependencies.
*   `src/`: The source directory containing the implementation of the control plane (currently a scaffold).

## Next Steps
See `BUILD_GUIDE.md` for instructions on how to initialize and compile the project. The primary focus of development will be implementing the Policy Enforcement Engine to strictly adhere to `TOOLS.md` and `AGENTS.md`.

# Building the Rust Iron Core

## Prerequisites
Before you begin, ensure you have the following installed on your system:
*   **Rust and Cargo:** The Rust toolchain. You can install it via [rustup](https://rustup.rs/).
*   **Docker or Podman:** Required for spinning up the ephemeral sandboxed environments.
*   **Development Libraries:** You may need libraries for `libssh2-sys` depending on your OS (e.g., `libssh2-1-dev` on Debian/Ubuntu).

## Initialization
The `rust_core` directory is configured as a Cargo workspace.

1.  Navigate to the `rust_core` directory:
    ```bash
    cd rust_core
    ```
2.  If this is your first time, ensure the workspace builds correctly:
    ```bash
    cargo check
    ```

## Building the Project
To compile the Iron Core in debug mode:
```bash
cargo build
```

To compile for production (release mode):
```bash
cargo build --release
```
The compiled binaries will be located in the `target/release/` directory.

## Testing
Run the test suite to ensure all policy enforcement logic and sandboxing mechanisms are functioning correctly:
```bash
cargo test
```

## Running the Core
The Iron Core is designed to run as a daemon or a parent process that spawns the Python orchestrator within a secure container.
```bash
cargo run
```
*Note: Depending on the implementation, you may need to provide specific command-line arguments specifying the path to the Python workspace and the `TOOLS.md` policy file.*

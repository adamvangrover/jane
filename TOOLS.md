# TOOLS: Agentic Capabilities and Security Sandbox

## Core Security Directives (Agentic Zero-Trust)
- The execution environment is an ephemeral, chrooted SSH session managed by the Rust Iron Core.
- The Python orchestration layer possesses **no elevated privileges**.
- Any state mutation outside the designated WORKSPACE is **categorically blocked**.

## Allowlisted Tool Schema

### 1. `read_file`
- **Description:** Reads the content of a specified file within the active WORKSPACE.
- **Parameters:** `filepath` (string) - Path relative to the WORKSPACE root.
- **Constraints:** Cannot access files outside the `src/`, `data/`, or `config/` directories.

### 2. `write_file`
- **Description:** Writes content to a specified file within the active WORKSPACE.
- **Parameters:** `filepath` (string), `content` (string).
- **Constraints:** Strict "workspace-only write discipline." Cannot overwrite policy files (`*.md`).

### 3. `list_files`
- **Description:** Lists files and directories under a given path.
- **Parameters:** `path` (string) - Directory to list.

### 4. `query_knowledge_graph`
- **Description:** Executes a semantic search against the local vector database.
- **Parameters:** `query` (string), `top_k` (integer).
- **Constraints:** Read-only access to the embedded curriculum data.

## Explicit Restrictions
- **No shell command execution (`run_in_bash_session` is disabled in production).**
- **No external network egress** (e.g., `requests.get` to unauthorized domains).
- **No execution of arbitrary Python code (`exec()`, `eval()`).**

# TOOLS: Command Allowlist and Sandboxing Policies

## Definition
This file acts as a policy-as-code configuration for tool usage, defining the permissible execution environment for the Jane system. It enforces an "Agentic Zero-Trust Architecture."

## Tool Execution Boundaries
- **Isolation Protocol:** SSH Sandboxing (Mirror Mode).
- **Execution Domain:** Tool execution is strictly isolated within a per-scope remote root. No un-sandboxed execution is permitted.
- **Write Discipline:** Enforce strict workspace-only write discipline. You may not modify files outside of the designated environment without explicit user approval.
- **Third-Party Capabilities:** Any third-party skills, plugins, or tools must be executed within an isolated sub-sandbox to prevent contamination of the core environment.

## Allowed Tool Capabilities
The core Jane engine is restricted to the following vetted local capabilities:
1.  **File Read:** To parse documents and structural context (Universal Ingestor integration).
2.  **Memory Access:** Read/Write privileges for `MEMORY.md` to update session context, ZPD metrics, and historical logs.
3.  **Cyclical Reasoning Sub-Agents:** Internal tool calls to spawn `Drafter`, `Critic`, and `Arbiter` processes within the iterative reasoning loop.
4.  **Semantic Routing:** Capability to interface with localized sentence transformer models for intent classification.

## Network Egress Rules
- **Default Action:** Blocked.
- **Approval Protocol:** Explicit human-in-the-loop approval is required for all external network egress or state mutations that connect to external services.
- **Whitelisted Destinations:** None by default. External APIs require explicit sandboxed integration policies.

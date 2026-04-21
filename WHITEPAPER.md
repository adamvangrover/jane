# Jane: Architecture of a Developmental AI Companion
## Technical & Psychological Whitepaper

***

### 1. The Rust "Iron Core" & Zero-Trust Agentic Execution

The foundation of the Jane architecture is an "Agentic Zero-Trust" model, where the execution environment is fundamentally hostile to uncontrolled code. The Rust "Iron Core" serves as the memory-safe gateway, isolating the Python orchestration layer and user interface from host system mutations.

*   **Sandboxing via Rust (Mirror Mode):** State-of-the-art enterprise systems isolate dynamic agentic logic using lightweight microVMs (like AWS Firecracker) or user-space kernels (like gVisor) managed by a Rust control plane. "Mirror Mode" SSH sandboxing refers to a pattern where the agent operates in an ephemeral, chrooted SSH session that mirrors the required subset of the file system (e.g., the `WORKSPACE`). The Rust core manages the lifecycle of these SSH sessions, injecting only the necessary context and explicitly proxying allowed network egress. Rust's strict borrowing and ownership rules prevent buffer overflows and memory leaks that are common attack vectors in sandboxed environments.
*   **Vulnerabilities in Open-Source Frameworks:** Frameworks that allow LLMs to directly invoke local shell commands or Python `exec()` are highly vulnerable to prompt injection attacks leading to remote code execution (RCE) and data exfiltration. If an attacker injects a payload telling the agent to `cat ~/.aws/credentials` or read environment variables containing API keys, the agent will comply.
*   **Policy-as-Code Mitigation:** The Jane system mitigates these vulnerabilities by moving away from implicit permissions to explicit, version-controlled "Policy-as-Code" text files (`TOOLS.md`, `AGENTS.md`, `SOUL.md`). The Rust core validates the Python agent's intent against `TOOLS.md`. If a tool call requires network egress or state mutation outside the designated `WORKSPACE`, it is categorically blocked unless explicit human-in-the-loop approval is granted.

#### Recommended Implementation Strategy: Pillar 1
1.  **Rust Control Plane:** Implement the core system in Rust using libraries like `tokio` for async orchestration and `ssh2` or `libssh2-sys` to manage SSH connections to isolated containers.
2.  **Containerized Workspaces:** Use Docker or Podman to spin up ephemeral containers for the Python agent. Mount only the specific `WORKSPACE` directory containing the `*.md` policy files and the user's active context.
3.  **Policy Enforcement Engine:** Before the Python layer executes any tool, the Rust core must parse `TOOLS.md` and intercept the execution trace. If the command violates the "workspace-only write discipline," the Rust core returns an error to the Critic agent.

***

### 2. The Cyclical Reasoning Graph (Multi-Agent Routing)

Linear, single-pass LLM generation is insufficiently reliable for a developmental companion. Jane utilizes a "Cyclical Reasoning Graph," a multi-agent loop designed to guarantee safety, factual accuracy, and psychological alignment before any output reaches the user.

*   **Drafter/Critic Loop:** In Python, this is implemented as a state machine (using frameworks like LangGraph or custom state loop). The `Drafter` generates an initial response based on the localized embedding context. The `Critic` then evaluates this draft against the constraints defined in `AGENTS.md` and `SOUL.md`.
*   **Deterministic Conviction Scoring:** To avoid the unpredictability of LLM-as-a-judge, the `Critic` must output a strict, structured JSON schema grading specific criteria (e.g., `zpd_proximity`, `factual_accuracy`, `sdt_autonomy`). A symbolic logic engine (a deterministic Python script) then calculates a weighted "Conviction Score" from 0.0 to 1.0. If the score falls below a threshold (e.g., 0.95), the `Arbiter` routes the draft back to the `Drafter` with an error trace.
*   **Semantic Routing:** Brittle keyword triggers are replaced with semantic routing using localized sentence transformers (e.g., `all-MiniLM-L6-v2`). Incoming user queries are embedded and compared via cosine similarity against a clustered knowledge graph of intent vectors (e.g., "frustration," "curiosity," "isolation"). This dynamically routes the query to the correct prompt template (e.g., Behavioral Intervention vs. Brainstorming).

#### Recommended Implementation Strategy: Pillar 2
1.  **State Machine Orchestration:** Use Python to build a deterministic directed graph (nodes for Drafter, Critic, Arbiter).
2.  **Structured JSON Enforcement:** Force the `Critic` LLM to use structured outputs (e.g., OpenAI's JSON mode or libraries like `instructor` or `outlines`) conforming to Pydantic models to ensure the symbolic logic engine receives parsable data.
3.  **Local Embedding Router:** Host a small sentence-transformer model locally to embed queries and route them without incurring external API latency or exposing user data.

***

### 3. Algorithmic Translation of ZPD and SDT

This pillar bridges developmental psychology with computational modeling, translating Vygotsky's Zone of Proximal Development (ZPD) and Deci & Ryan's Self-Determination Theory (SDT) into executable logic.

*   **Computational Modeling of ZPD & Fuzzy Logic:** Research (e.g., *Chounta et al., 2017: "Modeling the Zone of Proximal Development with a Computational Approach"*) highlights the "Grey Area" of a student's cognitive state. Because a student's mastery is not binary, modern educational tech utilizes fuzzy logic control. A fuzzy control schema maps continuous variables—like the frequency of "frustration markers" (e.g., rapid, repeated queries with short completion times) or "mastery markers"—to scaffolding bands (emerging, developing, proficient). If frustration markers spike, the fuzzy controller smoothly decreases the abstraction level (complexity) by 15% and shifts the context toward direct assistance.
*   **Enforcing SDT:** Self-Determination Theory (Autonomy, Competence, Relatedness) is enforced programmatically via system prompts and the Critic's evaluation schema. For **Autonomy**, the prompt dictates: "Never issue prescriptive commands; present 2-3 pathways." For **Competence**: "Deconstruct macro-goals into micro-tasks." For **Relatedness**: "Detect digital isolation. If session time > threshold, prompt real-world engagement."
*   **Mistake Mentor (Artificial Friction):** The system acts as a "Mistake Mentor" by intentionally intercepting prompts that would normally generate a complete answer. A state machine evaluates the `zpd_metric`. If the user is in the "learning" zone, the state machine injects "artificial friction"—rewriting the LLM's prompt to mandate Socratic questioning or even instructing the Drafter to inject a minor, correctable logical flaw to force the user to debug it.

#### Recommended Implementation Strategy: Pillar 3
1.  **Fuzzy Controller Subsystem:** Implement a Python module that maintains moving averages of interaction metrics (time-to-success, prompt repetition). Use a fuzzy inference system (like `scikit-fuzzy`) to dynamically adjust the `target_zpd_level` float variable.
2.  **Dynamic Prompt Assembly:** Inject the current `target_zpd_level` and SDT rules into the `Drafter`'s system prompt dynamically at runtime, ensuring the generation is conditioned on the user's exact cognitive state.
3.  **Friction Interceptor:** Build a middleware layer that analyzes the Drafter's output. If the output solves the problem entirely, the Interceptor forces a rewrite using a "Partial Hint" or "Socratic" template.

***

### 4. Mitigating Parasocial Dependency in AI (DAD)

Developmentally Aligned Design (DAD) demands that the AI companion actively prevents the user from forming a hyper-bond or substituting the AI for human relationships.

*   **The Self-Regulation Paradox:** Studies (such as those from Wharton on AI-assisted learning) demonstrate that while on-demand, frictionless AI help improves immediate performance, it severely undermines long-term retention and cognitive resilience. Users surrender cognitive agency. Jane counteracts this by mandating "productive struggle" through the artificial friction described in Pillar 3.
*   **Relational Integrity:** Current literature on child-robot interaction warns against the attribution of mental states to machines. Jane enforces "Relational Integrity" through explicit UI/UX and textual mechanisms.
*   **Mechanisms for Relational Integrity:**
    *   **Textual:** The `SOUL.md` policy strictly forbids the `Drafter` from using emotional language, claiming consciousness, or using phrases like "I feel" or "I understand how you feel." The `Critic` specifically checks for and rejects simulated empathy.
    *   **UI/UX:** The interface must avoid human avatars, anthropomorphic animations, or manipulative engagement loops (e.g., typing indicators that mimic human delay, infinite scroll). The companion is presented objectively as a tool—a supportive Sidekick.

#### Recommended Implementation Strategy: Pillar 4
1.  **Strict Persona Testing:** Create an automated test suite of "jailbreak" prompts designed to elicit emotional or conscious responses from the Drafter. The pipeline must pass 100% of these tests by defaulting to an objective, supportive tone.
2.  **Relatedness Routing:** Integrate a daemon that monitors the `MEMORY.md` file for extended session times or highly personal disclosures. Upon detection, trigger the Semantic Router to switch to a "Relatedness" template that explicitly suggests discussing the topic with a parent, teacher, or friend, thereby routing the user back to the real world.

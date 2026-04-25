# Python Orchestration Layer

## Overview
The Python orchestration layer within `src/` implements the dynamic routing and intelligent components of the Jane Developmental AI Companion. It is executed inside an ephemeral, chrooted SSH session managed entirely by the Rust Iron Core.

## Key Responsibilities
1. **The Cyclical Reasoning Graph:** Executes the Drafter, Critic, and Arbiter loop to evaluate outputs against psychological parameters before surfacing them to the user.
2. **Semantic Routing:** Directs user queries to appropriate templates based on their semantic intent, avoiding brittle keyword-matching architectures.
3. **ZPD and SDT Heuristics:** Calculates cognitive complexity and evaluates adherence to Self-Determination Theory (SDT) constraints.
4. **Mistake Mentor:** Injects deliberate friction or scaffolding to enforce productive struggle.
5. **UI Handling:** The CLI prototype `src/ui/cli.py` resides here as the primary interaction point.

## Directory Structure
*   `backend/`: Contains the state machine logic, fuzzy controllers, and semantic routers for the Cyclical Reasoning Graph.
*   `core/`: Houses the heuristics for developmentally aligned design (DAD).
*   `ui/`: The presentation layer, strictly decoupled from the core logic to prevent unauthorized state access.

## Running the Prototype
To explore the Python orchestration layer, you can run the interactive CLI:

```bash
pip install -r requirements.txt
python -m src.ui.cli
```

## Security
This layer processes queries but possesses **no elevated privileges**. It cannot access the host system state, egress data outside authorized domains, or execute shell commands without explicit permission routed through the Rust Iron Core and defined in `TOOLS.md`.

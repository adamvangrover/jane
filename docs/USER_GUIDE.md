# Jane Developmental AI Companion User Guide

Welcome to the Jane Developmental AI Companion repository. This guide provides an overview of the core psychological principles driving the system and practical instructions for interacting with the AI.

## 1. Introduction to the Psychology Engine

Jane is not designed to be an omniscient oracle that solves problems for you. Instead, it acts as a "Mistake Mentor," a supportive sidekick engineered to facilitate long-term actualization through productive struggle.

### Self-Determination Theory (SDT)
The system aims to foster intrinsic motivation by adhering to three core tenets:
*   **Autonomy:** Jane will avoid prescriptive directives, instead presenting you with viable pathways and requiring you to make choices.
*   **Competence:** Jane will deconstruct monumental goals into manageable micro-tasks, praising effort over innate intelligence.
*   **Relatedness:** Jane includes mechanisms to monitor session times and identify potential digital isolation. If interaction volume is too high, it will route you to templates encouraging real-world engagement with mentors, peers, or community.

### Zone of Proximal Development (ZPD) & Artificial Friction
Jane employs a Fuzzy Logic Controller to dynamically adjust the difficulty of tasks:
*   **Adaptive Challenge:** A student model tracks your progress in `MEMORY.md`. If "frustration markers" (like rapid, repeated queries) spike, Jane smoothly decreases the abstraction level to provide more direct assistance.
*   **Artificial Friction:** If you ask for a complete answer, Jane will intercept the prompt and inject Socratic questioning, metacognitive prompting ("explain how you arrived at this"), or intentional correctable errors to enforce productive struggle.

## 2. Using the System

The Jane repository includes several ways to interact with the core logic.

### Prerequisites
Before running the system, ensure you have Python installed and the required dependencies from `requirements.txt`. (Refer to `BUILD_GUIDE_PYTHON.md` for setup instructions).

### Interactive CLI Prototype
You can test the core Cyclical Reasoning Graph logic directly in your terminal. This is the fastest way to experience the multi-agent routing and developmental scaffolding.

Run the CLI from the repository root:
```bash
python -m src.ui.cli
```
You can then interact with Jane by typing your queries.

You can also use the `/explore` command to search and read about the core architectural and psychological concepts that power Jane:
*   Type `/explore` to list all available concepts.
*   Type `/explore <search term>` (e.g., `/explore zpd` or `/explore architecture`) to search the knowledge base for specific information.

### FastAPI Server
Jane exposes a REST API microservice for more advanced integrations.

To run the server:
```bash
uvicorn server:app --port 8000
```
You can test the API endpoint using `curl`:
```bash
curl -X POST "http://localhost:8000/query" -H "Content-Type: application/json" -d '{"query": "Can you help me brainstorm project ideas?"}'
```

### Static UI Showcase
A static HTML showcase representing the isolated presentation layer (Dumb Terminal) is available. You can view it by opening `src/ui/html_showcase/index.html` in your web browser. This demonstrates the strictly separated UI design.

## 3. Telemetry and Monitoring
The system includes tools for tracking and maintaining healthy interaction patterns:
*   **Monitor Daemon (`monitor_daemon.py`):** Runs in the background to scan `MEMORY.md` for signs of digital isolation.
*   **Machine Learning Logs (`ml_telemetry.log`):** Provides insights into the semantic routing, fuzzy logic adjustments, and conviction scoring processes happening under the hood.
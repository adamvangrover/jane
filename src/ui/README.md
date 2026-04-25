# User Interface Layer

## Overview
The `src/ui/` directory strictly contains the presentation layer of the Jane Developmental AI Companion. It is entirely decoupled from the core orchestration logic and possesses zero client-side logic regarding cognitive scaffolding or policy enforcement.

## The CLI Prototype
Currently, the interface consists of a simple interactive Command Line Interface (`cli.py`). This allows users and developers to interact with the backend orchestrator and test the Cyclical Reasoning Graph.

### Running the Prototype

To start the interactive CLI, execute the following from the repository root:

```bash
pip install -r requirements.txt
python -m src.ui.cli
```

### Security Boundary
This layer only sends unstructured user input to the backend and displays the validated structured JSON output. It does not evaluate the Conviction Score, maintain the `MEMORY.md` state, or access `TOOLS.md`. All logic resides securely within the Python orchestration layer behind the Rust Iron Core sandbox.

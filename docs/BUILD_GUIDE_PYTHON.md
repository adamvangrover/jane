# Python Layer Build Guide

This guide details the setup and configuration of the Python orchestration layer for the Jane Developmental AI Companion.

## Prerequisites
- Python 3.8 or higher.
- A virtual environment manager (`venv`, `conda`, `poetry`).

## Setup Instructions

1.  **Create a Virtual Environment:**
    Navigate to the root of the repository and create a virtual environment to isolate dependencies.
    ```bash
    python -m venv venv
    ```

2.  **Activate the Environment:**
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    - On macOS/Linux:
      ```bash
      source venv/bin/activate
      ```

3.  **Install Dependencies:**
    Install the required packages listed in `requirements.txt`.
    ```bash
    pip install -r requirements.txt
    ```
    *Note: Ensure `sentence-transformers>=3.0.0` is installed to prevent caching initialization errors during API startup.*

## Running the Components

### Interactive CLI Prototype
To test the core Cyclical Reasoning Graph logic directly in your terminal:
```bash
python -m src.ui.cli
```

### FastAPI Backend Server
To run the REST API microservice for the orchestrator:
```bash
uvicorn server:app --port 8000
```
You can test the server using `curl`:
```bash
curl -X POST "http://localhost:8000/query" -H "Content-Type: application/json" -d '{"query": "1+1"}'
```

## Running Tests
To ensure the orchestration logic and heuristics are functioning correctly, run the unit test suite:
```bash
python -m unittest discover tests/
```
*(Note: Ensure a `tests/` directory exists with valid test cases).*

import sys
import os
import json

# Add parent dir to path so imports work
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from src.backend.orchestrator import Orchestrator

def main():
    print("Initializing Jane Developmental System Prototype...")
    print("-------------------------------------------------")
    orchestrator = Orchestrator()
    print("Type 'exit' to quit.\n")

    while True:
        try:
            query = input("User > ")
            if query.lower().strip() in ["exit", "quit"]:
                print("Exiting Jane System. Session metrics logged to MEMORY.md.")
                break

            if not query.strip():
                continue

            print("\n[Internal] Invoking Cyclical Reasoning Graph (Draft -> Critique -> Refine)...")
            response_json = orchestrator.process_query(query)

            print("\n--- Final Structured Output ---")
            print(json.dumps(response_json, indent=2))
            print("-------------------------------\n")

        except KeyboardInterrupt:
            print("\nExiting Jane System.")
            break
        except Exception as e:
            print(f"\n[Error] {e}")

if __name__ == "__main__":
    main()

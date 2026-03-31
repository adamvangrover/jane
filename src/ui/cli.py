import json
import sys
from src.backend.orchestrator import process_query

def main():
    print("Jane Developmental AI Companion Prototype")
    print("Type 'exit' or 'quit' to close.")
    print("-" * 40)

    while True:
        try:
            user_input = input("\nUser: ")
            if user_input.lower() in ['exit', 'quit']:
                print("Jane: Logging session metrics to memory...")
                break

            if not user_input.strip():
                continue

            # Pass the input to the backend orchestrator
            response_json = process_query(user_input)

            # Print the formatted JSON response
            print("\nJane Response Payload:")
            print(response_json)

        except EOFError:
            print("\nJane: Session terminated.")
            break
        except KeyboardInterrupt:
            print("\nJane: Session interrupted.")
            break
        except Exception as e:
            print(f"\nJane encountered an error: {e}")

if __name__ == "__main__":
    main()

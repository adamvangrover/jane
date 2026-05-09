import json
import sys
import asyncio
import os

# Add root directory to python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from jane import CyclicalReasoningGraph

async def main_async():
    print("Jane Developmental AI Companion Prototype")
    print("Type 'exit' or 'quit' to close.")
    print("-" * 40)

    graph = CyclicalReasoningGraph()

    while True:
        try:
            user_input = input("\nUser: ")
            if user_input.lower() in ['exit', 'quit']:
                print("Jane: Logging session metrics to memory...")
                break

            if not user_input.strip():
                continue

            # Pass the input to the backend orchestrator
            response_payload = await graph.process_query(user_input)

            # Print the formatted JSON response
            print("\nJane Response Payload:")
            print(response_payload.model_dump_json(indent=2))

        except EOFError:
            print("\nJane: Session terminated.")
            break
        except KeyboardInterrupt:
            print("\nJane: Session interrupted.")
            break
        except Exception as e:
            print(f"\nJane encountered an error: {e}")

def main():
    asyncio.run(main_async())

if __name__ == "__main__":
    main()

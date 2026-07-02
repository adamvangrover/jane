import json
import sys
import asyncio
import os
import re

# Add root directory to python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from jane import CyclicalReasoningGraph

def load_knowledge_base():
    """Parses knowledge_data.js to extract the knowledge graph data for CLI use."""
    filepath = os.path.join(os.path.dirname(__file__), "html_showcase", "knowledge_data.js")
    try:
        with open(filepath, "r") as f:
            content = f.read()

            # Extract the KnowledgeGraph object block
            match = re.search(r'const KnowledgeGraph = (\{.*?\});\s*window\.KnowledgeGraph', content, re.DOTALL)
            if match:
                obj_string = match.group(1)

                # Clean up JS specific syntax to make it valid JSON
                # 1. Remove single line comments (//...)
                obj_string = re.sub(r'//.*', '', obj_string)
                # 2. Quote unquoted keys
                obj_string = re.sub(r'([{,]\s*)([a-zA-Z_]\w*)\s*:', r'\1"\2":', obj_string)
                # 3. Remove trailing commas before closing braces
                obj_string = re.sub(r',\s*\}', '}', obj_string)
                obj_string = re.sub(r',\s*\]', ']', obj_string)

                # Load as dictionary and convert values to a list to maintain existing CLI search logic
                data_dict = json.loads(obj_string)
                return list(data_dict.values())
    except Exception as e:
        print(f"Error loading knowledge base: {e}")
    return []

async def main_async():
    knowledge_base = load_knowledge_base()

    print("Jane Developmental AI Companion Prototype")
    print("Type 'exit' or 'quit' to close.")
    print("Type '/explore' or '/explore <topic>' to search the knowledge base.")
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

            if user_input.lower().startswith('/explore'):
                parts = user_input.split(" ", 1)
                search_term = parts[1].lower() if len(parts) > 1 else ""

                if not knowledge_base:
                    print("\nJane: The knowledge base is currently empty or failed to load.")
                    continue

                if not search_term:
                    print("\n--- Available Knowledge Concepts ---")
                    for item in knowledge_base:
                        print(f"- {item.get('title')} ({item.get('category')})")
                    print("------------------------------------")
                else:
                    results = []
                    for item in knowledge_base:
                        search_str = f"{item.get('title')} {item.get('category')} {item.get('content')} {' '.join(item.get('tags', []))}".lower()
                        if search_term in search_str:
                            results.append(item)

                    if results:
                        print(f"\n--- Search Results for '{search_term}' ---")
                        for item in results:
                            print(f"\nTitle: {item.get('title')}")
                            print(f"Category: {item.get('category')}")
                            print(f"Content: {item.get('content')}")
                            print(f"Tags: {', '.join(item.get('tags', []))}")
                        print("\n------------------------------------")
                    else:
                        print(f"\nJane: I couldn't find anything related to '{search_term}' in the knowledge base.")
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

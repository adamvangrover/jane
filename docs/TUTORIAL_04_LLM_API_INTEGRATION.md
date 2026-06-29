# Tutorial 04: LLM API Integration

This tutorial guides you through the process of transitioning the Jane Developmental AI Companion from using local, deterministic mock responses to integrating with a live LLM API (such as OpenAI's GPT models).

By completing this tutorial, you will enable the true dynamic generation capabilities of the Cyclical Reasoning Graph.

## Prerequisites

Before beginning, ensure you have:
1. Completed Tutorial 01 (Getting Started) and can run the Python CLI prototype.
2. An active API key from an LLM provider (e.g., OpenAI).

## 1. Setting the Environment Variable

The orchestration layer (`jane.py`) is designed to automatically detect your API key via environment variables. It currently defaults to the mock logic if the key is not found.

You need to set the `OPENAI_API_KEY` environment variable in your terminal session.

**For Linux/macOS:**
```bash
export OPENAI_API_KEY="your-actual-api-key-here"
```

**For Windows (Command Prompt):**
```cmd
set OPENAI_API_KEY="your-actual-api-key-here"
```

**For Windows (PowerShell):**
```powershell
$env:OPENAI_API_KEY="your-actual-api-key-here"
```

*Note: Do not commit your actual API key to the repository. It is recommended to use a `.env` file and a library like `python-dotenv` for long-term local development, ensuring `.env` is added to your `.gitignore`.*

## 2. How the Integration Works (`jane.py`)

When you run the system, `jane.py` attempts to initialize the LLM connection during its startup sequence. Let's look at the key components of this integration:

### The `instructor` Library

Jane relies heavily on structured output to guarantee deterministic behavior and maintain policy boundaries. To achieve this, it uses the `instructor` library, which patches the standard OpenAI client.

```python
# From jane.py initialization
import instructor
from openai import AsyncOpenAI

api_key = os.environ.get("OPENAI_API_KEY")
self.llm_available = bool(api_key)

if self.llm_available:
    try:
        # We handle potential API version differences for robust initialization
        if hasattr(instructor, "from_openai"):
            self.client = instructor.from_openai(AsyncOpenAI(api_key=api_key))
        else:
            self.client = instructor.apatch(AsyncOpenAI(api_key=api_key))
    except Exception as e:
        logger.error(f"Failed to initialize instructor LLM Harness: {e}")
        self.llm_available = False
```

### Pydantic Models for Enforcement

The `instructor` library allows us to specify a Pydantic model (`JaneOutput`) that the LLM *must* conform to. This is crucial for separating the user-facing dialogue from internal state metrics (like ZPD and Conviction Score).

When a query is drafted, the system makes the API call like this:

```python
response_model = await self.client.chat.completions.create(
    model="gpt-3.5-turbo", # Or your chosen model
    response_model=JaneOutput, # Strict Pydantic enforcement
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": query}
    ]
)
```

If the LLM fails to return data that matches the `JaneOutput` schema (e.g., it forgets to include the `target_zpd_level`), the `instructor` library automatically handles retries and validation errors under the hood.

## 3. Testing the Live Integration

Once your environment variable is set, run the CLI prototype again:

```bash
python -m src.ui.cli
```

Ask a complex, novel question (e.g., "Explain the theory of relativity using an analogy about baking bread.").

You will notice:
1. **Slight Delay:** The system will take longer to respond because it is now making asynchronous network calls to the LLM API, rather than immediately returning a hardcoded string.
2. **Dynamic Content:** The response will be unique and tailored to your specific query, rather than selected from the limited mock templates.
3. **Structured Output:** The CLI will still print the `Jane Response Payload`, demonstrating that the LLM successfully adhered to the Pydantic JSON structure despite generating dynamic text.

## 4. Testing the Live Integration

Once your environment variable is set, run the CLI prototype again:

```bash
python -m src.ui.cli
```

Ask a complex, novel question (e.g., "Explain the theory of relativity using an analogy about baking bread.").

You will notice:
1. **Slight Delay:** The system will take longer to respond because it is now making asynchronous network calls to the LLM API, rather than immediately returning a hardcoded string.
2. **Dynamic Content:** The response will be unique and tailored to your specific query, rather than selected from the limited mock templates.
3. **Structured Output:** The CLI will still print the `Jane Response Payload`, demonstrating that the LLM successfully adhered to the Pydantic JSON structure despite generating dynamic text.

## 5. Advanced Development: Swapping Models and Providers

Jane's orchestration relies on the `instructor` library, which is provider-agnostic. While OpenAI is used as the default example, you can easily swap the backend to use Anthropic, Cohere, or local open-weights models (via vLLM or Ollama).

### Using Anthropic

To switch to Anthropic (e.g., Claude 3.5 Sonnet), you would modify the initialization in `jane.py`:

```python
import instructor
from anthropic import AsyncAnthropic

anthropic_key = os.environ.get("ANTHROPIC_API_KEY")

if anthropic_key:
    # Initialize the instructor-patched Anthropic client
    self.client = instructor.from_anthropic(AsyncAnthropic(api_key=anthropic_key))

    # Later, in the generation call:
    response_model = await self.client.messages.create(
        model="claude-3-5-sonnet-20240620",
        max_tokens=1024,
        response_model=JaneOutput,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": query}
        ]
    )
```

### Handling Custom Error States

When integrating live APIs, you must handle potential rate limits, API timeouts, or malformed outputs. The `instructor` library automatically retries validation errors, but network errors should be caught explicitly.

In `jane.py`'s `_generate_draft` method, ensure you implement a robust `try...except` block:

```python
try:
    draft = await self.client.chat.completions.create(...)
    return draft
except Exception as e:
    logger.error(f"LLM API Error during generation: {e}")
    # Fallback to the safe, predefined mock response
    return self._generate_mock_response(query)
```

## 6. Next Steps

Now that you have live generation active, you can begin experimenting with the prompt templates in the `prompts/` directory to fine-tune the Drafter, Critic, and Mistake Mentor behaviors.

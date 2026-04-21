import json
import re
import asyncio
import logging
from enum import Enum
from pydantic import BaseModel, Field
import numpy as np
from sentence_transformers import SentenceTransformer

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - [%(levelname)s] - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("JaneOrchestrator")

class ToolRegistry:
    """
    Simulates a secure execution sandbox for tool invocation.
    In the final architecture, this represents the Rust Iron Core.
    """
    def __init__(self):
        self._allowed_tools = {
            "safe_math_eval": self._safe_math_eval,
            "read_short_term_context": self._read_short_term_context
        }

    def execute(self, tool_name: str, **kwargs) -> str:
        """Executes a registered tool securely if it exists in the allowlist."""
        logger.info(f"ToolRegistry invoked: Attempting execution of '{tool_name}'")
        if tool_name not in self._allowed_tools:
            logger.warning(f"Tool execution blocked: '{tool_name}' is not in the allowlist.")
            return f"Error: Tool '{tool_name}' execution blocked by Zero-Trust policy."

        try:
            result = self._allowed_tools[tool_name](**kwargs)
            logger.info(f"Tool '{tool_name}' executed successfully.")
            return result
        except Exception as e:
            logger.error(f"Tool execution failed for '{tool_name}': {e}")
            return f"Error executing '{tool_name}': {e}"

    def _safe_math_eval(self, expression: str) -> str:
        """A highly restricted math evaluation tool using AST to prevent DoS via eval()."""
        import ast
        import operator

        # Supported operators
        allowed_operators = {
            ast.Add: operator.add,
            ast.Sub: operator.sub,
            ast.Mult: operator.mul,
            ast.Div: operator.truediv,
            ast.USub: operator.neg
        }

        def eval_node(node):
            if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):
                return node.value
            elif isinstance(node, ast.BinOp):
                left = eval_node(node.left)
                right = eval_node(node.right)
                op_type = type(node.op)
                if op_type in allowed_operators:
                    return allowed_operators[op_type](left, right)
                else:
                    raise ValueError(f"Unsupported operator: {op_type}")
            elif isinstance(node, ast.UnaryOp):
                operand = eval_node(node.operand)
                op_type = type(node.op)
                if op_type in allowed_operators:
                    return allowed_operators[op_type](operand)
                else:
                    raise ValueError(f"Unsupported unary operator: {op_type}")
            else:
                raise ValueError(f"Unsupported syntax node: {type(node)}")

        try:
            tree = ast.parse(expression, mode='eval')
            result = eval_node(tree.body)
            return str(result)
        except Exception as e:
            logger.error(f"Math evaluation error: {e}")
            raise ValueError(f"Error parsing or evaluating expression: {e}")

    def _read_short_term_context(self) -> str:
        """Returns dummy short-term active memory context."""
        return "User has struggled with algebraic fractions in the last 10 minutes."

class ScaffoldingTechnique(str, Enum):
    """Enumeration of permitted developmental scaffolding techniques."""
    socratic = 'socratic'
    analogy = 'analogy'
    partial_hint = 'partial_hint'
    direct_support = 'direct_support'

class JaneInternalMetrics(BaseModel):
    target_zpd_level: float = Field(..., ge=0.0, le=1.0)
    friction_applied: bool
    scaffolding_technique_used: ScaffoldingTechnique
    conviction_score: float = Field(..., ge=0.0, le=1.0)

class JaneOutput(BaseModel):
    user_facing_output: str
    jane_internal_metrics: JaneInternalMetrics

class MemoryManager:
    """Manages reading, parsing historical state, and memory consolidation (Night Shift) from MEMORY.md."""

    @staticmethod
    def get_last_zpd_level() -> float:
        default_zpd = 0.5
        try:
            with open("MEMORY.md", "r") as f:
                content = f.read()
            # Find all JSON blocks in the file
            json_blocks = re.findall(r'```json\n(.*?)\n```', content, re.DOTALL)
            if json_blocks:
                last_block = json.loads(json_blocks[-1])
                return float(last_block.get("target_zpd_level", default_zpd))
            return default_zpd
        except Exception as e:
            logger.warning(f"Could not parse last ZPD level, defaulting to {default_zpd}. Error: {e}")
            return default_zpd

    async def consolidate_memory(self):
        """
        'Night Shift' Memory Consolidation Protocol.
        Aggregates raw interaction JSON blocks to calculate moving averages and records a mid-term milestone summary.
        """
        logger.info("Initiating Night Shift Memory Consolidation Protocol...")
        try:
            with open("MEMORY.md", "r") as f:
                content = f.read()

            json_blocks = re.findall(r'```json\n(.*?)\n```', content, re.DOTALL)
            if not json_blocks:
                logger.info("No interaction logs found for consolidation.")
                return {"status": "No logs found to consolidate."}

            zpd_levels = []
            friction_count = 0
            for block in json_blocks:
                data = json.loads(block)
                zpd_levels.append(float(data.get("target_zpd_level", 0.5)))
                if data.get("friction_applied", False):
                    friction_count += 1

            avg_zpd = sum(zpd_levels) / len(zpd_levels) if zpd_levels else 0.5
            friction_percentage = (friction_count / len(json_blocks)) * 100

            consolidation_report = (
                f"\n\n### Night Shift Consolidation Report\n"
                f"- **Aggregated Average ZPD Level:** {avg_zpd:.2f}\n"
                f"- **Total Interactions Evaluated:** {len(json_blocks)}\n"
                f"- **Friction Applied Rate:** {friction_percentage:.1f}%\n"
                f"- **Note:** Raw logs have been processed into mid-term memory patterns.\n"
            )

            # In a real app, you might truncate the raw logs and just append the report.
            # Here we append the report to the end.
            await asyncio.to_thread(self._write_to_file, consolidation_report)
            logger.info("Memory consolidation completed and written to MEMORY.md.")
            return {"status": "Consolidation successful", "avg_zpd": round(avg_zpd, 2)}

        except Exception as e:
            logger.error(f"Failed during memory consolidation: {e}")
            return {"status": f"Consolidation failed: {e}"}

    def _write_to_file(self, content: str):
        with open("MEMORY.md", "a") as f:
            f.write(content)

class CyclicalReasoningGraph:
    """
    The orchestrator managing the multi-agent reasoning loop.
    Iteratively drafts, critiques, and refines outputs based on ZPD and DAD boundaries.
    """
    def __init__(self):
        self.conviction_threshold = 0.95
        self.relational_integrity_pattern = re.compile(
            r'\b(I feel|I am sad|I am happy|my friend|we are friends|I have a body)\b',
            re.IGNORECASE
        )
        self.memory_manager = MemoryManager()
        self.tool_registry = ToolRegistry()
        logger.info("Initializing SentenceTransformer embedding model...")
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
        self.intents = [
            "cognitive assessment",
            "behavioral intervention",
            "brainstorming",
            "math tutoring",
            "emotional distress"
        ]
        self.intent_embeddings = self.embedder.encode(self.intents)

    def route_intent(self, query: str) -> str:
        query_embedding = self.embedder.encode([query])
        similarities = self.embedder.similarity(query_embedding, self.intent_embeddings)[0]
        best_match_idx = np.argmax(similarities)
        best_intent = self.intents[best_match_idx]
        logger.info(f"Routed query to intent: {best_intent}")
        return best_intent

    async def draft(self, query: str) -> JaneOutput:
        # Simulate an I/O bound LLM call
        await asyncio.sleep(0.5)
        intent = self.route_intent(query)

        # Tool usage demonstration: Let the Drafter optionally use a tool for math
        tool_output = None
        if intent == "math tutoring" and "+" in query:
            # The agent decides to invoke the tool internally
            expression = re.sub(r'[^\d\+\-\*\/\(\)\.]', '', query)
            if expression:
                tool_output = self.tool_registry.execute("safe_math_eval", expression=expression)

        # Placeholder for actual LLM client. Mock generation based on intent.
        # This simulates an LLM client dynamically assembling prompts based on MASTER_PROMPT.md.
        if intent == "math tutoring":
            if tool_output and not tool_output.startswith("Error"):
                response = f"I verified the math calculation internally, and the answer is {tool_output}. But how would you arrive at that answer yourself? Let's break it down."
            else:
                response = f"Regarding '{query}': Let's break this math problem down. What is the first step you would take?"
            technique = ScaffoldingTechnique.socratic
        elif intent == "emotional distress":
            # Demonstrating Relational Integrity (DAD) handling in the drafting phase
            response = "I am a computer helper, not a person. It sounds like you are going through a tough time. Consider reaching out to a human mentor or peer."
            technique = ScaffoldingTechnique.direct_support
        elif intent == "brainstorming":
            response = f"Let's brainstorm ideas for '{query}'. Here is one analogy: think of a tree branching out. What else comes to mind?"
            technique = ScaffoldingTechnique.analogy
        elif intent == "behavioral intervention":
            response = "Let's review the approach you're taking. How could we structure this differently for better results?"
            technique = ScaffoldingTechnique.partial_hint
        else:
            # Catch-all for other intents, demonstrating metacognitive prompting
            response = "I see. Let's look at this step-by-step. Can you explain your reasoning so far?"
            technique = ScaffoldingTechnique.socratic

        # Dynamic ZPD "Fuzzy Control" Adjustment
        current_zpd = self.memory_manager.get_last_zpd_level()
        if intent == "math tutoring":
            # Assume successful progression, increase difficulty (ZPD) slightly
            new_zpd = min(1.0, current_zpd + 0.05)
        elif intent == "emotional distress":
            # High frustration marker, drastically reduce abstraction/complexity
            new_zpd = max(0.0, current_zpd - 0.15)
        elif intent == "behavioral intervention":
            # Correcting a mistake, lower ZPD slightly to ensure foundation is strong
            new_zpd = max(0.0, current_zpd - 0.05)
        else:
            # Maintain current abstraction level
            new_zpd = current_zpd

        # The conviction score is slightly randomized to simulate the LLM's varying confidence
        conviction = 0.98 if np.random.rand() > 0.1 else 0.85

        return JaneOutput(
            user_facing_output=response,
            jane_internal_metrics=JaneInternalMetrics(
                target_zpd_level=round(new_zpd, 2),
                friction_applied=True,
                scaffolding_technique_used=technique,
                conviction_score=conviction
            )
        )

    async def critique(self, draft: JaneOutput) -> JaneOutput:
        # Simulate structured evaluation delay
        await asyncio.sleep(0.2)
        score = draft.jane_internal_metrics.conviction_score

        # Enforce Relational Integrity (DAD)
        if self.relational_integrity_pattern.search(draft.user_facing_output):
            logger.warning("CRITIQUE FAILED: Relational Integrity violated. Blocking parasocial bonding.")
            draft.jane_internal_metrics.conviction_score = 0.5

        return draft

    async def refine(self, draft: JaneOutput, query: str) -> JaneOutput:
        iteration = 0
        max_iterations = 3
        while draft.jane_internal_metrics.conviction_score < self.conviction_threshold and iteration < max_iterations:
            logger.info(f"Refining draft... Current conviction: {draft.jane_internal_metrics.conviction_score}")
            draft = await self.draft(query)
            draft = await self.critique(draft)
            iteration += 1

        if draft.jane_internal_metrics.conviction_score < self.conviction_threshold:
            logger.error("Failed to generate a high-conviction response within iteration limits.")
            raise ValueError("Failed to generate a high-conviction response within iteration limits.")

        return draft

    async def persist_memory(self, metrics: JaneInternalMetrics):
        memory_block = f"\n\n### Interaction Session Log\n```json\n{metrics.model_dump_json(indent=2)}\n```\n"
        try:
            # For a production scenario, aiofiles should be used for async I/O.
            # We wrap the synchronous I/O in asyncio.to_thread for safety.
            await asyncio.to_thread(self._write_to_file, memory_block)
            logger.info("Successfully persisted metrics to MEMORY.md")
        except Exception as e:
            logger.error(f"Failed to write to MEMORY.md: {e}")

    def _write_to_file(self, content: str):
        with open("MEMORY.md", "a") as f:
            f.write(content)

    async def process_query(self, query: str) -> JaneOutput:
        logger.info(f"Processing query: {query}")
        initial_draft = await self.draft(query)
        critiqued_draft = await self.critique(initial_draft)
        final_output = await self.refine(critiqued_draft, query)
        await self.persist_memory(final_output.jane_internal_metrics)
        return final_output

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Jane AI Companion Orchestration Layer")
    parser.add_argument("query", nargs="?", default="Can you solve this math problem for me?", help="The user query to process")
    args = parser.parse_args()

    logger.info("Jane orchestration layer starting...")
    graph = CyclicalReasoningGraph()
    try:
        result = asyncio.run(graph.process_query(args.query))
        print("\nFinal Output:")
        print(result.model_dump_json(indent=2))
    except Exception as e:
        logger.error(f"Error processing query: {e}")

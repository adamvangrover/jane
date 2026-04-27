import logging
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
from jane import CyclicalReasoningGraph

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - [%(levelname)s] - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("JaneFastAPI")

app = FastAPI(title="Jane AI Companion API", description="Developmental AI Orchestration Microservice")

# Initialize the graph globally (loading embeddings at startup)
graph = CyclicalReasoningGraph()

class QueryRequest(BaseModel):
    query: str

class ConsolidateResponse(BaseModel):
    status: str
    avg_zpd: Optional[float] = None

@app.post("/query")
async def process_query(request: QueryRequest):
    """
    Process a user query through Jane's Cyclical Reasoning Graph.
    Routes intent, drafts a response, critiques against DAD/SDT constraints, refines, and persists memory.
    """
    try:
        logger.info(f"Received API query: {request.query}")
        result = await graph.process_query(request.query)
        # Using dict() on the Pydantic model ensures FastAPI can serialize it automatically
        return result.model_dump()
    except Exception as e:
        logger.error(f"API Error processing query: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/consolidate", response_model=ConsolidateResponse)
async def consolidate_memory():
    """
    Trigger the 'Night Shift' Memory Consolidation Protocol.
    Aggregates historical session JSON blocks from MEMORY.md into mid-term milestones.
    """
    try:
        logger.info("Received API request to trigger memory consolidation.")
        result = await graph.memory_manager.consolidate_memory()
        return result
    except Exception as e:
        logger.error(f"API Error during memory consolidation: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    """Basic health check endpoint."""
    return {"status": "Jane system is operational."}

from fastapi import FastAPI
from src.api import router

app = FastAPI(
    title="Sonjis Vision API",
    description="""
    WebSocket URL: ws://localhost:8000/v1/stream
    
    Response format:
    
    {
        "type": "frame",
        "data": "base64_encoded_image",
        "meta": {"id": "1"}
    }
    
    
    Response format:
    
    {
        "type": "result",
        "result": {"ok": true, "meta": {"id": "1"}}
    }
    
    """,
    version="0.0.1"
)

app.include_router(router)

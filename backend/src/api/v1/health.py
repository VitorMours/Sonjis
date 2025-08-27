from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
async def health_check():
    return {"status": "ok", "message": "Vision service is running"}


@router.get("/info")
async def websocket_info():
    """Informações sobre o endpoint WebSocket"""
    return {
        "websocket_url": "ws://localhost:8000/v1/stream",
        "protocol": "WebSocket",
        "message_format": {
            "type": "frame",
            "data": "base64_encoded_image",
            "meta": {"optional": "metadata"},
        },
        "response_format": {"type": "result", "result": {"processed_data": "..."}},
    }

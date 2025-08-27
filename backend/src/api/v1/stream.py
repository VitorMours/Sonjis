from fastapi import APIRouter, WebSocket, WebSocketDisconnect
import base64
import json
from service.vision_service import VisionService

router = APIRouter()
service = VisionService()


@router.websocket("/stream")
async def vision_stream(ws: WebSocket):
    await ws.accept()
    try:
        while True:
            msg = await ws.receive_text()
            data = json.loads(msg)
            if data.get("type") == "frame":
                b64 = data.get("data")
                if not b64:
                    await ws.send_text(
                        json.dumps({"type": "error", "message": "missing data"})
                    )
                    continue
                frame_bytes = base64.b64decode(b64)
                result = await service.process_frame(
                    frame_bytes, metadata=data.get("meta")
                )
                await ws.send_text(json.dumps({"type": "result", "result": result}))
            elif data.get("type") == "close":
                await ws.close()
                break
            else:
                await ws.send_text(
                    json.dumps({"type": "error", "message": "unknown type"})
                )
    except WebSocketDisconnect:
        pass

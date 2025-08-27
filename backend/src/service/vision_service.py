class VisionService:
    def __init__(self):
        pass

    async def process_frame(self, frame: bytes, metadata: dict | None = None) -> dict:
        return {"ok": True, "meta": metadata}

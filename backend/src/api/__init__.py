from .v1 import ws, health
from fastapi import APIRouter

__all__ = ["ws", "health"]

router = APIRouter(prefix="/v1")
router.include_router(ws.router)
router.include_router(health.router)

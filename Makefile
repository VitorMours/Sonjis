make backend-dev:
	cd backend && uv run fastapi dev src/main.py

make frontend-dev:
	cd frontend && vite dev
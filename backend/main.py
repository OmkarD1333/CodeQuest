"""Entry point for running the CodeQuest FastAPI backend."""
from app.main import app

if __name__ == "__main__":
    import uvicorn
    from app.config import get_settings

    settings = get_settings()
    print(f"Starting FastAPI server on http://localhost:{settings.port}")
    uvicorn.run("app.main:app", host=settings.host, port=settings.port, reload=settings.reload)

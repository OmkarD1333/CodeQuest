from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.auth import router as auth_router
from app.routes.progress import router as progress_router
from app.routes.execution import router as execution_router


def create_app() -> FastAPI:
    """Application factory for the CodeQuest API."""
    app = FastAPI(
        title="CodeQuest API",
        description="Backend API for the CodeQuest gamified coding learning platform.",
        version="1.0.0",
    )

    # Allow all origins for local development (tighten in production)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Register routers
    app.include_router(auth_router, tags=["Auth"])
    app.include_router(progress_router, tags=["Progress"])
    app.include_router(execution_router, tags=["Execution"])

    @app.get("/", tags=["Health"])
    def health_check():
        """Health check endpoint."""
        return {"status": "ok", "app": "CodeQuest API"}

    return app


app = create_app()


if __name__ == "__main__":
    import uvicorn
    from app.config import get_settings

    settings = get_settings()
    print(f"Starting FastAPI server on http://localhost:{settings.port}")
    uvicorn.run("app.main:app", host=settings.host, port=settings.port, reload=settings.reload)

"""ASGI entry point for the CodeQuest backend.

This module lives at the project root so that uvicorn can load the app
with `uvicorn main:app` from the project root directory.
"""
import sys
from pathlib import Path

# Add the backend directory to the Python path so that `app` can be imported
sys.path.insert(0, str(Path(__file__).parent / "backend"))

from app.main import app  # noqa: E402

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=3000, reload=True)

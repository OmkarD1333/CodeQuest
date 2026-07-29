from fastapi import Depends
from app.database import get_supabase_client
from app.config import get_settings


def get_db():
    """FastAPI dependency that yields a Supabase client for the request lifecycle."""
    client = get_supabase_client()
    try:
        yield client
    finally:
        pass  # Supabase client is stateless; no cleanup needed


def get_settings_dep():
    """FastAPI dependency that yields the application settings."""
    return get_settings()

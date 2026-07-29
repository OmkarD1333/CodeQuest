from supabase import create_client, Client
from app.config import get_settings


def get_supabase_client() -> Client:
    """Create and return a Supabase client instance."""
    settings = get_settings()
    client: Client = create_client(settings.supabase_url, settings.supabase_key)
    return client

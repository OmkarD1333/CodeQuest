import bcrypt
import logging
from app.database import get_supabase_client

logger = logging.getLogger(__name__)


def add_user(username: str, email: str, hashed_password: str) -> int | None:
    """Register a new user. Returns the user ID or None if a duplicate exists."""
    try:
        client = get_supabase_client()

        existing = client.table("users").select("id").eq("email", email).execute()
        if existing.data:
            logger.warning("User with email %s already exists.", email)
            return None

        existing_username = client.table("users").select("id").eq("username", username).execute()
        if existing_username.data:
            logger.warning("User with username %s already exists.", username)
            return None

        user_data = {
            "username": username,
            "email": email,
            "password_hash": hashed_password,
        }
        response = client.table("users").insert(user_data).execute()
        if response.data:
            return response.data[0]["id"]
        return None
    except Exception as e:
        logger.error("Error adding user: %s", e)
        return None


def get_user_by_email(email: str) -> dict | None:
    """Fetch a user record by email address."""
    try:
        client = get_supabase_client()
        response = client.table("users").select("*").eq("email", email).limit(1).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        logger.error("Error fetching user by email: %s", e)
        return None


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a plain-text password against its bcrypt hash."""
    return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))


def hash_password(password: str) -> str:
    """Hash a password using bcrypt."""
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

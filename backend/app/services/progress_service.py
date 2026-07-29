import logging
from app.database import get_supabase_client

logger = logging.getLogger(__name__)


def get_user_progress(user_email: str) -> list | dict | None:
    """Fetch the user's progress across all languages via RPC."""
    try:
        client = get_supabase_client()
        response = client.rpc("get_user_progress_with_badges", {"user_email": user_email}).execute()
        if response.data:
            return response.data
        return {}
    except Exception as e:
        logger.error("Error fetching user progress: %s", e)
        return None


def increment_user_level(email: str, lang: str) -> bool:
    """Increment the user's current level for the given language."""
    try:
        client = get_supabase_client()

        user_response = client.table("users").select("*").eq("email", email).limit(1).execute()
        if not user_response.data:
            logger.warning("Level increment failed: User with email '%s' not found.", email)
            return False

        if lang.lower() == "mysql":
            language_name_for_db = "MySQL"
        else:
            language_name_for_db = lang.capitalize()

        lang_response = client.table("languages").select("id").eq("name", language_name_for_db).execute()
        if not lang_response.data:
            logger.warning("Level increment failed: Language '%s' not found.", language_name_for_db)
            return False

        user_id = user_response.data[0]["id"]
        language_id = lang_response.data[0]["id"]

        progress_response = client.table("user_progress").select("id, current_level").eq(
            "user_id", user_id
        ).eq("language_id", language_id).execute()

        if progress_response.data:
            progress_id = progress_response.data[0]["id"]
            current_level = progress_response.data[0]["current_level"]
            new_level = current_level + 1
            client.table("user_progress").update({"current_level": new_level}).eq("id", progress_id).execute()
        else:
            insert_data = {"user_id": user_id, "language_id": language_id, "current_level": 2}
            client.table("user_progress").insert(insert_data).execute()

        return True
    except Exception as e:
        logger.error("Error incrementing user level: %s", e)
        return False

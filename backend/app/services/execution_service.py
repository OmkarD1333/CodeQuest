import httpx
import traceback
import logging
from app.config import get_settings

logger = logging.getLogger(__name__)

JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true"


def execute_code(language_id: int, source_code: str, expected_output: str | None = None) -> dict:
    """Submit source code to the Judge0 API for execution."""
    settings = get_settings()
    if not settings.rapidapi_key:
        raise RuntimeError("API key is not configured on the server.")

    headers = {
        "x-rapidapi-key": settings.rapidapi_key,
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        "Content-Type": "application/json",
    }

    payload = {
        "language_id": language_id,
        "source_code": source_code,
        "expected_output": expected_output,
    }

    response = httpx.post(JUDGE0_API_URL, headers=headers, json=payload, timeout=30)
    response.raise_for_status()
    return response.json()


def execute_sql_query(query: str) -> dict:
    """Execute an SQL query against the Supabase sandbox via RPC."""
    from app.database import get_supabase_client

    query = query.strip().rstrip(";")
    if not query:
        raise ValueError("No source_code provided")

    query_upper = query.upper()
    is_write_query = any(
        query_upper.startswith(kw) for kw in ["INSERT", "UPDATE", "DELETE"]
    )

    client = get_supabase_client()

    if is_write_query:
        table_name = "sample_products" if "sample_products" in query.lower() else "sample_users"
        result = client.rpc(
            "execute_transaction_for_learning",
            {"query": query, "table_to_check": table_name},
        ).execute()
        return {"data": result.data or []}

    if query_upper.startswith("SELECT"):
        result = client.rpc("execute_select_query", {"query": query}).execute()
        return {"data": result.data or []}

    if query.strip().startswith("--"):
        raise ValueError("Cannot run comments. Please enter a valid SQL query.")

    raise ValueError("Query must be a SELECT, INSERT, UPDATE, or DELETE statement.")

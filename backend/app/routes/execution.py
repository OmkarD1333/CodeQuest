from fastapi import APIRouter, HTTPException, Depends
from app.models.execution import ExecuteCodeRequest, ExecuteSQLRequest
from app.services.execution_service import execute_code, execute_sql_query

router = APIRouter()


@router.post("/execute")
def execute_code_endpoint(body: ExecuteCodeRequest):
    """Submits source code to the Judge0 API for execution."""
    try:
        result = execute_code(body.language_id, body.source_code, body.expected_output)
        return result
    except HTTPException:
        raise
    except RuntimeError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception:
        import traceback
        print("\n--- A CRITICAL ERROR OCCURRED IN /execute ---")
        traceback.print_exc()
        print("-------------------------------------------\n")
        raise HTTPException(
            status_code=500,
            detail="A critical server error occurred. Check the server logs for the traceback.",
        )


@router.post("/execute-sql")
def execute_sql_query_endpoint(body: ExecuteSQLRequest):
    """Executes an SQL query against the Supabase sandbox via an RPC call."""
    try:
        result = execute_sql_query(body.source_code)
        return result
    except HTTPException:
        raise
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        print(f"SQL Execution Error: {e}")
        error_details = str(e)
        if e.args and isinstance(e.args[0], dict):
            error_details = e.args[0].get("message", str(e))
        raise HTTPException(status_code=400, detail=error_details)

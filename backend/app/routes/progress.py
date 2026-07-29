from fastapi import APIRouter, HTTPException, Query, Depends
from app.models.progress import CompleteLevelRequest
from app.services.progress_service import get_user_progress, increment_user_level

router = APIRouter()


@router.get("/progress")
def get_progress(email: str = Query(..., description="User email address")):
    """Returns the user's progress across all languages."""
    progress_data = get_user_progress(email)

    if progress_data is None:
        raise HTTPException(
            status_code=500, detail="Could not fetch progress for user"
        )

    return progress_data


@router.post("/complete_level")
def complete_level(body: CompleteLevelRequest):
    """Increments the user's current level for the given language."""
    success = increment_user_level(body.email, body.lang)

    if success:
        return {"message": f"Level updated for {body.lang}!"}

    raise HTTPException(status_code=500, detail="Failed to update user level.")

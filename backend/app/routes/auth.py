from fastapi import APIRouter, HTTPException, Depends
from app.models.auth import RegisterRequest, LoginRequest, UserResponse
from app.services.auth_service import add_user, get_user_by_email, hash_password, verify_password

router = APIRouter()


@router.post("/register", status_code=201)
def register(body: RegisterRequest):
    """Handles new user registration."""
    hashed_password = hash_password(body.password)
    user_id = add_user(body.username, body.email, hashed_password)

    if user_id is None:
        raise HTTPException(
            status_code=409,
            detail="User with this email or username already exists",
        )

    return {"message": "User registered successfully!"}


@router.post("/login")
def login(body: LoginRequest):
    """Handles user login and authentication."""
    user = get_user_by_email(body.email)

    if user and verify_password(body.password, user["password_hash"]):
        user_data = {
            "id": user["id"],
            "username": user["username"],
            "email": user["email"],
        }
        return {"message": "Login successful!", "user": user_data}

    raise HTTPException(status_code=401, detail="Invalid credentials")

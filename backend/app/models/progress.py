from pydantic import BaseModel, EmailStr


class CompleteLevelRequest(BaseModel):
    email: EmailStr
    lang: str

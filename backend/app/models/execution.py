from pydantic import BaseModel
from typing import Optional


class ExecuteCodeRequest(BaseModel):
    language_id: int
    source_code: str
    expected_output: Optional[str] = None


class ExecuteSQLRequest(BaseModel):
    source_code: str

# CodeQuest

CodeQuest is a gamified, interactive coding learning platform with a FastAPI backend and two frontend options (static and React). Learners register, pick languages, follow level-based lessons, run code via an execution API, and track progress.

**This README summarizes how to run and develop the project locally.**

**Tech Stack**
- Backend: Python, FastAPI, Uvicorn
- Database: Supabase (PostgreSQL)
- Code execution: Judge0 (via RapidAPI) or compatible execution service
- Frontend: static HTML/CSS/Vanilla JS (in `frontend/`) and a React/Vite app (in `frontend-react/`)

**Key folders**
- `backend/` — FastAPI application and entrypoint (`backend/main.py`).
- `frontend/` — Static HTML/CSS/JS pages (quick demo + CodeMirror editor).
- `frontend-react/` — React + Vite frontend (more complete UI).
- `database/` — SQL schema and migrations (`database/database_setup.sql`).

Quick overview of the backend layout:

```
backend/
├─ main.py             # Entry point (runs app.main:app via uvicorn)
├─ app/
│  ├─ main.py          # FastAPI app factory
│  ├─ config.py        # env-backed settings (SUPABASE_*, RAPIDAPI_KEY, host, port)
│  ├─ database.py
│  ├─ routes/          # auth, execution, progress routers
│  └─ services/        # business logic
```

Getting started (local development)

1) Backend

Install dependencies and run the API from the project root:

```powershell
python -m pip install -r requirements.txt
cd backend
copy .env.example .env           # on Windows; or `cp` on Unix
# Edit backend/.env and set SUPABASE_URL, SUPABASE_KEY, RAPIDAPI_KEY as needed
python main.py
```

By default the app prints the listening URL (host/port come from `backend/app/config.py`, defaults: `0.0.0.0:3000`).

2) Frontend (static)

Serve `frontend/` with any static server. Quick option:

```powershell
cd frontend
python -m http.server 8080
# Open: http://localhost:8080/pages/index.html
```

3) Frontend (React / Vite)

The React app lives in `frontend-react/` and uses Vite. From that folder:

```powershell
cd frontend-react
npm install
npm run dev
# Open the Vite dev URL (usually http://localhost:5173)
```

4) Database

Run `database/database_setup.sql` in your Supabase SQL editor (or apply via psql) to create the tables.

Environment variables (backend/.env)
- `SUPABASE_URL` — your Supabase project URL
- `SUPABASE_KEY` — anon or service key for Supabase
- `RAPIDAPI_KEY` — key used to call Judge0 via RapidAPI
- `HOST`, `PORT`, `RELOAD` — server settings (defaults are set in code)

API overview (important endpoints)

- POST `/register` — register a new user
- POST `/login` — authenticate and receive a token/session
- GET `/progress?email=` — read user progress
- POST `/complete_level` — mark level complete / increment progress
- POST `/execute` — execute code through Judge0 (or configured execution service)
- POST `/execute-sql` — run SQL in Supabase sandbox (used for demo queries)

Notes & development tips
- The backend reads settings from `backend/.env` (see `app/config.py`).
- The static `frontend/` is useful for quick manual testing; the React app is the intended production UI.
- For local development you may allow CORS from the frontend URLs (FastAPI already allows all origins in dev).
- Keep secrets out of version control — do not commit `backend/.env`.

If you want, I can also:
- add a `Makefile` / `scripts` to simplify the commands,
- generate a minimal `.env.example` with required keys, or
- update `requirements.txt` with pinned versions and a `dev-requirements.txt`.

---

Updated README — core run and dev instructions are above.

# Civic Dev Backend

Backend service for the Civic dashboard frontend.

## Endpoints

- `POST /api/analyze-issue`
- `POST /api/submit-issue`
- `GET /api/issue-clusters`
- `GET /api/generate-report`
- `GET /api/complaints`
- `GET /api/cluster-complaints?cluster_id=<id>`
- `GET /health`

## Run

1. Copy env file:
   - `cp .env.example .env` (or create manually on Windows)
2. Ensure PostgreSQL is running and create DB:
   - DB name example: `civic_dev`
3. Set `DATABASE_URL` and `GEMINI_API_KEY` in `.env`
3. Install and run:
   - `npm install`
   - `npm run dev`

Default URL: `http://localhost:8000`

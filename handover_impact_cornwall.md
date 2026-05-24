# Handover — Impact Cornwall Data Validation Project

## Status
Fresh session needed — sandbox VM failed to start in previous session. All files uploaded and project fully scoped. Ready to begin coding immediately.

## Project
**Client:** Impact Cornwall CIC  
**Goal:** Enrich and validate their "Vital Stats Catalogue" — a spreadsheet of socio-economic facts about Cornwall with source URLs.

## Files (in uploads folder)
- `Partially completed.xlsx` — the main catalogue (structure below)
- `project brief.docx` — project brief (read via paste; content below)
- `Vital Issues 2025 - MASTER v5 (cleaner).docx` — background report (not yet read)

## Spreadsheet Structure
Three columns:
1. **Sentence** — a specific factual claim (e.g. "Cornwall's population was 578,324 in 2023")
2. **URL** — one or more source links, shortened via redirme.com. Some rows have compound entries with inline notes (e.g. two URLs, each annotating which sub-claim it supports)
3. **Correct?** — empty; to be populated by the validation script

Some rows have no URL at all ("Not available" or blank) — these need sources found.

## Agreed Approach

### Task 1 — Resolve & validate existing URLs
1. Follow redirme.com redirects to canonical URLs
2. Extract verifiable facts from each sentence (numbers, %, years, named entities) using regex
3. Fetch target page text and search for those facts
4. Populate "Correct?" with: ✓ (found), ✗ (not found), ? (unreachable/JS-rendered)
5. Handle compound sentences (multiple URLs) by validating each sub-claim separately

### Task 2 — Find missing URLs
- For blank URL rows, classify the data type → map to likely source agency:
  - Population → ONS
  - Employment/claimants → Nomis
  - Deprivation → MHCLG
  - Health → NHS Digital
  - Education → DfE/Ofsted
- Return candidate URLs for human review (do not auto-populate without verification)

### Task 3 — Output
- Enriched xlsx with "Correct?" populated
- Second tab or notes column: resolved URL, what was searched, what was found, rows needing human review

## Known Risks
- JS-rendered pages won't respond to simple HTTP fetch (flag as ?)
- redirme.com links may have rate limits
- Qualitative claims ("higher than South West") harder to auto-verify

## Do NOT start until
Sandbox is confirmed working. Test with: `echo ready && python3 -c "import openpyxl; print('ok')"` before proceeding.

## First Actions in New Session
1. Confirm sandbox works
2. Parse xlsx — print all column headers and row count, sample 10 rows
3. Read `Vital Issues 2025 - MASTER v5 (cleaner).docx` for additional context
4. Begin scripting

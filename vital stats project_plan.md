# Hermes Data Monitor & Live Hub: Project Plan

## 1. Technical Blueprint & Architecture

The application will operate on an asynchronous ETL (Extract, Transform, Load) loop rather than continuous web scraping, which minimizes server overhead and manages digital environmental footprints.

```
+------------------------------------+
| 1. Config Ingestion (JSON/Excel)   | <--- Vital_Stats_Verified (June 19).xlsx
+------------------------------------+
                  |
                  v
+------------------------------------+
| 2. Validation Engine               | 
|    - Playwright (JS Rendering)     | <--- Resolves 404s & Matches Strings
|    - Semantic Regex Validation     |
+------------------------------------+
                  |
                  v
+------------------------------------+
| 3. Automated Health Reporting       | ---> Quarterly_Exception_Report.md
+------------------------------------+
                  |
                  v
+------------------------------------+
| 4. Data Layer Write                | ---> Vital_Stats_Completed.xlsx
+------------------------------------+
```

### Architectural Component Specifications
* **Ingestion Engine:** Python script reading `Vital_Stats_Verified (June 19).xlsx` using `pandas` and `openpyxl`.
* **Scraping Layer:** Headless asynchronous browser via `Playwright` to handle JavaScript-heavy endpoints (`JS_RENDERED` flags) and avoid raw request blocks.
* **Verification Module:** Semantic and regex text parser confirming if target numeric strings exist inside the fetched webpage's unstructured source text or Document Object Model (DOM).
* **Reporting Layer:** File writer emitting markdown structures for rapid human verification.

---

## 2. Step-by-Step Implementation Plan

### Phase 1: Environment Setup & Schema Standardization (Weeks 1–2)
* **Repository Initialization:** Establish an isolated workspace directory structure as requested in the maintenance protocols:
    ```text
    📂 Hermes/
    ├── 📂 data/             # Contains Vital_Stats_Verified (June 19).xlsx
    ├── 📂 updating/         # Production scripts (quarterly_monitor.py, apply_updates.py)
    ├── 📂 config/           # maintenance_config.json, mappings.json
    └── 📄 requirements.txt  # pandas, openpyxl, playwright, beautifulsoup4
    ```
* **Dependencies Config:** Define `requirements.txt` tracking pinned version allocations for `playwright`, `pandas`, `openpyxl`, and `beautifulsoup4`. Run `playwright install` to pull headless Chromium binaries.

### Phase 2: Core Engine Development ("The Monitor") (Weeks 3–5)
* **Script Authorization (`quarterly_monitor.py`):** Implement the primary validation loop to read raw source sheets, clean text rows, and pass destination URLs to the async scraping handler.
* **Playwright Browser Engine Integration:** Implement context blocks managing custom User-Agents, session timeouts, and asset rejections (e.g., blocking images/videos to limit energy utilization).
* **Text Processing Match Loop:** Develop regex parameters to compare the parsed `Sentence` field against the fetched webpage text body. If a strict match exists (e.g., matching `"33,083"` crimes), set status to valid; if missing, throw an explicit exception.

### Phase 3: Reporting & Exception Pipeline (Weeks 6–7)
* **Automated Health Logging:** Program the script to output an explicit, scannable markdown report (`Quarterly_Exception_Report.md`) at each runtime execution, classifying errors into two buckets:
    1.  `Link Broken`: Destination returns non-200 HTTP status codes or dead domains.
    2.  `Data Drift`: Destination functions correctly, but specified data metrics are absent or modified.
* **Bulk Ingestion Layer (`apply_updates.py`):** Program a secondary script parsing a structured `mappings.json` patch file to apply manual overrides for rows flagged in the exception report. Programmatically output a clean `Vital_Stats_Completed.xlsx` template using gray styling borders and green validation marks.

### Phase 4: Frontend UI Deployment (Weeks 8–10)
* **Streamlit Interactive Dashboard:** Build a minimalist internal data dashboard using `Streamlit` that reads directly from `Vital_Stats_Completed.xlsx`.
* **Search & Dissemination Modules:** Enable text indexing allowing staff or trustees to query subjects (e.g., "Child poverty", "Wages") and receive exact statistical summaries matching linked external URLs.

---

## 3. Maintenance Protocol Schedule

To ensure absolute governance continuity, pipeline verification executes on a fixed quarterly cycle:

| Quarter | Monitoring Window | Action Item | Responsibility |
| :--- | :--- | :--- | :--- |
| **Q1** | January 1–5 | Run `quarterly_monitor.py` -> Catch post-holiday ONS endpoint reallocations. | AI Working Group Operator |
| **Q2** | April 1–5 | Address `NOT_FOUND` endpoints using alternative regional council mappings. | AI Working Group Operator |
| **Q3** | July 1–5 | Run data drift verification against annual June Vital Signs releases. | Board AI Trustee |
| **Q4** | October 1–5 | Bulk execute `apply_updates.py` prior to Q4 strategic review cycles. | AI Working Group Operator |

---

## 4. Governance & Operational Guardrails

* **Human-in-the-Loop Override:** Algorithmic lookups are inherently literal. Rounded data metrics on target pages (e.g., "20%" instead of "20.1%") will trip a `Data Drift` flag. The system must always alert human staff for verification instead of auto-correcting values inside the primary database without oversight.
* **Data Isolation Principles:** Standard large language model interfaces must **never** ingest raw confidential donor files or unpublished beneficiary details. All prompts and scripts operating outside secure environments must enforce strict parameter-training opt-outs.

VITAL STATS MAINTENANCE PROCEDURES
==================================

Follow these steps every quarter (January, April, July, October) to ensure the Cornwall Vital Stats Catalogue remains accurate and substantiated.

STEP 1: IDENTIFY ISSUES (THE MONITOR)
-------------------------------------
Run the monitor script to find broken links (404s) or "data drift" (where the numbers in your spreadsheet no longer match the numbers on the website).

1. Open Terminal and navigate to the project root:
   cd "C:\Daiman\AI Apps\Hermes"

2. Run the Script:
   python updating/quarterly_monitor.py

3. Review the Results:
   Open "Quarterly_Exception_Report.md" in the root folder.
   - Link Broken: The URL is dead or moved.
   - Data Drift: The URL works, but the specific statistic (e.g., "33,083") was not found on the page.


STEP 2: RESEARCH & FIX
----------------------
For any rows listed in the Exception Report:
1. Manually visit the source website or use a search engine to find the updated figure or the new report URL.
2. Verify the new data point matches the claim in your spreadsheet.


STEP 3: APPLY UPDATES (THE UPDATER)
-----------------------------------
Once you have your fixes, use this script to bulk-update the Excel file.

1. Update "mappings.json":
   Add or update the entries for the rows you fixed. Ensure the "row" number, "sentence", and "foundUrls" are correct.

2. Run the Apply Script:
   python updating/apply_updates.py

3. Check Output:
   A new file named "Vital_Stats_Completed.xlsx" will be generated with updated URLs and green validation marks.


FILE REFERENCE
--------------
- quarterly_monitor.py: Automated health check for all stats.
- apply_updates.py: Programmatically writes verified data to Excel.
- maintenance_config.json: List of primary sources and their update frequencies.
- MAINTENANCE.md: Strategic overview of the maintenance categories.


NOTE: Always keep 'Partially completed.xlsx' as your master template.

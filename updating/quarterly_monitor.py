"""
Impact Cornwall — Quarterly Stats Monitor
=========================================
Checks the "Vital Stats Catalogue" for broken links and data consistency.
Generates an Exception Report for manual review.
"""

import os
import requests
import openpyxl
import re
from bs4 import BeautifulSoup

# Config
SPREADSHEET = 'Vital_Stats_Completed.xlsx'
REPORT_FILE = 'Quarterly_Exception_Report.md'
TIMEOUT = 10

def get_page_text(url):
    try:
        r = requests.get(url, timeout=TIMEOUT, headers={'User-Agent': 'Mozilla/5.0'})
        r.raise_for_status()
        soup = BeautifulSoup(r.text, 'html.parser')
        return soup.get_text().lower(), "OK"
    except Exception as e:
        return "", str(e)

def extract_numbers(text):
    # Extracts integers and decimals from a string
    return set(re.findall(r'\b\d+(?:\.\d+)?\b', text))

def monitor():
    if not os.path.exists(SPREADSHEET):
        print(f"Error: {SPREADSHEET} not found.")
        return

    wb = openpyxl.load_workbook(SPREADSHEET, data_only=True)
    ws = wb.active
    
    # Identify Columns (assumed based on project structure)
    # B: Sentence, C: URL
    exceptions = []

    print(f"Monitoring {SPREADSHEET}...")
    
    # Process rows (skipping header)
    for row in ws.iter_rows(min_row=3, max_row=ws.max_row):
        row_idx = row[0].row
        sentence = str(row[1].value or "")
        url = str(row[2].value or "")

        if not url.startswith("http"):
            continue

        print(f"Checking Row {row_idx}...")
        
        # Extract numbers we expect to find
        expected_numbers = extract_numbers(sentence)
        
        page_content, status = get_page_text(url)
        
        if status != "OK":
            exceptions.append(f"| {row_idx} | Link Broken | {status} | {url[:50]}... |")
            continue
            
        # Check if expected numbers are still on the page
        found_numbers = extract_numbers(page_content)
        missing = expected_numbers - found_numbers
        
        # Filter out small numbers like '1', '2' or common years if desired
        truly_missing = [n for n in missing if len(n) > 1 and n not in ('2021', '2024')]
        
        if truly_missing:
            exceptions.append(f"| {row_idx} | Data Drift | Missing: {', '.join(truly_missing)} | {url[:50]}... |")

    # Generate Report
    with open(REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write("# Quarterly Exception Report\n\n")
        f.write("| Row | Issue | Details | URL |\n")
        f.write("|---|---|---|---|\n")
        for ex in exceptions:
            f.write(ex + "\n")
            
    print(f"\nScan complete. Found {len(exceptions)} exceptions.")
    print(f"Details saved to {REPORT_FILE}")

if __name__ == "__main__":
    monitor()

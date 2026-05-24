import json
import openpyxl
from openpyxl.styles import PatternFill

# Config
MAPPINGS_FILE = 'mappings.json'
INPUT_FILE = 'Partially completed.xlsx'
OUTPUT_FILE = 'Vital_Stats_Completed.xlsx'

# Color for verified rows
GREEN = PatternFill(start_color="C6EFCE", end_color="C6EFCE", fill_type="solid")

def apply_updates():
    print(f"Loading mappings from {MAPPINGS_FILE}...")
    with open(MAPPINGS_FILE, 'r', encoding='utf-8') as f:
        mappings = json.load(f)

    print(f"Opening spreadsheet {INPUT_FILE}...")
    wb = openpyxl.load_workbook(INPUT_FILE)
    ws = wb.active

    # Map row numbers to their update data for efficiency
    update_map = {m['row']: m for m in mappings}

    # Based on previous research:
    # Column B (2) = Sentence
    # Column C (3) = URL
    # Column D (4) = Correct?
    COL_URL = 3
    COL_CORRECT = 4

    updated_count = 0

    print("Applying updates...")
    # Rows in mappings are 1-based indices corresponding to Excel row numbers
    for row_idx, data in update_map.items():
        # Check if the sentence in the sheet matches (optional safety check)
        sheet_sentence = ws.cell(row=row_idx, column=2).value
        
        # Apply URL update
        url_cell = ws.cell(row=row_idx, column=COL_URL)
        url_cell.value = data['foundUrls']

        # Mark as Correct (✓)
        correct_cell = ws.cell(row=row_idx, column=COL_CORRECT)
        correct_cell.value = "✓"
        correct_cell.fill = GREEN
        
        updated_count += 1

    print(f"Saving to {OUTPUT_FILE}...")
    wb.save(OUTPUT_FILE)
    print(f"Successfully updated {updated_count} rows.")

if __name__ == "__main__":
    apply_updates()

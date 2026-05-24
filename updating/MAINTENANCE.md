# Impact Cornwall — Quarterly Maintenance Guide

This guide outlines the process for keeping the **Vital Stats Catalogue** accurate and substantiated every three months.

## 1. Maintenance Strategy
We categorize every statistic by its **Source Type** to determine how it should be updated:

| Source Type | Strategy | Tools |
| :--- | :--- | :--- |
| **API** | Automated fetch from official portals. | ONS/Nomis API, Police.uk API |
| **Landing Page** | Monitor a page for new PDF uploads. | Visualping, Distill.io |
| **Deep Search** | Emulate search on landing pages. | Playwright, Selenium |
| **Manual** | Human review of periodical reports. | Annual Council Strategy docs |

## 2. Quarterly Workflow
At the start of each quarter (Jan, April, July, Oct):

1. **Run the Monitor Script:**
   - Execute `quarterly_monitor.py`.
   - This script checks for **Broken Links (404s)** and **Data Drift** (where the number in the spreadsheet no longer appears on the linked page).
2. **Review Exception Report:**
   - The script will generate a list of "Failed" or "Inconsistent" rows.
   - **Action:** Only manually research these rows.
3. **Check Annual Report Cycles:**
   - **April:** New Council Budgets and Housing snapshots.
   - **July:** Environment Agency Annual Status Reports.
   - **Sept/Oct:** Safer Cornwall Strategic Assessment updates.
4. **Update "Last Verified" Date:**
   - Record the update in the spreadsheet to maintain the audit trail.

## 3. Automation Tools
To reduce manual labor, use these specific connectors:

- **ONS / Nomis:** Use the [Nomis Query Tool](https://www.nomisweb.co.uk/query/select/getdatasetbytheme.asp) to save a "bookmark" for Cornwall stats.
- **Change Monitoring:** Set up a free account on [Visualping.io](https://visualping.io/) for these high-value landing pages:
    - [Safer Cornwall Reports](https://safercornwall.co.uk/reports/)
    - [Cornwall Council Data & Research](https://www.cornwall.gov.uk/council-and-democracy/data-and-research/)
    - [ONS Housing Price Index](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/housepriceindex/previousReleases)

## 4. Maintenance Script
The provided `quarterly_monitor.py` uses the `maintenance_config.json` to perform automated health checks on your links.

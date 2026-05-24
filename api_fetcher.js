/**
 * Live Data Fetcher — ONS & Nomis API
 *
 * Fetches current (live) values for key Cornwall indicators from the
 * ONS and Nomis APIs and saves them to live_data.json.
 * The dashboard app can optionally load this file to compare live
 * values with the static 2024/2025 figures in the catalogue.
 *
 * Run:  node api_fetcher.js
 * Out:  live_data.json
 *
 * API docs:
 *   ONS  → https://developer.ons.gov.uk/
 *   Nomis → https://www.nomisweb.co.uk/api/v01/help
 */

import https from 'https';
import fs    from 'fs';
import path  from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PATH  = path.resolve(__dirname, 'live_data.json');

// Cornwall ONS geography code
const CORNWALL_GEO = 'E06000052';

// ── generic fetch helper ─────────────────────────────────────────────────────
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Hermes-DataFetcher/1.0 (Impact Cornwall project)' }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); }
        catch (e) { reject(new Error(`JSON parse error from ${url}: ${e.message}`)); }
      });
    }).on('error', reject);
  });
}

// ── indicator definitions ─────────────────────────────────────────────────────
// Each indicator defines how to fetch and how to extract the value.

const INDICATORS = [

  // ── ONS mid-year population estimate ──────────────────────────────────────
  {
    id:          'cornwall_population',
    label:       'Cornwall Population (mid-year estimate)',
    unit:        'persons',
    source:      'ONS',
    catalogueRef: 'Row 4: Cornwall\'s population was 578,324 in 2023',
    fetch: async () => {
      const url = `https://api.ons.gov.uk/v1/datasets/mid-year-pop-est/editions/time-series/versions/2/observations?time=*&geography=${CORNWALL_GEO}&sex=0&age=0`;
      const data = await fetchJson(url);
      const obs  = data.observations || [];
      // Take the most recent
      const latest = obs.sort((a, b) => b.time.localeCompare(a.time))[0];
      return { value: latest?.observation, period: latest?.time };
    },
  },

  // ── ONS median age ─────────────────────────────────────────────────────────
  {
    id:          'cornwall_median_age',
    label:       'Cornwall Median Age (Census 2021)',
    unit:        'years',
    source:      'ONS',
    catalogueRef: 'Row 6: median age increased from 45 to 47 years',
    fetch: async () => {
      // Census 2021 TS007 — age by single year
      const url = `https://api.ons.gov.uk/v1/datasets/TS007/editions/2021/versions/1/observations?geography=${CORNWALL_GEO}&age=1&sex=0`;
      const data = await fetchJson(url);
      return { value: data?.observations?.[0]?.observation ?? 'N/A', note: 'Census 2021' };
    },
  },

  // ── Nomis: unemployment claimant count ────────────────────────────────────
  {
    id:          'cornwall_claimant_count',
    label:       'Cornwall Claimant Count (Universal Credit — job-seeking)',
    unit:        'persons',
    source:      'Nomis',
    catalogueRef: 'Economy rows: UC claimant count',
    fetch: async () => {
      // Dataset: NM_162_1 — Claimant Count by geography and sex
      // geography=1929329849 is the Nomis area ID for Cornwall UA
      const url = 'https://www.nomisweb.co.uk/api/v01/dataset/NM_162_1.json?geography=1929329849&gender=0&age=0&measure=1&measures=20100&date=latest&select=date_name,obs_value';
      const data = await fetchJson(url);
      const row  = data?.obs?.[0];
      return { value: row?.['OBS_VALUE'], period: row?.['DATE_NAME'] };
    },
  },

  // ── Nomis: employment rate ─────────────────────────────────────────────────
  {
    id:          'cornwall_employment_rate',
    label:       'Cornwall Employment Rate (%, age 16–64)',
    unit:        '%',
    source:      'Nomis',
    catalogueRef: 'Economy rows: employment rate',
    fetch: async () => {
      // Dataset: NM_17_5 — Annual Population Survey
      const url = 'https://www.nomisweb.co.uk/api/v01/dataset/NM_17_5.json?geography=1929329849&variable=45&measures=20100&date=latest&select=date_name,obs_value';
      const data = await fetchJson(url);
      const row  = data?.obs?.[0];
      return { value: row?.['OBS_VALUE'], period: row?.['DATE_NAME'] };
    },
  },

  // ── Nomis: median weekly pay ───────────────────────────────────────────────
  {
    id:          'cornwall_median_weekly_pay',
    label:       'Cornwall Gross Median Weekly Pay (full-time)',
    unit:        '£',
    source:      'Nomis',
    catalogueRef: 'Economy rows: earnings / wages',
    fetch: async () => {
      // Dataset: NM_30_1 — Annual Survey of Hours and Earnings
      const url = 'https://www.nomisweb.co.uk/api/v01/dataset/NM_30_1.json?geography=1929329849&sex=8&item=2&pay=7&measures=20100&date=latest&select=date_name,obs_value';
      const data = await fetchJson(url);
      const row  = data?.obs?.[0];
      return { value: row?.['OBS_VALUE'], period: row?.['DATE_NAME'] };
    },
  },

];

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Fetching live Cornwall data from ONS & Nomis APIs…\n');

  const output = {
    generated:  new Date().toISOString(),
    cornwallGeo: CORNWALL_GEO,
    indicators: [],
  };

  for (const ind of INDICATORS) {
    process.stdout.write(`  ${ind.label} … `);
    try {
      const result = await ind.fetch();
      console.log(`✓  ${result.value} (${result.period || result.note || 'latest'})`);
      output.indicators.push({
        id:           ind.id,
        label:        ind.label,
        unit:         ind.unit,
        source:       ind.source,
        catalogueRef: ind.catalogueRef,
        ...result,
        error:        null,
      });
    } catch (err) {
      console.log(`✗  ${err.message}`);
      output.indicators.push({
        id:           ind.id,
        label:        ind.label,
        unit:         ind.unit,
        source:       ind.source,
        catalogueRef: ind.catalogueRef,
        value:        null,
        error:        err.message,
      });
    }

    // Polite delay
    await new Promise(r => setTimeout(r, 300));
  }

  fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2));
  console.log(`\n✓  Saved live data → ${OUT_PATH}`);
  console.log('   Load this file in the dashboard to compare live vs catalogue values.');
}

main().catch(console.error);

/**
 * Vital Stats Catalogue — Dashboard App
 * Impact Cornwall CIC · Project Hermes
 *
 * Loads an Excel file via drag-and-drop or file picker, parses all records,
 * renders an interactive table with filtering / search, draws Chart.js charts,
 * and runs a live URL health check using the Fetch API.
 */

/* ── THEME MAP ───────────────────────────────────────────────────────────── */
const THEME_RULES = [
  { label: 'Crime & Safety',   color: '#f87171', keywords: ['\\bcrime\\b','\\bcrimes\\b','police','safer cornwall','shoplifting','domestic abuse','anti-social','hate crime','\\boffence\\b','\\btheft\\b','\\bburglary\\b','\\bassault\\b','drug-related','\\bprison\\b','reoffend'] },
  { label: 'Housing',          color: '#a78bfa', keywords: ['house price','\\bhousing\\b','\\brent\\b','\\brental\\b','affordab','\\bproperty\\b','\\bbedroom\\b','detached','semi-detach','terraced','\\bflat\\b','maisonette','postcode','rightmove','\\bplanning\\b','\\bhmo\\b','\\bvacant\\b','unoccupied','homeles'] },
  { label: 'Health',           color: '#4ade80', keywords: ['\\bhealth\\b','\\bnhs\\b','\\bhospital\\b','\\bgp\\b','obesity','overweight','cardiovascular','dementia','life expectancy','\\bcancer\\b','\\bdiabetes\\b','\\bmortality\\b','wellbeing','\\bdisability\\b','social care','\\bdrug\\b','\\balcohol\\b','substance misuse','\\btreatment\\b','ndtms','unpaid care','carer'] },
  { label: 'Education',        color: '#34d399', keywords: ['\\bschool\\b','\\bpupil\\b','\\bgcse\\b','attainment','\\bexam\\b','\\beducation\\b','qualif','\\bteacher\\b','ofsted','sixth form','\\bcollege\\b','\\buniversity\\b','falmouth','penryn','\\bskills\\b','apprentice','level 3','a-level','t-level','disadvantaged'] },
  { label: 'Economy',          color: '#f0b429', keywords: ['\\bgdp\\b','\\beconomy\\b','earning','\\bwage\\b','\\bsalary\\b','employment','unemploy','\\bbusiness\\b','enterprise','\\bgva\\b','productivity','\\bjob\\b','\\blabour\\b','workforce','\\bincome\\b','deprivation','\\bpoverty\\b','universal credit','claimant','\\bbenefit\\b'] },
  { label: 'Arts & Culture',   color: '#fb923c', keywords: ['creative','\\bculture\\b','\\barts\\b','\\bheritage\\b','\\bmuseum\\b','\\bgallery\\b','theatre','\\bfestival\\b','\\bchoir\\b','\\bconcert\\b','performance','listed building','scheduled monument','conservation area','mining world heritage','\\bmedia\\b'] },
  { label: 'Environment',      color: '#6ee7b7', keywords: ['\\bclimate\\b','\\bcarbon\\b','\\bemission\\b','\\btemperature\\b','1\\.5.c','renewable','biodiversity','\\bspecies\\b','extinction','wildlife','recycling','\\bpollution\\b','water quality','\\bsewage\\b','\\bflood\\b','beach water'] },
  { label: 'Population',       color: '#7b8cde', keywords: ['\\bpopulation\\b','median age','\\bcensus\\b','\\bbirths\\b','\\bdeaths\\b','demographic','\\bmigration\\b'] },
  { label: 'Geography',        color: '#2ba8b4', keywords: ['coastline','\\bbeach\\b','land area','sq\\. mile','heritage coast','\\baonb\\b','national landscape','\\bnational park\\b'] },
  { label: 'Community',        color: '#93c5fd', keywords: ['\\bcommunity\\b','volunteer','respondent','\\bcornish\\b','\\bresident\\b','social mobility','inequality','\\bparticipation\\b'] },
];

const _themeRegexCache = new Map();
function detectTheme(sentence) {
  const lower = sentence.toLowerCase();
  for (const t of THEME_RULES) {
    const matched = t.keywords.some(k => {
      if (!_themeRegexCache.has(k)) _themeRegexCache.set(k, new RegExp(k));
      return _themeRegexCache.get(k).test(lower);
    });
    if (matched) return t;
  }
  return { label: 'General', color: '#8a9ab0' };
}

/* ── STATE ───────────────────────────────────────────────────────────────── */
let allRows        = [];
let filteredRows   = [];
let themeChart     = null;
let statusChart    = null;

/* ── DOM REFS ─────────────────────────────────────────────────────────────── */
const dropZone      = document.getElementById('drop-zone');
const fileInput     = document.getElementById('file-input');
const loadingBar    = document.getElementById('loading-bar');
const dashboard     = document.getElementById('dashboard');
const uploadSection = document.getElementById('upload-section');
const exportBtn     = document.getElementById('btn-export');

const searchInput   = document.getElementById('search-input');
const filterTheme   = document.getElementById('filter-theme');
const filterStatus  = document.getElementById('filter-status');
const recordsBody   = document.getElementById('records-body');
const visibleCount  = document.getElementById('visible-count');
const tableEmpty    = document.getElementById('table-empty');

/* ── NAV SCROLL (buttons, not anchors — no hash in URL, no scroll-to-top snap) ── */
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const el = document.getElementById(btn.dataset.scroll);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── DOCUMENT DRAG GUARD (prevent browser navigating if file dropped outside zone) ── */
document.addEventListener('dragover', e => e.preventDefault());
document.addEventListener('drop',     e => e.preventDefault());

/* ── FILE LOADING ─────────────────────────────────────────────────────────── */

dropZone.addEventListener('dragover', e => { e.stopPropagation(); e.preventDefault(); dropZone.classList.add('drag-over'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop', e => {
  e.stopPropagation(); e.preventDefault();
  dropZone.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) loadFile(file);
});
dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => {
  if (fileInput.files[0]) loadFile(fileInput.files[0]);
});

function loadFile(file) {
  loadingBar.classList.remove('hidden');
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const workbook = XLSX.read(e.target.result, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const rawData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
      parseData(rawData, file.name);
    } catch (err) {
      alert('Could not read file: ' + err.message);
    } finally {
      loadingBar.classList.add('hidden');
    }
  };
  reader.readAsArrayBuffer(file);

  // Store workbook for export
  const r2 = new FileReader();
  r2.onload = e2 => { window._workbookData = { data: e2.target.result, name: file.name }; };
  r2.readAsArrayBuffer(file);
}

function parseData(rawData, fileName) {
  allRows = [];
  // rawData[0] = blank intro row, rawData[1] = headers (Sentence, URL, Correct?)
  // Data starts at rawData[2]
  for (let i = 2; i < rawData.length; i++) {
    const row = rawData[i];
    if (!row || !row[1]) continue;
    const sentence = String(row[1] || '').trim();
    const urlRaw   = row[2] ? String(row[2]).trim() : '';
    const correct  = row[3] ? String(row[3]).trim() : '';

    if (!sentence) continue;

    const isMissing = !urlRaw || urlRaw === 'Not available in the provided document.';
    const isFlagged = correct.toLowerCase().includes('check') || correct.includes('⚠');
    const theme     = detectTheme(sentence);
    const urls      = extractUrls(urlRaw);

    allRows.push({
      rowNum:    i,       // rawData index (i+1 = sheet row)
      sentence,
      urlRaw,
      correct,
      isMissing,
      isFlagged,
      theme,
      urls,
      checkResult: null,  // populated by URL checker
    });
  }

  document.title = `Vital Stats Catalogue (${fileName})`;
  populateThemeFilter();
  updateStats();
  applyFilters();
  exportBtn.disabled = false;

  // Blur any focused element BEFORE hiding its container — prevents browsers from
  // repeatedly trying to re-focus a display:none element (which snaps scroll to top).
  if (document.activeElement) document.activeElement.blur();
  uploadSection.classList.add('hidden');
  dashboard.classList.remove('hidden');

  // Chart.js needs the container visible and reflowed — a short timeout ensures layout
  setTimeout(renderCharts, 80);
}

/* ── URL HELPERS ──────────────────────────────────────────────────────────── */
const URL_REGEX = /https?:\/\/[^\s"'<>|,;()[\]\\]+/g;

function extractUrls(text) {
  return [...new Set((text || '').match(URL_REGEX) || [])];
}

/* ── STATS CARDS ──────────────────────────────────────────────────────────── */
function updateStats() {
  const total    = allRows.length;
  const hasUrl   = allRows.filter(r => !r.isMissing).length;
  const missing  = allRows.filter(r => r.isMissing).length;
  const verified = allRows.filter(r => /^(yes|correct|✓|✔)/i.test(r.correct)).length;
  const flagged  = allRows.filter(r => r.isFlagged).length;

  setText('stat-total',    total);
  setText('stat-has-url',  hasUrl);
  setText('stat-missing',  missing);
  setText('stat-verified', verified);
  setText('stat-flagged',  flagged);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ── CHARTS ───────────────────────────────────────────────────────────────── */
function renderCharts() {
  const chartDefaults = {
    color: '#8a9ab0',
    plugins: { legend: { labels: { color: '#8a9ab0', font: { family: 'Outfit' } } } },
    scales:  {},
  };

  // ── Theme bar chart ──
  const themeCounts = {};
  for (const row of allRows) {
    const lbl = row.theme.label;
    themeCounts[lbl] = (themeCounts[lbl] || 0) + 1;
  }
  const themeLabels = Object.keys(themeCounts).sort((a, b) => themeCounts[b] - themeCounts[a]);
  const themeColors = themeLabels.map(l => {
    const t = THEME_RULES.find(t => t.label === l);
    return t ? t.color : '#8a9ab0';
  });

  if (themeChart) themeChart.destroy();
  const ctxTheme = document.getElementById('chart-by-theme').getContext('2d');
  themeChart = new Chart(ctxTheme, {
    type: 'bar',
    data: {
      labels: themeLabels,
      datasets: [{
        label: 'Records',
        data: themeLabels.map(l => themeCounts[l]),
        backgroundColor: themeColors.map(c => c + 'bb'),
        borderColor:     themeColors,
        borderWidth: 1.5,
        borderRadius: 6,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y} records` } },
      },
      scales: {
        x: { ticks: { color: '#8a9ab0', font: { family: 'Outfit', size: 11 } }, grid: { color: 'rgba(138,154,176,0.08)' } },
        y: { ticks: { color: '#8a9ab0', font: { family: 'Outfit', size: 11 } }, grid: { color: 'rgba(138,154,176,0.08)' } },
      },
    },
  });

  // ── URL Status doughnut ──
  const hasUrl  = allRows.filter(r => !r.isMissing && !r.isFlagged).length;
  const missing = allRows.filter(r => r.isMissing).length;
  const flagged = allRows.filter(r => r.isFlagged).length;

  if (statusChart) statusChart.destroy();
  const ctxStatus = document.getElementById('chart-url-status').getContext('2d');
  statusChart = new Chart(ctxStatus, {
    type: 'doughnut',
    data: {
      labels: ['Has URL', 'Missing URL', 'Flagged ⚠'],
      datasets: [{
        data:            [hasUrl, missing, flagged],
        backgroundColor: ['rgba(74,222,128,0.7)', 'rgba(251,191,36,0.7)', 'rgba(248,113,113,0.7)'],
        borderColor:     ['#4ade80', '#fbbf24', '#f87171'],
        borderWidth: 2,
        hoverOffset: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#8a9ab0', font: { family: 'Outfit', size: 12 }, padding: 16, boxWidth: 14 },
        },
        tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed}` } },
      },
    },
  });
}

/* ── THEME FILTER POPULATION ──────────────────────────────────────────────── */
function populateThemeFilter() {
  const themes = [...new Set(allRows.map(r => r.theme.label))].sort();
  filterTheme.innerHTML = '<option value="">All Themes</option>';
  for (const t of themes) {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    filterTheme.appendChild(opt);
  }
}

/* ── FILTERING ────────────────────────────────────────────────────────────── */
searchInput.addEventListener('input',  applyFilters);
filterTheme.addEventListener('change', applyFilters);
filterStatus.addEventListener('change', applyFilters);

function applyFilters() {
  const query  = searchInput.value.trim().toLowerCase();
  const theme  = filterTheme.value;
  const status = filterStatus.value;

  filteredRows = allRows.filter(row => {
    if (theme  && row.theme.label !== theme) return false;
    if (status === 'has-url'  && row.isMissing)  return false;
    if (status === 'missing'  && !row.isMissing) return false;
    if (status === 'flagged'  && !row.isFlagged) return false;
    if (query  && !row.sentence.toLowerCase().includes(query)) return false;
    return true;
  });

  renderTable(query);
}

/* ── TABLE RENDER ─────────────────────────────────────────────────────────── */
function renderTable(highlightQuery) {
  recordsBody.innerHTML = '';
  visibleCount.textContent = filteredRows.length;

  if (filteredRows.length === 0) {
    tableEmpty.classList.remove('hidden');
    return;
  }
  tableEmpty.classList.add('hidden');

  const fragment = document.createDocumentFragment();

  for (const row of filteredRows) {
    const tr = document.createElement('tr');

    // Row number
    const tdNum = document.createElement('td');
    tdNum.innerHTML = `<span class="row-num">${row.rowNum + 1}</span>`;

    // Theme badge
    const tdTheme = document.createElement('td');
    tdTheme.innerHTML = `<span class="theme-badge" style="background:${row.theme.color}22;color:${row.theme.color}">${row.theme.label}</span>`;

    // Sentence
    const tdSentence = document.createElement('td');
    tdSentence.textContent = row.sentence;
    if (highlightQuery) tdSentence.innerHTML = highlight(row.sentence, highlightQuery);

    // URL
    const tdUrl = document.createElement('td');
    tdUrl.className = 'url-cell';
    if (row.isMissing) {
      tdUrl.innerHTML = `<span class="url-missing">No source URL</span>`;
    } else if (row.urls.length > 1) {
      tdUrl.innerHTML = `<div class="url-multi">${row.urls.map(u => `<a href="${escapeHtml(u)}" target="_blank" rel="noopener">${truncateUrl(u)}</a>`).join('')}</div>`;
    } else if (row.urls.length === 1) {
      // Show label if the raw cell has prefix text
      const labelMatch = row.urlRaw.match(/^([^:http][^:]{1,60}):\s*https?:\/\//);
      const label = labelMatch ? labelMatch[1].trim() : '';
      tdUrl.innerHTML = `${label ? `<span style="font-size:0.72rem;color:var(--text-muted);display:block;margin-bottom:3px">${escapeHtml(label)}</span>` : ''}<a href="${escapeHtml(row.urls[0])}" target="_blank" rel="noopener">${truncateUrl(row.urls[0])}</a>`;
    } else {
      tdUrl.innerHTML = `<span class="url-missing">${escapeHtml(row.urlRaw)}</span>`;
    }

    // Status
    const tdStatus = document.createElement('td');
    tdStatus.style.textAlign = 'center';
    if (row.checkResult !== null) {
      tdStatus.innerHTML = checkerBadge(row.checkResult);
    } else if (row.isFlagged) {
      tdStatus.innerHTML = `<span class="status-badge status-badge--flagged"><span class="status-dot status-dot--flagged"></span>Review</span>`;
    } else if (row.isMissing) {
      tdStatus.innerHTML = `<span class="status-badge status-badge--missing"><span class="status-dot status-dot--missing"></span>No URL</span>`;
    } else {
      tdStatus.innerHTML = `<span class="status-badge status-badge--ok"><span class="status-dot status-dot--ok"></span>Has URL</span>`;
    }

    tr.appendChild(tdNum);
    tr.appendChild(tdTheme);
    tr.appendChild(tdSentence);
    tr.appendChild(tdUrl);
    tr.appendChild(tdStatus);
    fragment.appendChild(tr);
  }

  recordsBody.appendChild(fragment);
}

/* ── HELPERS ──────────────────────────────────────────────────────────────── */
function highlight(text, query) {
  if (!query) return escapeHtml(text);
  const safe  = escapeHtml(text);
  const safeQ = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(`(${safeQ})`, 'gi'), '<mark>$1</mark>');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function truncateUrl(url) {
  try {
    const u = new URL(url);
    const disp = u.hostname.replace(/^www\./, '') + (u.pathname.length > 1 ? u.pathname : '');
    return escapeHtml(disp.length > 45 ? disp.substring(0, 45) + '…' : disp);
  } catch {
    return escapeHtml(url.length > 45 ? url.substring(0, 45) + '…' : url);
  }
}

/* ── URL HEALTH CHECKER ───────────────────────────────────────────────────── */
document.getElementById('btn-run-checker').addEventListener('click', runHealthCheck);

async function runHealthCheck() {
  const btn = document.getElementById('btn-run-checker');
  btn.disabled = true;
  btn.textContent = 'Checking…';

  const statsEl  = document.getElementById('checker-stats');
  const progEl   = document.getElementById('checker-progress');
  const fill     = document.getElementById('progress-fill');
  const progLbl  = document.getElementById('progress-label');
  const results  = document.getElementById('checker-results');

  statsEl.style.display  = 'flex';
  progEl.style.display   = 'flex';
  results.innerHTML      = '';

  let ok = 0, warn = 0, err = 0, skip = 0;
  const total   = allRows.length;
  const BATCH   = 6;
  const TIMEOUT = 12000;

  function updateCounters() {
    document.getElementById('c-ok').textContent   = ok;
    document.getElementById('c-warn').textContent = warn;
    document.getElementById('c-err').textContent  = err;
    document.getElementById('c-skip').textContent = skip;
  }

  async function checkUrl(url) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), TIMEOUT);
      const res = await fetch(url, { method: 'HEAD', signal: ctrl.signal, mode: 'no-cors' });
      clearTimeout(timer);
      // no-cors gives opaque response (status=0 but no error = reachable)
      return { type: 'ok', status: res.status || 'opaque' };
    } catch (e) {
      if (e.name === 'AbortError') return { type: 'err', status: 'Timeout' };
      // Likely CORS block (resource may still exist)
      return { type: 'warn', status: 'CORS' };
    }
  }

  for (let i = 0; i < allRows.length; i += BATCH) {
    const batch = allRows.slice(i, i + BATCH);
    await Promise.all(batch.map(async row => {
      let result;
      if (row.urls.length === 0) {
        result = { type: 'skip', status: 'No URL' };
        skip++;
      } else {
        result = await checkUrl(row.urls[0]);
        if      (result.type === 'ok')   ok++;
        else if (result.type === 'warn') warn++;
        else                             err++;
      }
      row.checkResult = result;

      // Append row to results
      const div = document.createElement('div');
      div.className = `checker-row checker-row--${result.type === 'skip' ? 'warn' : result.type}`;
      div.innerHTML = `
        <span class="checker-row-num">${row.rowNum + 1}</span>
        <div class="checker-row-content">
          <span class="checker-row-sentence">${escapeHtml(row.sentence.substring(0, 80))}${row.sentence.length > 80 ? '…' : ''}</span>
          <span class="checker-row-url">${row.urls[0] ? escapeHtml(truncateUrlFull(row.urls[0])) : '—'}</span>
        </div>
        <span class="checker-row-badge">${checkerBadge(result)}</span>
      `;
      results.appendChild(div);

      updateCounters();
    }));

    const done = Math.min(i + BATCH, total);
    fill.style.width  = (done / total * 100) + '%';
    progLbl.textContent = `${done} / ${total}`;

    // Small yield to prevent UI freeze
    await new Promise(r => setTimeout(r, 10));
  }

  // Re-render table with check results
  applyFilters();

  btn.disabled    = false;
  btn.textContent = 'Run Health Check';
  fill.style.width = '100%';
}

function checkerBadge(result) {
  if (!result) return '';
  const map = {
    ok:   { cls: 'ok',   label: '✓ OK' },
    warn: { cls: 'warn', label: '? CORS' },
    err:  { cls: 'err',  label: '✗ Error' },
    skip: { cls: 'missing', label: '— None' },
  };
  const m = map[result.type] || map.skip;
  return `<span class="status-badge status-badge--${m.cls}">${m.label}</span>`;
}

function truncateUrlFull(url) {
  return url.length > 60 ? url.substring(0, 60) + '…' : url;
}

/* ── EXPORT ───────────────────────────────────────────────────────────────── */
exportBtn.addEventListener('click', () => {
  if (!window._workbookData) return;
  const wb   = XLSX.read(window._workbookData.data, { type: 'array' });
  const name = window._workbookData.name.replace(/\.xlsx?$/i, '') + '_exported.xlsx';
  XLSX.writeFile(wb, name);
});

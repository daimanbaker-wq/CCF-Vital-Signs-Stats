#!/usr/bin/env python3
"""CCF Vital Stats Dashboard — Streamlit App

Usage:
    streamlit run dashboard/app.py
"""

import re
import sys
from pathlib import Path

import streamlit as st
import pandas as pd

# ── Paths ────────────────────────────────────────────────────────────────
HERE = Path(__file__).resolve().parent
# Use Completed (consolidated), fall back to Updated
PROJECT_DIR = HERE.parent
XLSX_CANDIDATES = [
    PROJECT_DIR / "Vital_Stats_Verified (June 19).xlsx",  # has real headers — preferred
    PROJECT_DIR / "Vital_Stats_Completed.xlsx",
    PROJECT_DIR / "Vital_Stats_Updated.xlsx",
    PROJECT_DIR / "data" / "Vital_Stats_Verified (June 19).xlsx",
]
for p in XLSX_CANDIDATES:
    if p.exists():
        XLSX_PATH = p
        break
else:
    st.error("❌ No Vital Stats Excel file found. Check project path.")
    st.stop()

# ── Page config ─────────────────────────────────────────────────────────
st.set_page_config(
    page_title="CCF Vital Stats Dashboard",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded",
)

# ── Load data ───────────────────────────────────────────────────────────
@st.cache_data(ttl=3600)
def load_data():
    df = pd.read_excel(XLSX_PATH, header=1)
    # Rename columns for clarity
    col_map = {}
    for c in df.columns:
        c_str = str(c).strip()
        if 'Sentence' in c_str:
            col_map[c] = 'Sentence'
        elif 'Verified URL' in c_str:   # must come before bare 'URL' check
            col_map[c] = 'Verified URL'
        elif 'URL' in c_str:
            col_map[c] = 'URL'
        elif 'Correct' in c_str:
            col_map[c] = 'Correct?'
        elif 'Source' in c_str:
            col_map[c] = 'Source Type'
        elif 'Verdict' in c_str and 'Verified' not in c_str:
            col_map[c] = 'Verdict'
        elif 'Verified URL' in c_str:
            col_map[c] = 'Verified URL'
        elif 'Confidence' in c_str:
            col_map[c] = 'Confidence'
        elif 'Evidence' in c_str:
            col_map[c] = 'Evidence'
    df = df.rename(columns=col_map)
    # Ensure required columns exist
    for c in ['Sentence', 'Verdict']:
        if c not in df.columns:
            st.warning(f"Column '{c}' not found. Available: {list(df.columns)}")
    return df

df = load_data()
total_rows = len(df)

# ── Sidebar filters ─────────────────────────────────────────────────────
st.sidebar.title("📊 CCF Vital Stats")
st.sidebar.caption(f"**{total_rows} rows** — last checked June 2026")
st.sidebar.markdown("---")

# Search
st.sidebar.subheader("🔍 Search")
search_query = st.sidebar.text_input(
    "Search stats", placeholder="e.g. child poverty, wages, housing",
    label_visibility="collapsed",
)

# Topic category filter (extracted from sentences)
@st.cache_data
def extract_topics(df):
    topic_keywords = {
        'Health & Care': r'\b(health|hospital|nhs|doctor|care|obesity|alcohol|smoking|drug|mental|disability|cardiovascular)\b',
        'Children & Education': r'\b(child|children|young|education|school|student|reception|year \d)\b',
        'Housing & Transport': r'\b(housing|home|house|transport|travel|road|car|bus|rail|traffic)\b',
        'Poverty & Income': r'\b(poverty|income|wage|wages|salary|benefit|universal credit|low.?pay|disadvantage|cost.?living)\b',
        'Employment & Business': r'\b(employ|job|work|unemployment|business|enterprise|self.?employ|worker)\b',
        'Crime & Safety': r'\b(crime|criminal|offence|police|violence|abuse|drug|fire|emergency|safety)\b',
        'Community & Demographics': r'\b(population|demographic|community|volunteer|charity|migrant|minority|ethnic|cornwall|residents)\b',
        'Environment': r'\b(environment|climate|coastline|land|farm|agriculture|pollution|emission|flood|nature|biodiversity)\b',
    }
    topic_map = {}
    for cat, pattern in topic_keywords.items():
        mask = df['Sentence'].str.lower().str.contains(pattern, regex=True, na=False)
        topic_map[cat] = mask
    return topic_map, list(topic_keywords.keys())

topic_map, all_topics = extract_topics(df)

# Multi-select topic filter
st.sidebar.subheader("🏷️ Topics")
selected_topics = []
for topic in all_topics:
    count = topic_map[topic].sum()
    checked = st.sidebar.checkbox(f"{topic} ({count})", value=False)
    if checked:
        selected_topics.append(topic)

# Verdict filter
st.sidebar.subheader("🎯 Status")
status_counts = df['Verdict'].value_counts()
all_verdicts = list(status_counts.index)
default_show = [v for v in all_verdicts if v not in ('NO_URL', 'NEEDS_SOURCE', 'UNREACHABLE')]
selected_verdicts = []
for v in all_verdicts:
    count = status_counts.get(v, 0)
    checked = st.sidebar.checkbox(
        f"{v} ({count})",
        value=v in default_show,
        key=f"v_{v}"
    )
    if checked:
        selected_verdicts.append(v)

st.sidebar.markdown("---")
st.sidebar.caption(f"Data source: `{XLSX_PATH.name}`")

# ── Apply filters ───────────────────────────────────────────────────────
filtered = df.copy()

if search_query:
    mask = filtered['Sentence'].str.lower().str.contains(search_query.lower(), na=False)
    # Also search in evidence
    if 'Evidence' in filtered.columns:
        mask |= filtered['Evidence'].str.lower().str.contains(search_query.lower(), na=False)
    filtered = filtered[mask]

if selected_topics:
    combined_mask = pd.Series(False, index=filtered.index)
    for t in selected_topics:
        combined_mask |= topic_map[t]
    filtered = filtered[combined_mask]

if selected_verdicts:
    filtered = filtered[filtered['Verdict'].isin(selected_verdicts)]

# ── Main content ────────────────────────────────────────────────────────
st.title("💬 Cornwall Community Foundation")
st.markdown("##### *Vital Signs Statistics Database*")

# Summary cards
col1, col2, col3, col4 = st.columns(4)
with col1:
    st.metric("📋 Total Stats", total_rows)
with col2:
    st.metric("✅ Confirmed", status_counts.get('CONFIRMED', 0))
with col3:
    st.metric("🔶 Needs Review", 
              status_counts.get('PARTIAL', 0) + status_counts.get('NOT_FOUND', 0))
with col4:
    st.metric("🚫 Unreachable / Needs Source", 
              status_counts.get('UNREACHABLE', 0) + status_counts.get('NEEDS_SOURCE', 0) + status_counts.get('NO_URL', 0))

st.markdown("---")

# Needs-attention banner
needs_attention = status_counts.get('NEEDS_SOURCE', 0) + status_counts.get('NO_URL', 0)
still_unreachable = status_counts.get('UNREACHABLE', 0)
if needs_attention > 0 or still_unreachable > 0:
    with st.expander(f"🚨 **{needs_attention + still_unreachable} stats need attention** (click to expand)", expanded=needs_attention > 5):
        col_a, col_b = st.columns(2)
        if needs_attention > 0:
            col_a.warning(f"📝 **{needs_attention} stats** have no source URL — flagged as NEEDS_SOURCE. These need manual sourcing (search CCF Vital Signs reports, Cornwall Council JSNA)")
        if still_unreachable > 0:
            col_b.error(f"🔗 **{still_unreachable} stats** have URLs but they're still unreachable (404, expired S3 links, nomisweb dynamic pages). These need manual Wayback Machine checks or alternative URLs")
        st.caption("Tip: Use the **Status** sidebar filter to focus on specific verdict types. Try web searching the stat text to find an alternative source.")

st.markdown("---")

# Current view header
st.subheader(f"📄 Showing {len(filtered)} of {total_rows} statistics")

if filtered.empty:
    st.info("No results match your filters. Try broadening your search.")
else:
    # Build display dataframe
    display_cols = ['Sentence', 'Verdict', 'Confidence', 'Source Type']
    if 'Evidence' in filtered.columns:
        display_cols.append('Evidence')
    display_cols.append('Verified URL')

    display_df = filtered[['Sentence', 'Verdict', 'Confidence', 'Source Type', 'Evidence', 'Verified URL']].copy() if 'Evidence' in filtered.columns else filtered[['Sentence', 'Verdict', 'Confidence', 'Source Type']].copy()

    # Fill Verified URL from URL column if empty
    if 'Verified URL' in filtered.columns:
        display_df['Verified URL'] = display_df['Verified URL'].fillna(filtered.get('URL', ''))
    elif 'URL' in filtered.columns:
        display_df['URL'] = filtered['URL']

    # Truncate sentences in table
    display_df_display = display_df.copy()
    if 'Sentence' in display_df_display.columns:
        display_df_display['Sentence'] = display_df_display['Sentence'].str[:120].str.strip()

    # Show table
    st.dataframe(
        display_df_display,
        column_config={
            "Sentence": st.column_config.TextColumn("Statistic", width="large"),
            "Verdict": st.column_config.TextColumn("Status", width="small"),
            "Confidence": st.column_config.TextColumn("Confidence", width="small"),
            "Source Type": st.column_config.TextColumn("Source", width="small"),
            "Evidence": st.column_config.TextColumn("Evidence", width="medium"),
            "Verified URL": st.column_config.LinkColumn("Source URL", width="medium"),
            "URL": st.column_config.LinkColumn("URL", width="medium"),
        },
        use_container_width=True,
        hide_index=True,
        height=min(600, 40 * len(display_df_display)),
    )

    # Download button
    csv = filtered.to_csv(index=False).encode('utf-8')
    st.download_button(
        "📥 Download filtered results (CSV)",
        csv,
        f"ccf_vital_stats_filtered.csv",
        "text/csv",
    )

# ── Verdict breakdown ───────────────────────────────────────────────────
st.markdown("---")
st.subheader("📊 Verdict Breakdown")
st.bar_chart(status_counts)

# ── Data quality note ───────────────────────────────────────────────────
st.markdown("---")
st.caption(
    f"**Data source:** `{XLSX_PATH.name}` — Last verified: June 2026. "
    "Stats are validated quarterly against source URLs. "
    "CONFIRMED = exact match on source page. PARTIAL = partial keyword/number match. "
    "UNREACHABLE = source URL could not be reached. "
    "For board inquiries, contact the AI Working Group."
)

#!/bin/bash
# Start the CCF Vital Stats Dashboard
cd "$(dirname "$0")"
echo "🚀 Starting CCF Vital Stats Dashboard..."
echo "   URL: http://localhost:8502"
/Users/deebee/.hermes/hermes-agent/venv/bin/python3 -m streamlit run dashboard/app.py --server.headless true --server.port 8502
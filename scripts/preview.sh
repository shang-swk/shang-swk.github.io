#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
echo '本地预览：http://127.0.0.1:4000（按 Ctrl+C 停止）'
exec python3 -m http.server 4000 --bind 127.0.0.1

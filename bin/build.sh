#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
./node_modules/.bin/hexo clean
build_log=$(mktemp)
trap 'rm -f "$build_log"' EXIT
./node_modules/.bin/hexo generate --bail 2>&1 | tee "$build_log"
# Hexo 6 can log a failed article while still returning exit code 0.
if grep -Eq '^(ERROR|FATAL)([[:space:]]|$)' "$build_log"; then
  echo '生成文章失败，已停止发布。请修复上面的错误后重试。' >&2
  exit 1
fi
touch public/.nojekyll
node bin/check-static-assets.cjs
if [[ -f apps/nb-archive/package.json ]]; then
  if [[ ! -d apps/nb-archive/node_modules ]]; then
    npm --prefix apps/nb-archive ci
  fi
  npm --prefix apps/nb-archive run build -- --webpack
  mkdir -p public/nb-archive
  rsync -a --delete apps/nb-archive/out/ public/nb-archive/
fi

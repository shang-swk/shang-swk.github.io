#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ "$(git branch --show-current)" != master ]]; then
  echo '请先切换到 master 分支再发布。' >&2
  exit 1
fi
git fetch origin
if ! git merge-base --is-ancestor origin/master HEAD; then
  echo 'GitHub 有本地未合并的提交。请先保存修改，再运行 git pull --rebase。' >&2
  exit 1
fi

git status --short
git diff --stat HEAD
echo '以上本地修改和未忽略的新文件将提交到公开博客仓库。'
read -r -p '确认发布？输入 y 继续：' answer
[[ "$answer" == y ]] || exit 0
git add --all
if ! git diff --cached --quiet; then
  git commit -m "${1:-Update blog}"
fi
git push origin master
echo '已推送。GitHub Pages 部署进度：https://github.com/shang-swk/shang-swk.github.io/actions'

#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."

source_branch=codex/hexo-source
if [[ "$(git branch --show-current)" != "$source_branch" ]]; then
  echo "请先切换到 $source_branch 源码分支再发布。" >&2
  exit 1
fi
if [[ "$(git remote get-url origin)" != https://github.com/shang-swk/shang-swk.github.io.git ]]; then
  echo 'origin 不是博客仓库，请先检查远端配置。' >&2
  exit 1
fi
npm run build
git fetch origin
if git show-ref --verify --quiet "refs/remotes/origin/$source_branch" &&
   ! git merge-base --is-ancestor "origin/$source_branch" HEAD; then
  echo 'GitHub 有新的源码提交。请先提交本地修改，再运行 git pull --rebase。' >&2
  exit 1
fi
if [[ ! -e .deploy_git ]]; then
  if ! git show-ref --verify --quiet refs/heads/master; then
    git branch --track master origin/master
  fi
  git worktree add .deploy_git master
fi
if [[ ! -f .deploy_git/.git ]] || [[ "$(git -C .deploy_git branch --show-current)" != master ]]; then
  echo '.deploy_git 不是 master 的 Git worktree，请检查发布目录。' >&2
  exit 1
fi
if [[ -n "$(git -C .deploy_git status --porcelain)" ]]; then
  echo '.deploy_git 有未提交的文件，请先检查；源码在当前目录。' >&2
  exit 1
fi
git -C .deploy_git merge --ff-only origin/master

git status --short
git diff --stat HEAD
echo '将备份源码到 codex/hexo-source，并把生成的网页发布到 master。'
read -r -p '确认发布？输入 y 继续：' answer
[[ "$answer" == y ]] || exit 0
git add --all
if ! git diff --cached --quiet; then
  git commit -m "${1:-Update blog source}"
fi
git push -u origin "$source_branch"
rsync -a --delete --exclude='.git' public/ .deploy_git/
git -C .deploy_git add --all
if ! git -C .deploy_git diff --cached --quiet; then
  git -C .deploy_git commit -m "${1:-Publish blog}"
fi
git -C .deploy_git push origin master
echo '已推送。GitHub Pages 部署进度：https://github.com/shang-swk/shang-swk.github.io/actions'

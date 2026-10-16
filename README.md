# One ball：Hexo 写作与发布

网站：https://shang-swk.github.io/

这是恢复的 Hexo 6.2 + Fluid 1.9.2 写作项目，包含 29 篇 Markdown 文章和原主题配置。历史文章日期已从旧站页面补入 front matter，避免换电脑后链接和排序变化。

## 写文章

在 VS Code 或 Cursor 中打开此文件夹，在终端执行：

```bash
cd /Users/kevin/Documents/ChatGPT/blog
npm run sync
npm run new -- "我的新文章"
```

打开生成的 `source/_posts/我的新文章.md`，编辑并保存，例如：

```markdown
---
title: 我的新文章
date: 2026-10-16 12:00:00
categories: 开发技术
tags:
  - 随笔
excerpt: 这篇文章的简短介绍。
---

## 第一节

这里写正文，可以使用 Markdown、代码块和图片。
```

图片放在同名文章资源目录，使用 Hexo 资源标签引用：

```text
source/_posts/我的新文章.md
source/_posts/我的新文章/截图.png
```

```markdown
{% asset_img 截图.png 图片说明 %}
```

已有文章也在 `source/_posts/`，直接编辑对应 `.md` 文件。外观配置位于 `source/_data/fluid_config.yml`，首页精选文章与专题文案位于 `source/_data/home.yml`，网站标题等配置位于根目录的 `_config.yml`。

文章分类统一使用 `开发技术`、`网络与安全`、`工业通信`、`语言学习`；Git、HTTP、雅思词汇等具体知识点放在 `tags`。旧分类网址保留跳转，不需要修改已有文章链接。

## 本地预览

```bash
npm run dev
```

访问 http://127.0.0.1:4000 。保存 Markdown 后等待重新生成，再刷新浏览器。预览包含本地草稿。按 Ctrl+C 停止服务。

## 发布

预览确认后，另开终端运行：

```bash
npm run publish -- "发布我的新文章"
```

检查修改，输入 `y` 后，脚本会：

1. 备份文章、主题和配置到 GitHub 的 `codex/hexo-source` 分支。
2. 把生成后的网页推送到 `master` 分支，触发 GitHub Pages 更新。

脚本会先生成网页并检查分支，使用普通 Git 推送。部署结果：https://github.com/shang-swk/shang-swk.github.io/actions 。保存文件本身不会发布；不要手动编辑 `public/` 或 `.deploy_git/` 中的生成文件。

如果源码已推送但网页推送失败，解决网络问题后重新执行发布命令即可。若提示 `.deploy_git` 有未提交改动，可在确认它们都是待发布的生成文件后运行：

```bash
git -C .deploy_git add --all
git -C .deploy_git commit -m "Publish blog"
git -C .deploy_git push origin master
```

若远端有新源码提交，请先提交本地修改，再运行 `git pull --rebase`，处理冲突后重新发布。

## 暂时不发布的草稿

```bash
npm run draft -- "还没写完的文章"
```

草稿位于 `source/_drafts/`，只在本地预览中显示，不会被发布脚本上传。准备发布时，把草稿 `.md` 和同名图片文件夹一起移入 `source/_posts/`。

## VS Code / Cursor

使用“终端 → 运行任务”，可选择新建文章、本地预览、拉取源码或发布。

## 分支和换电脑

- 日常编辑分支：`codex/hexo-source`。
- 网页发布分支：`master`，在忽略目录 `.deploy_git/` 内检出。
- `node_modules/`、`public/`、`.deploy_git/`、草稿和本地环境文件不上传。
- GitHub 授权、代理和 Git 提交身份保存在本机，不随源码上传。

换电脑时：

```bash
git clone --branch codex/hexo-source https://github.com/shang-swk/shang-swk.github.io.git blog
cd blog
npm ci --ignore-scripts
npm run dev
```

首次发布需要登录 GitHub：`gh auth login`，然后 `gh auth setup-git`。当前电脑已完成登录。Git 网络设置仅保存在本机，可以按当前网络选择直连或系统代理。

如果以后网络需要代理，可仅为本仓库启用电脑上已有的代理：

```bash
git config --local http.https://github.com/.proxy http://127.0.0.1:7892
# 当前代理下的上传兼容配置（仅此仓库）：
git config --local http.version HTTP/1.1
git config --local http.postBuffer 10485760
# 改用直连：
git config --local http.https://github.com/.proxy ''
```

这份项目沿用旧站版本以恢复原貌；`npm run deploy` 和`bash bin/publish.sh` 也会调用上述发布流程。

## NB Archive 项目网站

博客的“项目”入口链接到 `/projects/`，档案站位于 `/nb-archive/`。发布副本源码在 `apps/nb-archive/`，原项目 `/Users/kevin/Documents/newbalance 网站` 保持不变。

`npm run build` 和 `npm run publish` 会一并构建这个 Next.js 静态网站。它保留档案浏览、筛选、对比和当前浏览器的本地鞋柜；社区发帖、评论和在线纠错未开放。修改原项目不会自动改变发布副本，更新上线版请在 `apps/nb-archive/` 中修改。

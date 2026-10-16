# One ball 博客：本地编辑与发布

- 网站：https://shang-swk.github.io/
- 仓库：https://github.com/shang-swk/shang-swk.github.io
- 发布分支：`master`

## 日常操作

在此目录打开终端，开始编辑前先拉取云端更新：

```bash
git pull --ff-only
```

修改文件并保存，然后启动本地预览：

```bash
bash scripts/preview.sh
```

访问 http://127.0.0.1:4000 。保存文件后刷新浏览器即可查看；在终端按 Ctrl+C 停止预览。

确认预览效果后，另开一个终端发布：

```bash
bash scripts/publish.sh "更新博客内容"
```

脚本先检查云端和本地分支，列出改动；输入 `y` 后提交所有未被忽略的修改并推送。推送成功后，到仓库 Actions 页面查看 GitHub Pages 部署结果。仅保存文件不会自动推送。

也可以使用原生 Git 命令，按需选择文件：

```bash
git status
git add index.html
git commit -m "更新首页"
git push origin master
```

在 VS Code 或 Cursor 中打开此文件夹，使用“终端 → 运行任务”可选择预览、拉取或发布。

## 修改哪些文件

| 内容 | 文件 |
| --- | --- |
| 首页 | `index.html` |
| 关于页面 | `about/index.html` |
| 已有文章 | `2022/`、`2023/`、`2025/` 下对应文章的 `index.html` |
| 样式 | `css/` |
| 图片 | `img/` |
| 归档、分类、标签和搜索 | `archives/`、`categories/`、`tags/`、`local-search.xml` |

这些是 Hexo 生成后的静态文件。修改文章标题或添加文章时，需要同步更新首页、归档、分类、标签和搜索等引用；当前没有 Hexo 源文件，不能直接使用 `hexo new` 自动生成这些内容。后续如找到包含 `_config.yml`、`package.json` 和 `source/_posts/` 的原始项目，应使用原始项目生成和发布；重新生成可能覆盖这里手动改过的 HTML。

## 首次登录及连接

浏览器 GitHub 登录和终端 Git 登录是两件事。终端使用 GitHub 官方 CLI 完成登录：

```bash
gh auth login --hostname github.com --git-protocol https --web
gh auth setup-git --hostname github.com
```

若当前网络需要系统已有的本地代理，可在单次登录时设置，例如：

```bash
HTTPS_PROXY=http://127.0.0.1:7892 gh auth login --hostname github.com --git-protocol https --web
```

Git 的远端地址、代理和提交身份保存在本机 `.git/config`，不会上传。若代理关闭或端口改变，需要相应修改本仓库配置：

```bash
git config --local http.https://github.com/.proxy http://127.0.0.1:7892
# 不再需要代理时：
git config --local --unset http.https://github.com/.proxy
```

推送失败时，本地提交仍保留；解决网络或登录问题后重新运行 `git push origin master`。若提示云端有新提交，先用 `git status` 检查并提交本地修改，再运行 `git pull --rebase`，解决可能的冲突后推送。

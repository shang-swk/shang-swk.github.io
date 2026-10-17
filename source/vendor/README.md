# 博客页面依赖

这些文件随 GitHub Pages 一起发布，避免第三方 CDN 不稳定时阻塞页面样式、搜索或菜单。保持原站版本，没有升级依赖。

JavaScript/CSS 来自 npm 官方 registry 的固定版本压缩包；各目录保留原许可证。nprogress 与 github-markdown 使用原包文件，保留主题期望的文件名。来源、版本、压缩包 SHA-256 和文件映射见 manifest.json。

图标沿用 Fluid 主题已有的两个 Iconfont 字体，原始 CSS 和字体来源保存在 manifest.json。自托管只改写字体 URL；保留原始图标定义。

更新后运行 npm run build，构建会检查生成页面的样式、脚本及字体均可在站内找到。

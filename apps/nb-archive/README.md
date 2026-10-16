# NB Archive · GitHub Pages 公开版

这是从 `/Users/kevin/Documents/newbalance 网站` 恢复的独立发布副本，原项目保持不变。界面、公开档案和来源信息沿用原项目。

访问路径：`https://shang-swk.github.io/nb-archive/`。Next.js 静态导出保留档案筛选、对比、图库、时间线和当前浏览器的本地鞋柜；服务器写入功能未发布，也没有复制本机社区、纠错记录或环境文件。

```bash
npm ci
npm run build -- --webpack
```

输出目录为 `out/`。在博客根目录运行 `npm run publish` 会同时构建并发布这个副本。修改原始 New Balance 项目不会自动同步到此副本；发布版的代码和数据在本目录维护。

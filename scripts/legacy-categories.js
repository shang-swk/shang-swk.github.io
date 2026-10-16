/* Keep bookmarks to the original narrow categories working after regrouping. */
const aliases = {
  '前端': '开发技术', 'git': '开发技术', '数据库': '开发技术',
  'Markdown': '开发技术', '正则表达式': '开发技术', '虚拟机': '开发技术',
  'web安全': '网络与安全', 'HTTP': '网络与安全', '密码学': '网络与安全',
  'Modbus': '工业通信', 'RS232': '工业通信', '雅思词汇': '语言学习',
  '雅思词汇/page/2': '语言学习/page/2'
};
hexo.extend.generator.register('legacy-categories', function () {
  return Object.entries(aliases).map(([previous, current]) => {
    const target = `${this.config.url}/categories/${encodeURI(current)}/`;
    return {
      path: `categories/${previous}/index.html`,
      data: `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0; url=${target}"><meta name="robots" content="noindex,follow"><link rel="canonical" href="${target}"><title>专题已更新 - 寻影</title></head><body><p>这个分类已整理到新的阅读专题。</p><a href="${target}">前往${current.split('/')[0]}</a></body></html>`
    };
  });
});

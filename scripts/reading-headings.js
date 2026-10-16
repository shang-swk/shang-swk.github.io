// Keep one page title, while retaining the original section anchor IDs.
hexo.extend.filter.register('after_post_render', function (page) {
  if (page.layout === 'post' && /<h1\b/.test(page.content)) {
    page.content = page.content.replace(/<(\/?)h([1-5])(?=[\s>])/g,
      (_, closing, level) => `<${closing}h${Number(level) + 1}`);
  }
  return page;
});

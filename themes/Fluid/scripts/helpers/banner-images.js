'use strict';

const variants = {
  '/img/1.jpg': ['/img/optimized/home-1920.webp', '/img/optimized/home-960.webp'],
  '/img/2.jpg': ['/img/optimized/post-1920.webp', '/img/optimized/post-960.webp']
};

hexo.extend.helper.register('responsive_banner_images', function(image) {
  return variants[image] || [image, image];
});

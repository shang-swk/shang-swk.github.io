/* global CONFIG */
(function() {
  var progress = window.NProgress;
  if (!progress) return;
  progress.configure(CONFIG.progressbar.options || {});
  progress.start();

  var completed = false;
  var deadline = window.setTimeout(finish, 10000);
  function finish() {
    if (completed) return;
    completed = true;
    window.clearTimeout(deadline);
    progress.done();
  }

  // The page is usable before every image has finished downloading.
  if (document.readyState !== 'loading') {
    finish();
  } else {
    document.addEventListener('DOMContentLoaded', finish, { once: true });
    window.addEventListener('load', finish, { once: true });
  }
  window.addEventListener('pagehide', finish, { once: true });
})();

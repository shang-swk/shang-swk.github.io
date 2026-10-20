const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const script = fs.readFileSync(require('node:path').join(__dirname, '../themes/Fluid/source/js/loading-progress.js'), 'utf8');

function run(readyState = 'loading', available = true) {
  const documentEvents = {};
  const windowEvents = {};
  let deadline;
  let cleared = false;
  let stops = 0;
  const document = { readyState, addEventListener: (name, fn) => { documentEvents[name] = fn; } };
  const window = {
    NProgress: available ? { configure() {}, start() {}, done() { stops++; } } : undefined,
    addEventListener: (name, fn) => { windowEvents[name] = fn; },
    setTimeout(fn, ms) { deadline = { fn, ms }; return 1; },
    clearTimeout() { cleared = true; }
  };
  vm.runInNewContext(script, { window, document, CONFIG: { progressbar: { options: {} } } });
  return { documentEvents, windowEvents, get deadline() { return deadline; }, get cleared() { return cleared; }, get stops() { return stops; } };
}

test('stops when the document is usable, without waiting for images', () => {
  const page = run();
  assert.equal(page.stops, 0);
  page.documentEvents.DOMContentLoaded();
  assert.equal(page.stops, 1);
  assert.equal(page.cleared, true);
  page.windowEvents.load();
  assert.equal(page.stops, 1);
});

test('stops after 10 seconds even if document and image loading stall', () => {
  const page = run();
  assert.equal(page.deadline.ms, 10000);
  page.deadline.fn();
  assert.equal(page.stops, 1);
  page.documentEvents.DOMContentLoaded();
  assert.equal(page.stops, 1);
});

test('does not leave a progress bar on an already usable page', () => {
  assert.equal(run('interactive').stops, 1);
  assert.equal(run('complete').stops, 1);
});

test('clears progress before leaving the page, including browser history navigation', () => {
  const page = run();
  page.windowEvents.pagehide();
  assert.equal(page.stops, 1);
  assert.equal(page.cleared, true);
});

test('a failed progress-library request does not throw another error', () => {
  const page = run('loading', false);
  assert.equal(page.deadline, undefined);
});

#!/usr/bin/env node
// Check the generated pages, including lazy-loaded plugins, before publishing.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../public');
const errors = new Set();
let pages = 0;

function checkVendorCopies(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const source = path.join(dir, entry.name);
    if (entry.isDirectory()) { checkVendorCopies(source); continue; }
    const relative = path.relative(path.resolve(__dirname, '../source'), source);
    const output = path.join(root, relative);
    if (!fs.existsSync(output) || !fs.readFileSync(source).equals(fs.readFileSync(output))) {
      errors.add(`Vendor file was changed or omitted by the renderer: ${relative}`);
    }
  }
}

function checkAsset(url, from) {
  if (/^data:/.test(url)) return;
  if (/^(?:https?:)?\/\//.test(url)) {
    errors.add(`External page dependency: ${url}`);
    return;
  }
  const file = path.resolve(url.startsWith('/') ? root : path.dirname(from), decodeURIComponent(url.replace(/[?#].*$/, '').replace(/^\//, '')));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) {
    errors.add(`Missing asset: ${url} in ${path.relative(root, from)}`);
  }
}

function visit(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'nb-archive') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { visit(file); continue; }
    if (!file.endsWith('.html') && !file.endsWith('.css')) continue;
    const content = fs.readFileSync(file, 'utf8');
    if (file.endsWith('.html')) {
      pages++;
      for (const match of content.matchAll(/<(script|link)\b[^>]*>/gi)) {
        const tag = match[0];
        if (match[1].toLowerCase() === 'link' && !/\brel=["']stylesheet["']/i.test(tag)) continue;
        const url = tag.match(/\b(?:src|href)\s*=\s*(?:["']([^"']+)["']|([^\s>]+))/i);
        if (url) checkAsset(url[1] || url[2], file);
      }
      for (const match of content.matchAll(/Fluid\.utils\.createScript\(["']([^"']+)["']/g)) checkAsset(match[1], file);
    } else if (file.endsWith('.css')) {
      for (const match of content.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) checkAsset(match[1], file);
    }
  }
}

checkVendorCopies(path.resolve(__dirname, '../source/vendor'));
visit(root);
if (errors.size) {
  console.error([...errors].join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Static assets checked: ${pages} blog pages; all styles, scripts and CSS assets are local.`);
}

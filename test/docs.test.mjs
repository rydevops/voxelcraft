// The changelog and the features log stay in step with the code.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const pkg = JSON.parse(read('package.json'));
let n = 0;
const t = (name, fn) => { try { fn(); n++; } catch (e) { e.message = name + ': ' + e.message; throw e; } };

t('CHANGELOG.md has an entry for the current version, newest first', () => {
  const log = read('CHANGELOG.md');
  const versions = [...log.matchAll(/^## \[(\d+\.\d+\.\d+)\]/gm)].map((m) => m[1]);
  assert.ok(versions.length > 0, 'no version headings');
  assert.equal(versions[0], pkg.version, 'the newest changelog entry must be the package.json version');
  const cmp = (a, b) => { const x = a.split('.').map(Number), y = b.split('.').map(Number); for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i]; return 0; };
  for (let i = 1; i < versions.length; i++) assert.ok(cmp(versions[i - 1], versions[i]) > 0, `${versions[i - 1]} should come before ${versions[i]}`);
});

t('FEATURES.md lists the main areas', () => {
  const f = read('FEATURES.md');
  for (const word of ['Touch', 'Install', 'Offline', 'Survival', 'Creative']) assert.ok(new RegExp(word, 'i').test(f), 'missing: ' + word);
});

console.log(`docs: ${n} checks passed`);

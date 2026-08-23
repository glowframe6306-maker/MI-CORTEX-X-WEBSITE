const fs = require('fs');
const path = require('path');
const file = path.resolve(process.argv[2] || 'script.js');
const src = fs.readFileSync(file, 'utf8');
const lines = src.split(/\r?\n/);
function tryLines(n) {
  try {
    new Function(lines.slice(0, n).join('\n'));
    return true;
  } catch (e) {
    return false;
  }
}

// Binary search for the first line that causes parse failure
let low = 1;
let high = lines.length;
let firstFail = null;
while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  if (tryLines(mid)) {
    low = mid + 1;
  } else {
    firstFail = mid;
    high = mid - 1;
  }
}

if (firstFail === null) {
  console.log('No parse errors detected in full file');
} else {
  console.log('First failing line:', firstFail);
  const start = Math.max(1, firstFail - 8);
  const end = Math.min(lines.length, firstFail + 8);
  for (let i = start; i <= end; i++) {
    const mark = i === firstFail ? '>>' : '  ';
    console.log(`${mark} ${i}: ${lines[i-1]}`);
  }

  console.log('\n--- SNIPPET USED FOR PARSING (firstFail lines) ---');
  const snippet = lines.slice(0, firstFail).join('\n');
  console.log(snippet);
  console.log('--- END SNIPPET ---\n');
}

// Also report simple bracket/backtick counts for debugging
const counts = {
  '{': (src.match(/\{/g)||[]).length,
  '}': (src.match(/\}/g)||[]).length,
  '(': (src.match(/\(/g)||[]).length,
  ')': (src.match(/\)/g)||[]).length,
  '[': (src.match(/\[/g)||[]).length,
  ']': (src.match(/\]/g)||[]).length,
  '`': (src.match(/`/g)||[]).length,
  '"': (src.match(/\"/g)||[]).length,
  "'": (src.match(/\'/g)||[]).length,
};
console.log('Bracket counts:', counts);
// Show raw character codes for the failing line for low-level inspection
if (firstFail !== null) {
  const chars = lines[firstFail-1].split('').map((c) => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
  console.log('Failing line char codes (hex):', chars);
}

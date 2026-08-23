const fs = require('fs');
const acorn = require('acorn');
const text = fs.readFileSync('script.js', 'utf8');
let best = 0;
let problemAt = null;
for (let cut = 100; cut <= text.length; cut += 100) {
  const candidate = text.slice(0, cut);
  try {
    acorn.parse(candidate, { ecmaVersion: 'latest' });
    best = cut;
  } catch (err) {
    problemAt = cut;
    console.log('FAIL at cut', cut, 'message', err.message, 'line', err.loc && err.loc.line, 'col', err.loc && err.loc.column);
    console.log('snippet', JSON.stringify(candidate.slice(Math.max(0, cut - 250), cut + 250)));
    break;
  }
}
console.log('best valid prefix length', best);
console.log('problemAt', problemAt);

const fs = require('fs');
const text = fs.readFileSync('script.js', 'utf8');
const stack = [];
let quote = null;
let escape = false;
let i = 0;
while (i < text.length) {
  const ch = text[i];
  if (quote) {
    if (escape) {
      escape = false;
    } else if (ch === '\\') {
      escape = true;
    } else if (ch === quote) {
      quote = null;
    }
    i += 1;
    continue;
  }
  const two = text.slice(i, i + 2);
  if (two === '//') {
    const end = text.indexOf('\n', i + 2);
    i = end === -1 ? text.length : end + 1;
    continue;
  }
  if (two === '/*') {
    const end = text.indexOf('*/', i + 2);
    if (end === -1) {
      console.log('unterminated comment at index', i);
      process.exit(1);
    }
    i = end + 2;
    continue;
  }
  if (ch === '"' || ch === "'" || ch === '`') {
    quote = ch;
    i += 1;
    continue;
  }
  if ('([{'.includes(ch)) {
    stack.push({ ch, i });
  } else if (')]}'.includes(ch)) {
    const last = stack.pop();
    if (!last) {
      console.log('extra closing', ch, 'at', i);
      process.exit(1);
    }
    const pairs = { '(': ')', '[': ']', '{': '}' };
    if (pairs[last.ch] !== ch) {
      console.log('mismatch open', last.ch, 'at', last.i, 'with', ch, 'at', i);
      process.exit(1);
    }
  }
  i += 1;
}
console.log('remaining stack', stack.length);
if (stack.length) {
  console.log(stack.slice(-10));
}

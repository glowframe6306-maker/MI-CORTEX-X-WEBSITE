const fs = require('fs');
const text = fs.readFileSync('script.js', 'utf8');
let best = 0;
let found = false;
for (let cut = text.length; cut > 0; cut -= 50) {
  const candidate = text.slice(0, cut);
  try {
    new Function(candidate);
    best = cut;
    found = true;
    break;
  } catch (err) {
    // keep searching earlier
  }
}
console.log('best', best);
console.log(text.slice(Math.max(0, best - 700), Math.max(0, best + 700)));

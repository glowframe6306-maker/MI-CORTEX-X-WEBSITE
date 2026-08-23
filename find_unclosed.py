from pathlib import Path

def scan(path):
    text = Path(path).read_text(encoding='utf-8')
    stack = []
    quote = None
    escape = False
    i = 0
    while i < len(text):
        ch = text[i]
        if quote:
            if escape:
                escape = False
            elif ch == '\\':
                escape = True
            elif ch == quote:
                quote = None
            i += 1
            continue
        if text.startswith('//', i):
            j = text.find('\n', i + 2)
            if j == -1:
                break
            i = j + 1
            continue
        if text.startswith('/*', i):
            j = text.find('*/', i + 2)
            if j == -1:
                print('Unterminated comment at index', i)
                return
            i = j + 2
            continue
        if ch in "'\"`":
            quote = ch
            i += 1
            continue
        if ch in '([{':
            stack.append((ch, i))
        elif ch in ')]}':
            if not stack:
                print('Extra closing', ch, 'at index', i)
                return
            open_ch, pos = stack.pop()
            pairs = {'(': ')', '[': ']', '{': '}'}
            if pairs.get(open_ch) != ch:
                print('Mismatch: open', open_ch, 'at', pos, 'close', ch, 'at', i)
                return
        i += 1
    print('Stack depth at end:', len(stack))
    if stack:
        print('Remaining openers:', stack[-20:])

scan('script.js')

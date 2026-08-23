import pathlib

text = pathlib.Path('script.js').read_text(encoding='utf-8')
stack = []
pairs = {'(': ')', '[': ']', '{': '}'}
quote = None
escape = False
in_line = False
in_block = False

i = 0
while i < len(text):
    ch = text[i]
    if quote is not None:
        if escape:
            escape = False
        elif ch == '\\':
            escape = True
        elif ch == quote:
            quote = None
        i += 1
        continue
    if in_line:
        if ch == '\n':
            in_line = False
        i += 1
        continue
    if in_block:
        if ch == '*' and i + 1 < len(text) and text[i + 1] == '/':
            in_block = False
            i += 2
        else:
            i += 1
        continue
    if ch == '/' and i + 1 < len(text):
        nxt = text[i + 1]
        if nxt == '/':
            in_line = True
            i += 2
            continue
        if nxt == '*':
            in_block = True
            i += 2
            continue
    if ch in ('"', "'", '`'):
        quote = ch
        i += 1
        continue
    if ch in pairs:
        stack.append((ch, i))
    elif ch in pairs.values():
        if not stack:
            print(f'extra closer {ch} at {i}')
            break
        open_ch, open_i = stack.pop()
        expected = pairs[open_ch]
        if expected != ch:
            print(f'mismatch open {open_ch} at {open_i}, close {ch} at {i}')
            break
    i += 1
else:
    if stack:
        print('UNMATCHED')
        for ch, idx in stack[-20:]:
            print(ch, idx)
        print('count', len(stack))
    else:
        print('balanced')

from pathlib import Path
text = Path(r'c:\Users\Administrator\MI-CORTEX-X-WEBSITE\script.js').read_text(encoding='utf-8')
stack = []
state = 'code'
escape = False
for i, ch in enumerate(text):
    if state == 'code':
        if ch == '/' and i + 1 < len(text) and text[i + 1] == '/':
            state = 'line_comment'
            continue
        if ch == '/' and i + 1 < len(text) and text[i + 1] == '*':
            state = 'block_comment'
            continue
        if ch in ('"', "'", '`'):
            state = ch
            continue
        if ch in '([{':
            stack.append((ch, i))
            continue
        if ch in ')]}':
            if not stack:
                print(f'extra close {ch} at {i}')
                raise SystemExit
            last, pos = stack.pop()
            pairs = {'(': ')', '[': ']', '{': '}'}
            if pairs[last] != ch:
                print(f'mismatch {last} at {pos} close {ch} at {i}')
                raise SystemExit
    elif state == 'line_comment':
        if ch == '\n':
            state = 'code'
    elif state == 'block_comment':
        if ch == '*' and i + 1 < len(text) and text[i + 1] == '/':
            state = 'code'
    elif state in ('"', "'", '`'):
        if escape:
            escape = False
            continue
        if ch == '\\':
            escape = True
            continue
        if ch == state:
            state = 'code'

if stack:
    print('unclosed', stack[-20:])
else:
    print('balanced')

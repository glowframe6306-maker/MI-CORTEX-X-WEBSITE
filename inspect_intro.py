from pathlib import Path
p = Path('index.html')
lines = p.read_text(encoding='utf-8').splitlines()
for start, end in [(320, 430), (330, 430)]:
    print(f'--- lines {start}-{end} ---')
    for i in range(start - 1, min(end, len(lines))):
        print(f'{i + 1}: {lines[i]}')
    print()

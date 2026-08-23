from pathlib import Path
import subprocess, tempfile, os, sys
text = Path('script.js').read_text(encoding='utf-8')
# Find the latest prefix that still parses successfully.
for cut in range(len(text), 0, -1):
    prefix = text[:cut]
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as f:
        f.write(prefix)
        tmp = f.name
    try:
        p = subprocess.run(['node', '--check', tmp], capture_output=True, text=True)
        if p.returncode == 0:
            print('PARSABLE_PREFIX', cut)
            print('Last 200 chars:')
            print(prefix[-200:])
            os.unlink(tmp)
            raise SystemExit
        # if parse failed can still show some clue; print only around interesting cuts.
        if cut in (len(text), len(text)-1000, len(text)-5000, len(text)-10000, len(text)-20000, len(text)-50000):
            print('FAIL', cut, p.stderr.strip().splitlines()[:3])
    except Exception as e:
        print('ERR', cut, e)
    finally:
        if os.path.exists(tmp):
            os.unlink(tmp)
print('NO_PARSEABLE_PREFIX_FOUND')

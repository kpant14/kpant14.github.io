import re
import os

src_dir = os.path.join(os.path.dirname(__file__), 'src')

with open(os.path.join(src_dir, '_shell.html'), encoding='utf-8') as f:
    shell = f.read()

def replace_include(match):
    rel_path = match.group(1).strip()
    full_path = os.path.join(src_dir, rel_path)
    if not os.path.exists(full_path):
        raise FileNotFoundError(f'Missing include: {full_path}')
    with open(full_path, encoding='utf-8') as f:
        return f.read()

result = re.sub(r'<!-- include: (.+?) -->', replace_include, shell)

out = os.path.join(os.path.dirname(__file__), 'index.html')
with open(out, 'w', encoding='utf-8') as f:
    f.write(result)

print('Built index.html')

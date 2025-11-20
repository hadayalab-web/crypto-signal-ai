import json
import re

# workflow.json 読み込み
with open('workflow.json', 'r', encoding='utf-8') as f:
    workflow = json.load(f)

# Block 2b を検索して修正
for block in workflow.get('blocks', []):
    if block.get('name') == 'Block 2b: AI Multi-Dimensional Analysis':
        block['code'] = """$($block2bFix)"""
        print("✅ Block 2b updated")
        break

# 保存
with open('workflow.json', 'w', encoding='utf-8') as f:
    json.dump(workflow, f, indent=2, ensure_ascii=False)

print("✅ workflow.json updated successfully")

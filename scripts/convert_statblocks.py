import os
import re
from pathlib import Path

def convert_statblock_to_html(statblock):
    # Extract monster name and properties
    lines = statblock.strip().split('\n')
    monster_name = lines[0].split(': ')[1].strip()
    properties = {}
    for line in lines[1:]:
        key, value = line.split(': ', 1)
        properties[key.strip()] = value.strip()
    
    # Generate HTML
    html = f'''
    <div class="statblock">
        <h2>{monster_name}</h2>
        <p><strong>AC</strong>: {properties.get("AC", "—")}</p>
        <p><strong>HP</strong>: {properties.get("HP", "—")}</p>
        <p><strong>Speed</strong>: {properties.get("Speed", "—")}</p>
        <p><strong>STR</strong>: {properties.get("STR", "—")} | <strong>DEX</strong>: {properties.get("DEX", "—")} | <strong>CON</strong>: {properties.get("CON", "—")}</p>
        <p><strong>INT</strong>: {properties.get("INT", "—")} | <strong>WIS</strong>: {properties.get("WIS", "—")} | <strong>CHA</strong>: {properties.get("CHA", "—")}</p>
        <p><strong>Skills</strong>: {properties.get("Skills", "—")}</p>
        <p><strong>Senses</strong>: {properties.get("Senses", "—")}</p>
        <p><strong>Languages</strong>: {properties.get("Languages", "—")}</p>
        <p><strong>Challenge</strong>: {properties.get("Challenge", "—")}</p>
    </div>
    '''
    return html

def process_md_files(content_dir):
    for root, _, files in os.walk(content_dir):
        for file in files:
            if file.endswith('.md'):
                filepath = Path(root) / file
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace ```statblock code blocks with HTML
                new_content = re.sub(
                    r'```statblock\n([\s\S]*?)```',
                    lambda m: convert_statblock_to_html(m.group(1)),
                    content
                )
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

# Run the script on your Quartz content folder
process_md_files('path/to/quartz/content')
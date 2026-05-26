#!/bin/bash

# Extract markdown file paths from llms.txt, handle line prefixes like "- [" and brackets/parentheses correctly
files=$(grep "\.md)" llms.txt | grep -oP '(?<=\()[^\)]+\.md(?=\))')

echo "# Jane - Full Documentation" > llms-full.txt
echo "" >> llms-full.txt
echo "This file contains the concatenated text of the core architectural, policy, and design documents for the Jane Developmental AI Companion project. It is intended for deep context ingestion by Large Language Models." >> llms-full.txt
echo "" >> llms-full.txt

for file in $files; do
    echo "## File: $file" >> llms-full.txt
    echo "" >> llms-full.txt
    if [ -f "$file" ]; then
        cat "$file" >> llms-full.txt
    else
        echo "Warning: File $file not found!" >&2
    fi
    echo "" >> llms-full.txt
    echo "" >> llms-full.txt
done

echo "llms-full.txt generated successfully."

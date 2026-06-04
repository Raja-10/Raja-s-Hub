#!/usr/bin/env bash

set -e

echo "Generating AI export files..."

tree \
-I 'node_modules|.next|.git|dist|build|coverage|.turbo' \
-L 10 \
> structure.txt

{
    echo "===== PACKAGE.JSON ====="
    cat package.json 2>/dev/null || true

    echo
    echo "===== TSCONFIG ====="
    cat tsconfig.json 2>/dev/null || true

    echo
    echo "===== NEXT CONFIG ====="
    cat next.config.js 2>/dev/null || true

    echo
    echo "===== TAILWIND CONFIG ====="
    cat tailwind.config.ts 2>/dev/null || true

    echo
    echo "===== POSTCSS CONFIG ====="
    cat postcss.config.js 2>/dev/null || true

} > configs.txt

{
    find src \
        \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.css" \) \
        | sort \
        | while read file
    do
        echo
        echo "===== FILE: $file ====="
        cat "$file"
        echo
    done
} > src_dump.txt

{
    git status 2>/dev/null || true

    echo
    echo "===== LAST 10 COMMITS ====="

    git log --oneline -10 2>/dev/null || true

} > git_status.txt

find . \
-type f \
-not -path "./node_modules/*" \
-not -path "./.next/*" \
-not -path "./.git/*" \
| sort \
> file_list.txt

echo "Done."
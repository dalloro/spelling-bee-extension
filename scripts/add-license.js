const fs = require('fs');
const path = require('path');

const LICENSE_TEXT = `MIT License
Copyright (c) 2025 Livio Dalloro
See LICENSE file for details.`;

const HEADERS = {
    js: `// ${LICENSE_TEXT.split('\n').join('\n// ')}\n\n`,
    css: `/*\n${LICENSE_TEXT}\n*/\n\n`,
    html: `<!--\n${LICENSE_TEXT}\n-->\n`
};

const EXCLUDE_DIRS = ['node_modules', 'dist', '.git', '.github'];

function getFiles(dir, allFiles = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (EXCLUDE_DIRS.includes(file)) continue;
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, allFiles);
        } else {
            const ext = path.extname(name).slice(1);
            if (['js', 'css', 'html'].includes(ext)) {
                allFiles.push(name);
            }
        }
    }
    return allFiles;
}

function addLicense(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath).slice(1);
    const header = HEADERS[ext];

    if (content.includes('MIT License') && content.includes('Livio Dalloro')) {
        console.log(`skipping ${filePath} (already has license)`);
        return;
    }

    let newContent = content;

    // For JS files with hashbang, insert after it
    if (ext === 'js' && content.startsWith('#!')) {
        const lines = content.split('\n');
        lines.splice(1, 0, header.trimEnd());
        newContent = lines.join('\n');
    } else {
        newContent = header + content;
    }

    fs.writeFileSync(filePath, newContent);
    console.log(`updated ${filePath}`);
}

const root = path.join(__dirname, '..');
const files = getFiles(root);
files.forEach(addLicense);
console.log('Done!');

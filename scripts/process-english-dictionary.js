#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Paths
const WORDNET_DIR = path.join(__dirname, '../lang/en/WordNet/dbfiles');
const FREQ_FILE = path.join(__dirname, '../lang/en/OpenSubtitles-freqs/en_full.txt');
const OUTPUT_ENRICHED = path.join(__dirname, '../lang/en/words_enriched.js');
const OUTPUT_WORDS = path.join(__dirname, '../lang/en/words.js');

// Config
const MIN_LENGTH = 4;
const MAX_RANK = 30000;

function parseWordNet() {
    console.log('Parsing WordNet data...');
    const lemmaMap = new Map();
    const files = fs.readdirSync(WORDNET_DIR);
    for (const file of files) {
        if (file.startsWith('.')) continue;
        let pos = 'other';
        if (file.startsWith('noun.')) pos = 'noun';
        else if (file.startsWith('verb.')) pos = 'verb';
        else if (file.startsWith('adj.')) pos = 'adj';
        else if (file.startsWith('adv.')) pos = 'adv';

        const content = fs.readFileSync(path.join(WORDNET_DIR, file), 'utf8');
        const synsetRegex = /\{([^{}]+)\}/g;
        let match;
        while ((match = synsetRegex.exec(content))) {
            const raw = match[1];
            const defMatch = raw.match(/\(([^()]+)\)/);
            if (!defMatch) continue;
            const definition = defMatch[1].trim();
            const wordsPart = raw.replace(/\([^()]+\)/g, "");
            const rawWords = wordsPart.split(",").map(w => w.trim().split(/\s+/)[0]);

            for (let word of rawWords) {
                word = word.replace(/\d+$/, '').replace(/\[|\]/g, "");
                if (word.length < MIN_LENGTH) continue;
                if (word.includes('_') || word.includes('-')) continue;
                if (/^[A-Z]/.test(word)) continue;

                if (!lemmaMap.has(word)) {
                    lemmaMap.set(word, { def: definition, pos: new Set([pos]) });
                } else {
                    lemmaMap.get(word).pos.add(pos);
                }
            }
        }
    }
    return lemmaMap;
}

function loadFrequencies() {
    console.log('Loading frequencies...');
    const freqs = new Map();
    const content = fs.readFileSync(FREQ_FILE, 'utf8');
    const lines = content.split('\n');
    let rank = 1;
    for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        if (parts.length < 2) continue;
        const word = parts[0].toLowerCase();
        if (!freqs.has(word)) {
            freqs.set(word, rank++);
        }
    }
    return freqs;
}

function getRoot(word) {
    if (word.endsWith('ies')) return word.slice(0, -3) + 'y';
    if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
    if (word.endsWith('ed')) {
        if (word.endsWith('ied')) return word.slice(0, -3) + 'y';
        return word.slice(0, -2);
    }
    if (word.endsWith('ing')) return word.slice(0, -3);
    return word;
}

function processDictionary() {
    const lemmaMap = parseWordNet();
    const freqs = loadFrequencies();
    const enriched = {};
    const wordsInFreqs = Array.from(freqs.keys());

    console.log('Merging data...');
    for (const word of wordsInFreqs) {
        const rank = freqs.get(word);
        if (rank > MAX_RANK) break;
        if (word.length < MIN_LENGTH || !/^[a-z]+$/.test(word)) continue;

        if (lemmaMap.has(word)) {
            const entry = lemmaMap.get(word);
            enriched[word] = { def: entry.def, rank: rank, pos: Array.from(entry.pos) };
            continue;
        }

        const roots = [getRoot(word), word.slice(0, -1), word.slice(0, -2), word.slice(0, -3) + 'e'];
        for (const root of roots) {
            if (lemmaMap.has(root)) {
                const entry = lemmaMap.get(root);
                enriched[word] = {
                    def: `Form of: ${root}. ${entry.def}`,
                    rank: rank,
                    pos: Array.from(entry.pos),
                    isInflection: true
                };
                break;
            }
        }
    }

    const sortedWords = Object.keys(enriched).sort();

    // Output Enriched (with metadata)
    const enrichedContent = `// Enriched English Dictionary (Metadata)
const ENRICHED_WORDS = ${JSON.stringify(enriched, null, 2)};
if (typeof module !== 'undefined' && module.exports) { module.exports = { ENRICHED_WORDS }; }`;
    fs.writeFileSync(OUTPUT_ENRICHED, enrichedContent);

    // Output Words (simple Set for extension validation)
    const wordsContent = `// Valid English Words Set
const VALID_WORDS = new Set(${JSON.stringify(sortedWords, null, 2)});
if (typeof module !== 'undefined' && module.exports) { module.exports = { VALID_WORDS }; }`;
    fs.writeFileSync(OUTPUT_WORDS, wordsContent);

    console.log(`Saved ${sortedWords.length} words.`);
}

processDictionary();

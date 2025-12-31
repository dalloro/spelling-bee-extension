#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Load the Italian LEMMA dictionary
const WORDS_FILE = path.join(__dirname, '../lang/it/words_it_lemmas.js');
const OUTPUT_FILE = path.join(__dirname, '../lang/it/puzzles_it.js');

// Config
const MIN_WORD_LENGTH = 4;
const PUZZLE_LETTER_COUNT = 7;
const TARGET_PUZZLE_COUNT = 1000;
const MIN_WORDS = 30;
const MAX_WORDS = 80;
const MIN_PANGRAMS_PER_PUZZLE = 1;

function loadWords() {
    console.log('Loading Italian LEMMA dictionary...');
    if (!fs.existsSync(WORDS_FILE)) {
        throw new Error(`Words file not found: ${WORDS_FILE}.`);
    }
    const { VALID_WORDS_IT } = require(WORDS_FILE);
    return Array.from(VALID_WORDS_IT);
}

function getUniqueLetters(word) {
    return Array.from(new Set(word.toLowerCase().split(''))).sort().join('');
}

function calculateScore(words) {
    let score = 0;
    words.forEach(w => {
        score += w.length === 4 ? 1 : w.length;
        if (new Set(w).size === 7) score += 7;
    });
    return score;
}

function getPuzzleSignature(letters) {
    return letters.slice().sort().join('');
}

function findValidWordsForLetters(centerLetter, allLetters, words) {
    const letterSet = new Set(allLetters);
    return words.filter(word => {
        if (word.length < MIN_WORD_LENGTH) return false;
        if (!word.includes(centerLetter)) return false;
        for (const char of word) {
            if (!letterSet.has(char)) return false;
        }
        return true;
    });
}

function generatePuzzles() {
    const words = loadWords();
    const pangrams = words.filter(w => new Set(w).size === 7);
    const uniquePangramSets = new Set(pangrams.map(w => getUniqueLetters(w)));

    console.log(`Found ${uniquePangramSets.size} unique pangram sets.`);

    const candidates = [];
    let processed = 0;

    for (const letterCombo of uniquePangramSets) {
        processed++;
        if (processed % 100 === 0) console.log(`Processed ${processed}/${uniquePangramSets.size}...`);

        const letters = letterCombo.split('');
        for (const centerLetter of letters) {
            const allLetters = [centerLetter, ...letters.filter(l => l !== centerLetter)];
            const validWords = findValidWordsForLetters(centerLetter, allLetters, words);

            const count = validWords.length;
            const qbScore = calculateScore(validWords);
            const pangramCount = validWords.filter(w => new Set(w).size === 7).length;

            if (count >= MIN_WORDS && count <= MAX_WORDS && pangramCount >= MIN_PANGRAMS_PER_PUZZLE) {
                candidates.push({
                    letters: allLetters,
                    words: validWords.sort(),
                    qbScore: qbScore,
                    diff: Math.abs(qbScore - 250)
                });
            }
        }
    }

    console.log(`Generated ${candidates.length} candidates. Selecting best ${TARGET_PUZZLE_COUNT}...`);
    candidates.sort((a, b) => a.diff - b.diff);

    const picked = candidates.slice(0, TARGET_PUZZLE_COUNT);
    const finalPuzzles = {};
    picked.forEach((p, idx) => {
        finalPuzzles[idx] = {
            letters: p.letters,
            words: p.words,
            maxScore: p.qbScore
        };
    });

    const output = `// Pre-computed Italian Puzzles (Lemmas)
// Average QB Score Target: 250
const PUZZLES_IT = ${JSON.stringify(finalPuzzles, null, 2)};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PUZZLES_IT };
}
`;

    fs.writeFileSync(OUTPUT_FILE, output);
    const avgScore = picked.reduce((a, b) => a + b.qbScore, 0) / picked.length;
    console.log(`Generated ${picked.length} puzzles. Avg Score: ${avgScore.toFixed(1)}`);
}

generatePuzzles();

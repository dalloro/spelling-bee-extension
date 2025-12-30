#!/usr/bin/env node
// MIT License
// Copyright (c) 2025 Livio Dalloro
// See LICENSE file for details.

/**
 * Script to generate pre-computed Italian puzzles
 * Uses LEMMA-BASED dictionary (Morph-it + CoLFIS)
 * STRICT RULE: Only accepts puzzles with 20-45 words.
 */

const fs = require('fs');
const path = require('path');

// Load the Italian LEMMA dictionary
const WORDS_FILE = path.join(__dirname, '../lang/it/words_it_lemmas.js');
const OUTPUT_FILE = path.join(__dirname, '../lang/it/puzzles_it.js');

// Config
const MIN_WORD_LENGTH = 4;
const PUZZLE_LETTER_COUNT = 7;
const TARGET_PUZZLE_COUNT = 1000;
const MIN_WORDS = 30; // New limit requested by user
const MAX_WORDS = 60; // New limit requested by user
const MIN_PANGRAMS_PER_PUZZLE = 1;

function loadWords() {
    console.log('Loading Italian LEMMA dictionary...');
    if (!fs.existsSync(WORDS_FILE)) {
        throw new Error(`Words file not found: ${WORDS_FILE}. Run "npm run generate:dictionary:it:lemmas" first.`);
    }
    const content = fs.readFileSync(WORDS_FILE, 'utf-8');
    const match = content.match(/new Set\((\[[\s\S]*?\])\)/);
    if (!match) throw new Error('Could not parse words file');

    const words = JSON.parse(match[1]);
    console.log(`Loaded ${words.length} lemmas`);
    return words;
}

function getPuzzleSignature(letters) {
    const center = letters[0];
    const others = letters.slice(1).sort().join('');
    return `${center}:${others}`;
}

function getUniqueLetters(word) {
    return new Set(word.toLowerCase().split(''));
}

function calculateScore(words) {
    let score = 0;
    for (const word of words) {
        if (word.length === 4) score += 1;
        else score += word.length;

        if (getUniqueLetters(word).size === 7) score += 7; // Pangram bonus
    }
    return score;
}

function findValidWordsForLetters(centerLetter, allLetters, allWords) {
    const letterSet = new Set(allLetters);
    const validWords = [];

    for (const word of allWords) {
        if (word.length < MIN_WORD_LENGTH) continue;
        if (!word.includes(centerLetter)) continue;

        let valid = true;
        for (const char of word) {
            if (!letterSet.has(char)) {
                valid = false;
                break;
            }
        }
        if (valid) validWords.push(word);
    }
    return validWords;
}

function countPangrams(words) {
    let count = 0;
    for (const word of words) {
        if (getUniqueLetters(word).size === PUZZLE_LETTER_COUNT) count++;
    }
    return count;
}

function generatePuzzles(words) {
    console.log('Finding candidate puzzles...');

    // Group by unique letters to find potential pangrams
    const letterCombinations = new Map();
    for (const word of words) {
        const unique = getUniqueLetters(word);
        if (unique.size === PUZZLE_LETTER_COUNT) {
            const letters = Array.from(unique).sort().join('');
            if (!letterCombinations.has(letters)) letterCombinations.set(letters, []);
            letterCombinations.get(letters).push(word);
        }
    }
    console.log(`Found ${letterCombinations.size} pangram bases.`);

    const puzzles = {};
    let generatedCount = 0;
    const combinations = Array.from(letterCombinations.keys());

    // Shuffle
    for (let i = combinations.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combinations[i], combinations[j]] = [combinations[j], combinations[i]];
    }

    const createdSignatures = new Set();

    for (const letterCombo of combinations) {
        if (generatedCount >= TARGET_PUZZLE_COUNT) break;

        const letters = letterCombo.split('');

        // Try every letter as center
        for (const centerLetter of letters) {
            const allLetters = [centerLetter, ...letters.filter(l => l !== centerLetter)];
            const signature = getPuzzleSignature(allLetters);

            if (createdSignatures.has(signature)) continue;

            const validWords = findValidWordsForLetters(centerLetter, allLetters, words);
            const count = validWords.length;
            const pangrams = countPangrams(validWords);

            // STRICT ACCEPTANCE WINDOW
            if (count >= MIN_WORDS && count <= MAX_WORDS && pangrams >= MIN_PANGRAMS_PER_PUZZLE) {

                const id = generatedCount.toString();
                const maxScore = calculateScore(validWords);

                puzzles[id] = {
                    letters: allLetters,
                    words: validWords, // Already sorted/filtered by virtue of input dictionary being sorted? No, we should sort.
                    maxScore: maxScore
                };

                // Sort words for the puzzle output
                puzzles[id].words.sort();

                createdSignatures.add(signature);
                generatedCount++;

                if (generatedCount % 100 === 0) console.log(`Generated ${generatedCount} puzzles...`);
                if (generatedCount >= TARGET_PUZZLE_COUNT) break;
            }
        }
    }

    return puzzles;
}

function main() {
    console.log('=== Italian Puzzle Generator (Lemma Mode) ===\n');
    const words = loadWords();

    console.log('Generating fresh puzzles...');
    const puzzles = generatePuzzles(words);

    const jsContent = `// Italian Puzzles for Spelling Bee
// Generated from Lemma Dictionary
// Rule: ${MIN_WORDS}-${MAX_WORDS} words per puzzle
// Total Puzzles: ${Object.keys(puzzles).length}

const PUZZLES_IT = ${JSON.stringify(puzzles, null, 2)};

// Export for both browser and Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PUZZLES_IT };
}
`;

    fs.writeFileSync(OUTPUT_FILE, jsContent);
    console.log(`\nGenerated: ${OUTPUT_FILE}`);
    console.log(`Total Puzzles: ${Object.keys(puzzles).length}`);
}

main();

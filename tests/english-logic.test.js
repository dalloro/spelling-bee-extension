import fs from 'fs';
import path from 'path';
import { describe, test, expect, beforeAll } from 'vitest';

describe('English Puzzle Quality', () => {
    let puzzles;
    let words;

    beforeAll(() => {
        // Load Puzzles
        const puzzlesPath = path.join(__dirname, '../lang/en/puzzles.js');
        const puzzlesContent = fs.readFileSync(puzzlesPath, 'utf-8');
        const puzzlesMatch = puzzlesContent.match(/const PUZZLES = (\{[\s\S]*?\});/);
        puzzles = JSON.parse(puzzlesMatch[1]);

        // Load Dictionary
        const wordsPath = path.join(__dirname, '../lang/en/words.js');
        const wordsContent = fs.readFileSync(wordsPath, 'utf-8');
        const wordsMatch = wordsContent.match(/const VALID_WORDS = new Set\((\[[\s\S]*?\])\)/);
        words = new Set(JSON.parse(wordsMatch[1]));
    });

    test('All puzzles should have between 30 and 80 words', () => {
        const ids = Object.keys(puzzles);
        expect(ids.length).toBeGreaterThan(0);

        ids.forEach(id => {
            const p = puzzles[id];
            expect(p.words.length).toBeGreaterThanOrEqual(30);
            expect(p.words.length).toBeLessThanOrEqual(80);
        });
    });

    test('All puzzles should contain at least one pangram', () => {
        Object.values(puzzles).forEach(p => {
            const pangrams = p.words.filter(w => new Set(w.split('')).size === 7);
            expect(pangrams.length).toBeGreaterThanOrEqual(1);
        });
    });

    test('Average Queen Bee score should be around 250', () => {
        const scores = Object.values(puzzles).map(p => p.maxScore);
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

        // Allow some tolerance (e.g., 240-260)
        expect(avg).toBeGreaterThan(240);
        expect(avg).toBeLessThan(260);
    });

    test('Every word in the puzzle should be in the VALID_WORDS dictionary', () => {
        Object.values(puzzles).forEach(p => {
            p.words.forEach(w => {
                expect(words.has(w)).toBe(true);
            });
        });
    });
});

# Spelling Bee Chrome Extension

A clean, modern Chrome extension for playing the Spelling Bee word game. Features a random puzzle generator and official NYT Daily puzzle integration.

## Features
- **NYT Daily Integration**: Play the official daily puzzle fetched directly from NYT.
- **Random Puzzle Mode**: Generate a new puzzle anytime.
- **Progress Tracking**: Real-time scoring and ranking system (Beginner to Queen Bee).
- **Responsive Design**: Beautiful hexagonal grid UI with dark mode.
- **Comprehensive Dictionary**: Augmented word list for precise validation.

## Development & Distribution

### Distribution
To create a zip file for distribution (e.g., for the Chrome Web Store), run:
```bash
npm run zip
```
This will generate `spelling-bee-extension.zip` in the root directory, containing only the necessary files for the extension to run.

### Local Installation
1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (top right).
3. Click **Load unpacked**.
4. Select this project directory.

## File Structure
- `manifest.json`: Extension configuration.
- `popup.html`: Main game interface.
- `popup.js`: Game logic and NYT scraping.
- `popup.css`: Visual styling.
- `words.js`: Word validation dictionary.
- `puzzles.js`: Precomputed puzzle sets.
- `icons/`: Extension icons.

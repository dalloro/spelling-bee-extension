// Game Constants
const LEVELS = [
  { name: 'Beginner', pct: 0 },
  { name: 'Good Start', pct: 0.02 },
  { name: 'Moving Up', pct: 0.05 },
  { name: 'Good', pct: 0.08 },
  { name: 'Solid', pct: 0.15 },
  { name: 'Nice', pct: 0.25 },
  { name: 'Great', pct: 0.40 },
  { name: 'Amazing', pct: 0.50 },
  { name: 'Genius', pct: 0.70 },
  { name: 'Queen Bee', pct: 1.0 }
];

// State
let state = {
  puzzleId: null,
  foundWords: [],
  score: 0,
  currentInput: '',
  puzzle: null
};

// DOM Elements
const els = {
  input: document.getElementById('input-text'),
  cursor: document.querySelector('.cursor'),
  score: document.getElementById('score'),
  levelText: document.getElementById('current-level'),
  messageArea: document.getElementById('message-area'),
  wordsList: document.getElementById('words-list'),
  foundCount: document.getElementById('found-count'),
  toggleWordsBtn: document.getElementById('toggle-words-btn'),
  deleteBtn: document.getElementById('delete-btn'),
  enterBtn: document.getElementById('enter-btn'),
  shuffleBtn: document.getElementById('shuffle-btn'),
  dotsContainer: document.querySelector('.dots-container'),
  cells: {
    center: document.getElementById('cell-center'),
    outer: [
      document.getElementById('cell-1'),
      document.getElementById('cell-2'),
      document.getElementById('cell-3'),
      document.getElementById('cell-4'),
      document.getElementById('cell-5'),
      document.getElementById('cell-6')
    ]
  }
};

document.addEventListener('DOMContentLoaded', initGame);

async function initGame() {
  await loadState();
  if (!state.puzzle) {
    selectDailyPuzzle();
  }

  renderPuzzle();
  updateScoreUI();
  renderFoundWords();
  setupEventListeners();

  // Input focus simulation
  document.addEventListener('keydown', handleKeydown);
}

// Game selection logic
function selectDailyPuzzle() {
  const today = new Date();
  const index = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % Object.keys(PUZZLES).length;
  loadPuzzle(index);
}

function selectRandomPuzzle() {
  const index = Math.floor(Math.random() * Object.keys(PUZZLES).length);
  loadPuzzle(index);
}

function loadPuzzle(index) {
  const puzzle = PUZZLES[index] || PUZZLES["0"];
  state.puzzleId = index;
  state.puzzle = puzzle;
  state.foundWords = [];
  state.score = 0;
  state.currentInput = '';

  saveState();
  renderPuzzle();
  updateScoreUI();
  renderFoundWords();
}

function saveState() {
  chrome.storage.local.set({ 'sb_state': state });
}

async function loadState() {
  return new Promise(resolve => {
    chrome.storage.local.get(['sb_state'], (result) => {
      if (result.sb_state) {
        state = result.sb_state;
      }
      resolve();
    });
  });
}

function renderPuzzle() {
  const p = state.puzzle;
  if (!p) return;
  els.cells.center.textContent = p.letters[0].toUpperCase();
  els.cells.center.dataset.letter = p.letters[0];
  updateOuterLetters();
}

function updateOuterLetters() {
  const p = state.puzzle;
  const outerLetters = p.letters.slice(1);
  els.cells.outer.forEach((cell, i) => {
    cell.textContent = outerLetters[i].toUpperCase();
    cell.dataset.letter = outerLetters[i];
  });
}

function shuffleLetters() {
  const p = state.puzzle;
  if (!p) return;
  let outer = p.letters.slice(1);

  for (let i = outer.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [outer[i], outer[j]] = [outer[j], outer[i]];
  }

  els.cells.outer.forEach((cell, i) => {
    cell.textContent = outer[i].toUpperCase();
    cell.dataset.letter = outer[i];
    cell.style.transition = 'none';
    cell.style.transform = 'scale(0.8)';
    setTimeout(() => {
      cell.style.transition = 'transform 0.2s';
      cell.style.transform = 'scale(1)';
    }, 50);
  });
}

function updateInputUI() {
  els.input.innerText = state.currentInput;
  els.cursor.style.display = 'block';
}

function handleInput(letter) {
  if (state.currentInput.length < 20) {
    state.currentInput += letter.toLowerCase();
    updateInputUI();
  }
}

function handleDelete() {
  state.currentInput = state.currentInput.slice(0, -1);
  updateInputUI();
}

function handleEnter() {
  const word = state.currentInput.toLowerCase();
  if (word.length === 0) return;

  const result = validateWord(word);
  if (result.valid) {
    addWord(word, result.score, result.isPangram);
    showMessage(result.isPangram ? "Pangram! +" + result.score : "Nice! +" + result.score, 1500);
  } else {
    shakeInput();
    showMessage(result.error, 1000);
  }

  // Clear input with 0.5s delay (user request)
  setTimeout(() => {
    state.currentInput = '';
    updateInputUI();
  }, 500);
}

async function loadNYTDailyPuzzle() {
  showMessage("Fetching NYT Daily...", 2000);
  try {
    const response = await fetch('https://nytbee.com/');
    if (!response.ok) throw new Error("Failed to fetch");
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // 1. Try to find the word list first as it's the most reliable source for letters too
    // NYTbee often has links like <a id="link-definition-word" ...>
    let wordList = Array.from(doc.querySelectorAll('a[id^="link-definition-"]'))
      .map(a => a.id.replace('link-definition-', '').toLowerCase())
      .filter(w => w.length >= 4);

    // Alternative word list selectors
    if (wordList.length === 0) {
      wordList = Array.from(doc.querySelectorAll('#main-answer-list .flex-list-item, #all-answers li, .answer-list li'))
        .map(li => li.textContent.trim().toLowerCase())
        .filter(w => w.length >= 4);
    }

    // 2. Extract letters
    let letters = [];

    // Method A: Bokeh Plot data (most reliable recent format)
    // Look for ["P","A","G","I","N","R","W"] or ["P", "A", "G", "I", "N", "R", "W"]
    const scriptText = Array.from(doc.querySelectorAll('script')).map(s => s.textContent).join(' ');
    // Improved regex to find the 7-letter array and extract all letters
    const bokehMatch = scriptText.match(/\[\s*"([A-Z])"(?:\s*,\s*"([A-Z])"){6}\s*\]/i);
    if (bokehMatch) {
      // Re-extract using global match to get all 7
      const allLettersMatch = bokehMatch[0].match(/[A-Z]/gi);
      if (allLettersMatch && allLettersMatch.length === 7) {
        letters = allLettersMatch.map(l => l.toUpperCase());
      }
    }

    // Method B: Try to extract from Page Title (often contains letters like "P (A G I N R W)")
    if (letters.length < 7) {
      const titleMatch = doc.title.match(/([A-Z])\s*\(\s*([A-Z\s]+)\s*\)/i);
      if (titleMatch) {
        const centerLetter = titleMatch[1].toUpperCase();
        const outerLetters = titleMatch[2].match(/[A-Z]/gi).map(l => l.toUpperCase());
        letters = [centerLetter, ...outerLetters];
      }
    }

    // Method C: Fallback to old selectors
    if (letters.length < 7) {
      const lettersText = doc.querySelector('#today-letters')?.textContent.trim().toUpperCase() ||
        doc.querySelector('.pangram')?.textContent.trim().toUpperCase();
      letters = lettersText ? lettersText.match(/[A-Z]/g) : [];
    }

    // Method D: Infer from word list if we have words but no letters
    if (letters.length < 7 && wordList.length > 0) {
      const allChars = new Set(wordList.join('').toUpperCase().split(''));
      if (allChars.size === 7) {
        letters = Array.from(allChars);
      }
    }

    if (letters.length < 7) {
      throw new Error("Could not find letters on page");
    }

    // 3. Determine Center Letter
    // If we have less than 7 words, finding the letter common to ALL might be risky.
    // If Method A or B worked, the first letter is the center.
    let center = letters[0];

    // Cross-reference with word list if we have enough words
    if (wordList.length > 3) {
      const common = letters.filter(l => wordList.every(w => w.toUpperCase().includes(l)));
      if (common.length === 1) {
        center = common[0];
      } else if (common.length > 1) {
        // If multiple are common, keep the one we currently think is center if it's in the common list
        if (common.includes(center)) {
          // Stay with current center
        } else {
          center = common[0]; // fallback to first common
        }
      }
    }

    const outer = letters.filter(l => l !== center);

    if (wordList.length === 0) {
      throw new Error("Could not find word list on page");
    }

    const uniqueWords = Array.from(new Set(wordList)).sort();

    // Calculate max score
    let maxScore = 0;
    uniqueWords.forEach(w => {
      let score = (w.length === 4) ? 1 : w.length;
      if (new Set(w).size === 7) score += 7;
      maxScore += score;
    });

    // Update state
    state.puzzleId = "nyt-" + new Date().toISOString().split('T')[0];
    state.puzzle = {
      letters: [center, ...outer].map(l => l.toLowerCase()),
      words: uniqueWords.map(w => w.toLowerCase()),
      maxScore: maxScore
    };
    state.foundWords = [];
    state.score = 0;
    state.currentInput = '';

    saveState();
    renderPuzzle();
    updateScoreUI();
    renderFoundWords();
    showMessage("NYT Daily Loaded!", 2000);

  } catch (err) {
    console.error(err);
    showMessage("Error loading NYT Daily: " + err.message, 3000);
  }
}

function validateWord(word) {
  if (word.length < 4) return { valid: false, error: "Too short" };
  if (!word.includes(state.puzzle.letters[0])) return { valid: false, error: "Missing center letter" };

  const allowed = new Set(state.puzzle.letters);
  for (let char of word) {
    if (!allowed.has(char)) return { valid: false, error: "Bad letter" };
  }

  if (!state.puzzle.words.includes(word)) {
    if (VALID_WORDS.has(word)) {
      return { valid: false, error: "Not in word list" };
    }
    return { valid: false, error: "Not a valid word" };
  }

  if (state.foundWords.includes(word)) return { valid: false, error: "Already found" };

  let score = (word.length === 4) ? 1 : word.length;
  const isPangram = new Set(word).size === 7;
  if (isPangram) score += 7;

  return { valid: true, score: score, isPangram: isPangram };
}

function addWord(word, scoreVal, isPangram) {
  state.foundWords.push(word);
  state.score += scoreVal;
  state.foundWords.sort();
  saveState();
  updateScoreUI();
  renderFoundWords();
}

function updateScoreUI() {
  els.score.innerText = state.score;
  els.foundCount.innerText = `${state.foundWords.length} word${state.foundWords.length !== 1 ? 's' : ''}`;

  const max = state.puzzle.maxScore;
  let currentLevelIndex = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    const threshold = Math.floor(max * LEVELS[i].pct);
    if (state.score >= threshold) {
      currentLevelIndex = i;
    }
  }

  els.levelText.innerText = LEVELS[currentLevelIndex].name;
  els.dotsContainer.innerHTML = '';

  const progressLine = document.createElement('div');
  progressLine.className = 'progress-line-fill';
  const baseProgress = (currentLevelIndex / (LEVELS.length - 1)) * 100;
  let subProgress = 0;
  if (currentLevelIndex < LEVELS.length - 1) {
    const start = Math.floor(max * LEVELS[currentLevelIndex].pct);
    const end = Math.floor(max * LEVELS[currentLevelIndex + 1].pct);
    const range = end - start;
    if (range > 0) {
      subProgress = ((state.score - start) / range) * (100 / (LEVELS.length - 1));
    }
  }

  progressLine.style.width = `${baseProgress + subProgress}%`;
  els.dotsContainer.appendChild(progressLine);

  LEVELS.forEach((lvl, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${(i / (LEVELS.length - 1)) * 100}%`;
    if (i <= currentLevelIndex) dot.classList.add('active');
    if (i === currentLevelIndex) dot.classList.add('current');
    dot.title = `${lvl.name} (${Math.floor(max * lvl.pct)})`;
    els.dotsContainer.appendChild(dot);
  });
}

function renderFoundWords() {
  els.wordsList.innerHTML = '';
  state.foundWords.forEach(w => {
    const span = document.createElement('span');
    span.className = 'found-word';
    span.innerText = w;
    els.wordsList.appendChild(span);
  });
}

function showMessage(msg, duration) {
  els.messageArea.innerText = msg;
  els.messageArea.classList.add('visible');
  setTimeout(() => {
    els.messageArea.classList.remove('visible');
  }, duration);
}

function shakeInput() {
  els.input.parentElement.style.animation = 'shake 0.3s';
  setTimeout(() => els.input.parentElement.style.animation = '', 300);
}

function renderRankingModal() {
  const modal = document.getElementById('ranking-modal');
  const list = document.getElementById('ranking-list');
  const max = state.puzzle.maxScore;

  let currentLevelIndex = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    if (state.score >= Math.floor(max * LEVELS[i].pct)) {
      currentLevelIndex = i;
    }
  }

  list.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const item = document.createElement('div');
    item.className = 'ranking-item';
    if (i === currentLevelIndex) item.classList.add('current');
    const threshold = Math.floor(max * lvl.pct);
    item.innerHTML = `
      <span class="rank-name">${lvl.name}</span>
      <span class="rank-score">${threshold}</span>
    `;
    list.appendChild(item);
  });

  // Add header last so it appears at the top (due to column-reverse)
  const header = document.createElement('div');
  header.className = 'ranking-item ranking-header';
  header.innerHTML = `
    <span class="rank-name">Rank</span>
    <span class="rank-score">Minimum Score</span>
  `;
  list.appendChild(header);
  modal.style.display = 'block';
}

function setupEventListeners() {
  els.deleteBtn.addEventListener('click', handleDelete);
  els.enterBtn.addEventListener('click', handleEnter);
  els.shuffleBtn.addEventListener('click', shuffleLetters);

  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', selectRandomPuzzle);
  }

  const nytBtn = document.getElementById('nyt-daily-btn');
  if (nytBtn) {
    nytBtn.addEventListener('click', loadNYTDailyPuzzle);
  }

  document.querySelector('.level-container').addEventListener('click', renderRankingModal);
  document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('ranking-modal').style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('ranking-modal');
    if (e.target === modal) modal.style.display = 'none';
  });

  els.toggleWordsBtn.addEventListener('click', () => {
    const isHidden = els.wordsList.style.display === 'none';
    if (isHidden) {
      els.wordsList.style.display = 'flex';
      els.toggleWordsBtn.innerText = 'Hide';
    } else {
      els.wordsList.style.display = 'none';
      els.toggleWordsBtn.innerText = 'Show';
    }
  });

  [els.cells.center, ...els.cells.outer].forEach(cell => {
    cell.addEventListener('click', (e) => {
      const target = e.target.closest('.cell');
      if (target) handleInput(target.dataset.letter);
    });
  });

  // Clear focus after click to prevent Enter key re-triggers
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn) btn.blur();
  });
}

function handleKeydown(e) {
  if (e.key === 'Backspace') {
    handleDelete();
  } else if (e.key === 'Enter') {
    handleEnter();
  } else if (e.key === ' ') {
    e.preventDefault();
    shuffleLetters();
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    handleInput(e.key);
  }
}

// Shake animation dynamic addition
if (!document.getElementById('shake-style')) {
  const style = document.createElement('style');
  style.id = 'shake-style';
  style.innerHTML = `
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
  `;
  document.head.appendChild(style);
}

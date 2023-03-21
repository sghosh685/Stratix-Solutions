const words = require('./words');

// Select a random word from the words list
function selectWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

let currentWord;
let guessedLetters = [];
let remainingAttempts;
let score = 0;
let hintLimit = 3;

// Get DOM elements
const emptyBoxes = document.getElementById('empty-boxes');
const qwertyContainer = document.getElementById('qwerty-container');
const scoreDisplay = document.getElementById('score');
const attemptsDisplay = document.getElementById('attempts');
const hintLimitDisplay = document.getElementById('current-hint-limit');
const hintButton = document.getElementById('hint');
const resetButton = document.getElementById('reset-button');
const incorrectLettersDisplay = document.getElementById('incorrect-letters');

// Create QWERTY keyboard
const qwerty = 'qwertyuiopasdfghjklzxcvbnm'.split('');
qwerty.forEach((letter) => {
  const button = document.createElement('button');
  button.classList.add('key');
  button.innerText = letter;
  button.disabled = true;
  qwertyContainer.appendChild(button);
});

// Add event listener to QWERTY keyboard
qwertyContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('key')) {
    const letter = event.target.innerText;
    event.target.disabled = true;
    event.target.classList.add('used');
    checkLetter(letter);
  }
});

// Add event listener to Hint button
hintButton.addEventListener('click', () => {
  if (hintLimit > 0) {
    const hiddenLetters = currentWord.split('').filter((letter) => {
      return !guessedLetters.includes(letter);
    });
    const letterToShow = hiddenLetters[Math.floor(Math.random() * hiddenLetters.length)];
    guessedLetters.push(letterToShow);
    const boxes = emptyBoxes.children;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].innerText === letterToShow) {
        boxes[i].classList.remove('hidden');
      }
    }
    hintLimit--;
    hintLimitDisplay.innerText = hintLimit;
    attemptsDisplay.innerText = remainingAttempts--;
    updateScore();
    checkGameOver();
  }
});

// Add event listener to Reset button
resetButton.addEventListener('click', () => {
  resetGame();
});

// Check if letter is in the word
function checkLetter(letter) {
  if (currentWord.includes(letter)) {
    guessedLetters.push(letter);
    const boxes = emptyBoxes.children;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].innerText === letter) {
        boxes[i].classList.remove('hidden');
      }
    }
    updateScore();
    checkGameOver();
  } else {
    incorrectLettersDisplay.innerText += letter + ' ';
    attemptsDisplay.innerText = remainingAttempts--;
    checkGameOver();
  }
}

// Update the score display
function updateScore() {
  const boxes = emptyBoxes.children;
  let allLettersGuessed = true;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].classList.contains('hidden')) {
      allLettersGuessed = false;
    }
  }
  if (allLettersGuessed) {
    scoreDisplay.innerText = ++score;
  }
}

// Check if game is over
function checkGameOver() {
  if (remainingAttempts === 0) {
    endGame(false);
  } else {
    const boxes = emptyBoxes.children;
    let allLettersGuessed = true;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].classList.contains("empty-box")) {
        allLettersGuessed = false;
        break;
      }
    }
    if (allLettersGuessed) {
      endGame(true);
    }
  }
}

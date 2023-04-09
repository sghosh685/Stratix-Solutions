//Theme Selector//////////////////////////////////////////////////////////////////


var category = "";
var playerName;
var WORDS;
var correctWord;
var rightHintArray;
// This function selects the theme of the game from the dropdown menu
function setTheme() {
  // Remove the child elements of the "game-board" element
  const board = document.getElementById("game-board");
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  category = document.getElementById('theme').value;
  WORDS = words[category];
  console.log(WORDS)
  correctWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  rightHintArray = new Array(correctWord.length).fill(null);
  gameGrid();
  console.log(correctWord);
  playerName = document.getElementById('playerName').value;
  document.getElementById("myWelcome").style.display = "none"; //welcome modal does not close until theme is selected
}

function restart() {
  // Reset variables to initial values
  category = document.getElementById('restartTheme').value;
  WORDS = words[category];
  console.log("inside restart")
  console.log(WORDS)
  totalWrongGuessesAllowed = 5;
  currentScore = 0;
  correctWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  incorrectLetters = [];
  rightHintArray = new Array(correctWord.length).fill(null);
  current = [];
  hint = 3;
  gameOver = false;
  const board = document.getElementById("game-board");
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  gameGrid();

  console.log("GAME RESTARTED");
  modal.style.display = "none";
}

function closeModal() {
  const modal = document.getElementById("HintModal");
  modal.style.display = "none";
}


var totalWrongGuessesAllowed = 5;
let current = [];
let next = 0;
var currentScore = 0;
var hint = 3;
var incorrectLetters = []
var modal = document.getElementById("gameOverModal");
var gameOver = false;
const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.keyboard-container');

const keys = [
  "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
  "A", "S", "D", "F", "G", "H", "J", "K", "L",
  "ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫",
]

const handleClick = (key) => {
  var target = key.target;
  let pressedKey = target.textContent;
  fillInput(pressedKey);
}

keys.forEach(key => {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = key;
  buttonElement.setAttribute('id', key);
  buttonElement.addEventListener('click', handleClick);
  keyboard.append(buttonElement);
})

function fillAttemptsLeft() {
  document.getElementById('attempts').innerHTML = totalWrongGuessesAllowed;
}
function fillIncorrectLetters() {
  document.getElementById('incorrect-values').innerHTML = incorrectLetters;
}

function gameGrid() {
  let board = document.getElementById("game-board");
  document.getElementById("attempts").textContent = 5;
  document.getElementById("current-hint-limit").textContent = 3;
  document.getElementById("score").textContent = 00000;


  // Remove any existing child elements
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  // Create a new row and add boxes for each letter in the correct word
  let row = document.createElement("div");
  row.className = "letter-row";
  row.id = "letter-row";


  for (let j = 0; j < correctWord.length; j++) {
    let box = document.createElement("div");
    box.className = "letter-box";

    row.appendChild(box);
  }

  // Append the row to the board if the game is not over
  if (!gameOver) {
    board.appendChild(row);
  }
}
function playAgain() {
  incorrectLetters = [];
  setTheme();
}


function gameOver() {
  gameOver = true;
  if (currentScore === correctWord.length) {
    document.getElementById('win-popup').style.display = 'block';
  } else {
    document.getElementById('lose-popup').style.display = 'block';
  }
  // disable the Hint button if it is active
  if (hint > 0) {
    hint = 0;
    document.getElementById('hint-button').disabled = true;
  }
}




function openModel(heading, content) { //makes the game over modal appear
  modal.style.display = "block";
  document.getElementById('gameOver-header').innerHTML = heading
  document.getElementById('gameOver-text').innerHTML = content
}
function hintModel(heading, content) { //makes the game over modal appear
  document.getElementById('HintModal').style.display = "block"
  document.getElementById('hint-header').innerHTML = heading
  document.getElementById('hint-text').innerHTML = content
}
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function addLetterToBox(pressedKey) {
  if (gameOver === true || incorrectLetters.length === 5) {
    return;
  }
  pressedKey = pressedKey.toLowerCase();
  let row = document.getElementsByClassName("letter-row")[0];
  let indexes = [];
  for (var i = 0; i < correctWord.length; i++) {
    if (correctWord.toLowerCase()[i] === pressedKey) {
      indexes.push(i);
      currentScore += 1
      document.getElementById('score').innerHTML = currentScore;
      let btn = document.getElementById(pressedKey.toUpperCase())
      btn.addEventListener('click', () => {
        btn.disabled = true;
        console.log(btn.id);
      })
      
    }
  }

  if (indexes.length > 0) {
    for (let i = 0; i < indexes.length; i++) {
      const element = indexes[i];
      let box = row.children[element];
      box.textContent = pressedKey;
      rightHintArray[indexes[i]] = pressedKey;

      current.push(pressedKey);
      box.classList.add("filled-box");
    }

  } else if (totalWrongGuessesAllowed > 0) {
    incorrectLetters.push(pressedKey)
    totalWrongGuessesAllowed = totalWrongGuessesAllowed - 1
    fillAttemptsLeft();
    fillIncorrectLetters();

  }


  var b = row.getElementsByTagName('div');
  var textContents = "";
  for (var i = 0; i < b.length; i++) {
    textContents = textContents + b[i].textContent;
  }
  if (textContents === correctWord) {

    document.getElementById('score').innerHTML = currentScore + 5;
    openModel('Congratulations', 'You guessed word right! Game over!')
    gameOver = true;
    console.log("game over: " + gameOver);
  }
  else if (totalWrongGuessesAllowed === 0) {
    openModel('Sorry', 'You couldn\'t guess right word! Game over!')
    gameOver = true;
    console.log("game over: " + gameOver);
  } else {
    return;
  }
}



function fillInput(pressedKey) {
  let selectKey = String(pressedKey);
  addLetterToBox(selectKey);
}

function hints() {
  if (hint != 0 && totalWrongGuessesAllowed > 0) {
    var NotFilledIndexes = rightHintArray.map((x, i) => {
      if (!x) {
        return i;
      }
    }).filter(x => x);

    let letterPosition = Math.floor(Math.random() * NotFilledIndexes.length)
    let letter = correctWord[NotFilledIndexes[letterPosition]]
    hintModel('Hint', `letter ${letter.toUpperCase()}`)
    hint -= 1;
    document.getElementById('current-hint-limit').innerHTML = hint;
    totalWrongGuessesAllowed = totalWrongGuessesAllowed - 1;
    fillAttemptsLeft();
  }
  else if (totalWrongGuessesAllowed == 0) {
    openModel('Sorry', `You couldn\'t guess right word! Game over!`)
  }
  else {
    openModel('Sorry', 'You are out of hints')
  }
}


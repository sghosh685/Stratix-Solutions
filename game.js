
var category= location.search.substring(1);
var WORDS= words[category];
var totalGuesses = 6;
let guessesLeft = totalGuesses;
let current = [];
let next = 0;
let correctWord = WORDS[Math.floor(Math.random() * WORDS.length)];
var hint=3;

console.log(correctWord);

function fillAttemptsLeft(){
  document.getElementById('attempts').innerHTML=guessesLeft;
}

function gameGrid() {
  let board = document.getElementById("game-board");

  for (let i = 0; i < totalGuesses; i++) {
    let row = document.createElement("div");
    row.className = "letter-row";

    for (let j = 0; j < correctWord.length; j++) {
      let box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }

    board.appendChild(row);
  }
}

function removeLetter() {
  let row = document.getElementsByClassName("letter-row")[6 - guessesLeft];
  let box = row.children[next - 1];
  box.textContent = "";
  box.classList.remove("filled-box");
  current.pop();
  next -= 1;
}

var rightHintArray = new Array(correctWord.length).fill(null);

function CheckInput() {
  let row = document.getElementsByClassName("letter-row")[6 - guessesLeft];
  let guessString = "";
  let rightGuess = Array.from(correctWord);

  for (var val of current) {
    guessString += val;
  }

  if (guessString.length != correctWord.length) {
    alert("Not enough letters!");
    return;
  }

  var letterColor = []
  for (let i = 0; i < correctWord.length; i++) {
    letterColor.push('gray');
  }
  

  for (let i = 0; i < correctWord.length; i++) {
    if (rightGuess[i] == current[i]) {
      letterColor[i] = "green";
      rightGuess[i] = "#";
      rightHintArray[i]=current[i];
    }
  }


  for (let i = 0; i < correctWord.length; i++) {
    if (letterColor[i] == "green") continue;

    for (let j = 0; j < correctWord.length; j++) {
      if (rightGuess[j] == current[i]) {
        letterColor[i] = "yellow";
        rightGuess[j] = "#";
      }
    }
  }

  for (let i = 0; i < correctWord.length; i++) {
    let box = row.children[i];
    box.style.backgroundColor = letterColor[i];
  }

  if (guessString === correctWord) {
    document.getElementById('score').innerHTML=guessesLeft*100
    alert("You guessed right! Game over!");
    guessesLeft = 0;
    return;
  } else {
    guessesLeft -= 1;
    current = [];
    next = 0;
    fillAttemptsLeft();
    if (guessesLeft === 0) {
      alert("You've run out of guesses! Game over!");
      alert(`The right word was: "${correctWord}"`);
    }
  }
}

function addLetterToBox(pressedKey) {
  if (next === correctWord.length) {
    return;
  }

  pressedKey = pressedKey.toLowerCase();

  let row = document.getElementsByClassName("letter-row")[6 - guessesLeft];
  let box = row.children[next];
  box.textContent = pressedKey;
  box.classList.add("filled-box");
  current.push(pressedKey);
  next += 1;
}

function fillInput(key)
{
  let selectKey = String(key);
  if (selectKey === "Backspace") {
    if(next !== 0){
    removeLetter();
    }
    return;
  }

  if (selectKey === "Enter") {
    CheckInput();
    return;
  } 

  addLetterToBox(selectKey);
}

document.getElementById("reset-button").addEventListener("click", (e) => {
  window.location.reload();
});

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
  var target = e.target;

  if (!target.classList.contains("keyboard-button")) {
    return;
  }
  let key = target.textContent;

  if (key === "Del") {
    key = "Backspace";
  }

  fillInput(key);
});

document.getElementById("hint").addEventListener("click", (e) => {
  if(hint!=0){
   var NotFilledIndexes = rightHintArray.map((x,i)=> {
    if(!x){
      return i;
    }
   }).filter(x=>x);

  let letterPosition = Math.floor(Math.random()*NotFilledIndexes.length)
  let letter=correctWord[NotFilledIndexes[letterPosition]]
  alert(`${letter} comes at ${NotFilledIndexes[letterPosition]+1} position`)
  hint-=1;
  document.getElementById('current-hint-limit').innerHTML=hint;  
  }
  else{
    alert('You are out of hints');
  }
});
document.getElementById("quit").addEventListener("click", (e) => {
  window.location.href = "./index.html";
});
gameGrid();


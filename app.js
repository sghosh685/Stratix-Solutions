var category = "computers"
var WORDS = words[category];
var totalGuesses =6;
var attemptsLeft=totalGuesses;
let current = [];
let next = 0;
var currentScore=0;
let correctWord = WORDS[Math.floor(Math.random() * WORDS.length)];
var hint = 3;
var incorrectLetters=[]
var modal = document.getElementById("myModal");
var gameOver=false;
const  tileDisplay = document.querySelector('.tile-container')
const  keyboard = document.querySelector('.keyboard-container')

const keys = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫",
]

const handleClick = (key) => {
    console.log('clicked', key.target.textContent)
    var target = key.target;
    let pressedKey = target.textContent;
    fillInput(pressedKey);
}


keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key 
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', handleClick)
    keyboard.append(buttonElement)
})


console.log(correctWord);

function fillAttemptsLeft() {
  document.getElementById('attempts').innerHTML = attemptsLeft;
}
function fillIncorrectLetters() {
  document.getElementById('incorrect-values').innerHTML = incorrectLetters;
}

function gameGrid() {
    let board = document.getElementById("game-board");  
    let row = document.createElement("div");
    row.className = "letter-row";
    row.id="letter-row";
    for (let j = 0; j < correctWord.length; j++) {
      let box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }
    board.appendChild(row);
  }
  
  var rightHintArray = new Array(correctWord.length).fill(null);

function openModel(heading,content){
  modal.style.display = "block";
  document.getElementById('model-header').innerHTML=heading
  document.getElementById('model-text').innerHTML=content
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function addLetterToBox(pressedKey) {
  if (gameOver === true || incorrectLetters.length===totalGuesses  ) {
       return;
  }
  pressedKey = pressedKey.toLowerCase();
  let row = document.getElementsByClassName("letter-row")[0];
  let indexes = [];
  for (var i = 0; i < correctWord.length; i++) {
    if (correctWord.toLowerCase()[i] === pressedKey) {
      indexes.push(i);
      currentScore += 1
      document.getElementById('score').innerHTML=currentScore;
    }
  }
  if (indexes.length > 0) {
    for (let i = 0; i < indexes.length; i++) {
      const element = indexes[i];
      let box = row.children[element];
      console.log(row.children[element])
      box.textContent = pressedKey;
      rightHintArray[indexes[i]]=pressedKey;
      current.push(pressedKey);
      box.classList.add("filled-box");
    }
   
  }else if(attemptsLeft > 0) {
    incorrectLetters.push(pressedKey)
    attemptsLeft =attemptsLeft-1
    fillAttemptsLeft();
    fillIncorrectLetters();

    const keyboardInput = document.getElementById('letter-row');

    document.addEventListener('keydown', (event) => {
       console.log(event);
    })
    
  }
 

  var b =row.getElementsByTagName('div');
  var textContents = "";
for (var i = 0; i < b.length; i++) {
  textContents=textContents+b[i].textContent;
}
  if (textContents === correctWord){

    document.getElementById('score').innerHTML=currentScore+5;
    openModel('Congratulations', 'You guessed word right! Game over!')
    gameOver=true;
  }
  else if(attemptsLeft === 0){
    openModel('Sorry', 'You couldn\'t guess right word! Game over!')
    gameOver=true;
  }else{
    return;
  }
}


  function fillInput(pressedKey) {
    let selectKey = String(pressedKey);
    addLetterToBox(selectKey);
  }

  function hints() {
    if (hint != 0 && attemptsLeft>0) {
      var NotFilledIndexes = rightHintArray.map((x, i) => {
        if (!x) {
          return i;
        }
      }).filter(x => x);
  
      let letterPosition = Math.floor(Math.random() * NotFilledIndexes.length)
      let letter = correctWord[NotFilledIndexes[letterPosition]]
      openModel('Hint',`letter ${letter.toUpperCase()}`)
      hint -= 1;
      document.getElementById('current-hint-limit').innerHTML = hint;
      attemptsLeft =attemptsLeft-1;
      fillAttemptsLeft();
    }
    else if(attemptsLeft == 0){
      openModel('Sorry', 'You couldn\'t guess right word! Game over!')
    }
    else{
      openModel('Sorry','You are out of hints')
    }
  };

gameGrid();
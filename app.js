//Theme Selector//////////////////////////////////////////////////////////////////


var category="";
var playerName;
var WORDS ;
var correctWord;
var rightHintArray;
// This function selects the theme of the game from the dropdown menu
function setTheme() {

  category = document.getElementById('theme').value;
  WORDS = words[category];
  correctWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  rightHintArray = new Array(correctWord.length).fill(null);
  gameGrid();
  console.log(correctWord);
  playerName=document.getElementById('playerName').value;
  document.getElementById("myWelcome").style.display = "none"; //welcome modal does not close until theme is selected
}

function restart(){
  attemptsLeft=5;
  current = [];
  hint = 3;
  incorrectLetters=[]
  gameOver=false;
  setTheme();
  console.log("GAME RESTARTED");
  modal.style.display = "none";
}

var totalGuesses =5;
var attemptsLeft=totalGuesses;
let current = [];
let next = 0;
var currentScore=0;
var hint = 3;
var incorrectLetters=[]
var modal = document.getElementById("gameOverModal");
var gameOver=false;
const  tileDisplay = document.querySelector('.tile-container');
const  keyboard = document.querySelector('.keyboard-container');

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
    buttonElement.textContent = key ;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', handleClick);
    keyboard.append(buttonElement);
})




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
    for (let j = 0; j < correctWord.length; j++) { //loop creates an empty box for every letter in the chosen word
      let box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }
    board.appendChild(row);
    if (gameOver == true){
      //clear the boxes from the screen
      
    }
  }
  


function openModel(heading,content){ //makes the game over modal appear
  modal.style.display = "block";
  document.getElementById('gameOver-header').innerHTML=heading
  document.getElementById('gameOver-text').innerHTML=content
}

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

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
    console.log("game over: " + gameOver);
  }
  else if(attemptsLeft === 0){
    openModel('Sorry', 'You couldn\'t guess right word! Game over!')
    gameOver=true;
    console.log("game over: " + gameOver);
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


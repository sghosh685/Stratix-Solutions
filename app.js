//Player Name ///////////////////////////////////////////////////////////////////////////
//This function get player name from input box on HOME page and stores the user name in a variable called playerName
var playerName;
function returnName() {
  playerName = document.getElementById('playerName').value;
}

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
  updateWinStreak();
  updateHighScore();
  updateGamesPlayed();
  playerName=document.getElementById('playerName').value;
  document.getElementById("myWelcome").style.display = "none"; //welcome modal does not until theme is selected

  //initialize player name display upon clicking "PLAY"
  document.getElementById("username").innerHTML = playerName;
  if (playerName===undefined || playerName===""){
    document.getElementById("username").innerHTML = "Player";
  }
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

///INITIALIZATION
var totalGuesses =5;
var attemptsLeft=totalGuesses;
let current = [];
let next = 0;
var currentScore=0;
var hint = 3;
var highScore = 0;
var winStreak = 0;
var gamesPlayed = 0;
var incorrectLetters=[]
var hintsModal = document.getElementById("hintsModal");
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

//Game Stats updates
function updateWinStreak(){
  document.getElementById("winStreak").innerHTML = winStreak;
}
function updateHighScore(){
  document.getElementById("highestScore").innerHTML = highScore;
}
function updateGamesPlayed(){
  document.getElementById("gamesPlayed").innerHTML = gamesPlayed;
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
      board.remove();
    }
  }
  


function openModal(heading,content){ //makes the game over modal appear
  modal.style.display = "block";
  document.getElementById('gameOver-header').innerHTML=heading
  document.getElementById('gameOver-text').innerHTML=content
}

function openHintsModal(hintHeading,hintContent){ //makes the hint modal appear
  hintsModal.style.display = "block";
  document.getElementById('hints-header').innerHTML=hintHeading
  document.getElementById('hints-text').innerHTML=hintContent
}
window.onclick = function(event) {
  if (event.target == hintsModal) {
    hintsModal.style.display = "none";
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
    //Win Streak updates
    winStreak = winStreak + 1;
    updateWinStreak();

    document.getElementById('score').innerHTML=currentScore+5;
    openModal('Congratulations', 'You guessed word right! Game over!')
    
    //high score updates
    if (currentScore > highScore){ 
      highScore = currentScore;
      updateHighScore();
    }
    gamesPlayed = gamesPlayed +1; //update games played
    gameOver=true;
    console.log("game over: " + gameOver);
  }
  else if(attemptsLeft === 0){
    winStreak = 0; //win streak is reset to 0 if word not guessed correctly
    updateWinStreak();
    gamesPlayed = gamesPlayed +1; //update games played
    openModal('Sorry', 'You couldn\'t guess right word! Game over!')
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
     openHintsModal('Hint',`letter ${letter.toUpperCase()}`)
      hint -= 1;
      document.getElementById('current-hint-limit').innerHTML = hint;
      attemptsLeft =attemptsLeft-1;
      fillAttemptsLeft();
    }
    else if(attemptsLeft == 0){
     openHintsModal('Sorry', 'You couldn\'t guess right word! Game over!')
    }
    else{
     openHintsModal('Sorry','You are out of hints')
    }
  };

function hardMode(){
  WORDS = words1[category];
}
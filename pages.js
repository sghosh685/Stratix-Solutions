

// "WELCOME" MODAL /////////////////////////////////////////////////////////////////////////////
//Welcome modal does not need to be closed manually. It will close once the player chooses a theme and hits "PLAY"

// "ABOUT" MODAL /////////////////////////////////////////////////////////////////////
var about = document.getElementById("myAbout");
var btn = document.getElementById("btnMenu");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() { //when user clicks button, unhide modal
  about.style.display = "block";
}

span.onclick = function() { //when user clicks "x", close modal
  about.style.display = "none";
}

window.onclick = function(event) { //when user clicks outside of modal, close modal
  if (event.target == about) {
    about.style.display = "none";
  }
}

// "RULES" MODAL /////////////////////////////////////////////////////////////////////
var rules = document.getElementById("myRules");
var btn1 = document.getElementById("btnHelp");
var span1 = document.getElementsByClassName("close1")[0];
// BUG FOUND: For some reason, having all the spans for the close buttons in the same class called "close" will cause all the close buttons to stop working
// therefore, we may need a separate "close" class for each modal's close button as well (i.e., "close1", "close2", etc.)

btn1.onclick = function() {
  rules.style.display = "block";
}

span1.onclick = function() {
  rules.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == rules) {
    rules.style.display = "none";
  }
}

// "GAME STATS" MODAL /////////////////////////////////////////////////////////////////////
var gameStats = document.getElementById("myGameStats");
var btn2 = document.getElementById("btnLeaderboard");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  gameStats.style.display = "block";
}

span2.onclick = function() {
  gameStats.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == gameStats) {
    gameStats.style.display = "none";
  }
}

// "SETTINGS" MODAL /////////////////////////////////////////////////////////////////////////////
var settings = document.getElementById("mySettings");
var btn3 = document.getElementById("btnSettings");
var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
  settings.style.display = "block";
}

span3.onclick = function() {
  settings.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == settings) {
    settings.style.display = "none";
  }
}

//Dark Mode
function darkMode(){
  var gamePage = document.body;
  gamePage.classList.toggle("dark-mode");
  
  document.getElementById("mySettings").style.color= "black";
  document.getElementById("myRules").style.color= "black";
  document.getElementById("myGameStats").style.color= "black";
  document.getElementById("gameOverModal").style.color= "black";
  
}

window.onload = function(){ //unchecks all toggles when the page loads
  document.getElementById("darkModeToggle").checked=false;
  document.getElementById("hardModeToggle").checked=false;
}



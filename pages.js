//Player Name ///////////////////////////////////////////////////////////////////////////

//This function get player name from input box on HOME page and stores the user name in a variable called playerName
var playerName;

function returnName() {
  playerName = document.getElementById('playerName').value;
  welcome.style.display = "none";
}
////////////////////////////////////////////////////////////////////////////////////////

var welcome = document.getElementById("myWelcome");
var span0 = document.getElementsByClassName("close")[0];

  span0.onclick = function() {
    about.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == welcome) {
      welcome.style.display = "none";
    }
  }

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

// "WELCOME" MODAL /////////////////////////////////////////////////////////////////////////////
var welcome = document.getElementById("myWelcome");
var span4 = document.getElementsByClassName("close4")[0];

span4.onclick = function() {
  welcome.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == settings) {
    welcome.style.display = "none";
  }
}

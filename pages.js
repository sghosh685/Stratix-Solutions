var welcome = document.getElementById("myWelcome");
var span0 = document.getElementsByClassName("close")[0];

window.onload = function () {
  document.getElementsByClassName("myWelcome-anchor-toggle").click();
  };

  span0.onclick = function() {
    about.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == welcome) {
      welcome.style.display = "none";
    }
  }


var about = document.getElementById("myAbout");
var btn = document.getElementById("btnMenu");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  about.style.display = "block";
}

span.onclick = function() {
  about.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == about) {
    about.style.display = "none";
  }
}

///////////////////////////////////////////////////////////////////////
var rules = document.getElementById("myRules");
var btn1 = document.getElementById("btnHelp");
var span1 = document.getElementsByClassName("close")[0];


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

///////////////////////////////////////////////////////////////////////


var gameStats = document.getElementById("myGameStats");
var btn2 = document.getElementById("btnLeaderboard");
var span2 = document.getElementsByClassName("close")[0];

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

///////////////////////////////////////////////////////////////////////////////

var settings = document.getElementById("mySettings");
var btn3 = document.getElementById("btnSettings");
var span3 = document.getElementsByClassName("close")[0];

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

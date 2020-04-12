function navbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function bycases() {
  var x = document.getElementById("byCases");
  var y = document.getElementById("byDeaths");
  x.style.maxHeight = 2500 + "px";
  y.style.maxHeight = 0;
  
  var a = document.getElementById("btnCases");
  var b = document.getElementById("btnDeaths");
  a.style.backgroundColor = "white";
  b.style.backgroundColor = "#dcdcdc";
}

function bydeaths() {
  var x = document.getElementById("byCases");
  var y = document.getElementById("byDeaths");
  x.style.maxHeight = 0;
  y.style.maxHeight = 2500 + "px";  
  
  var a = document.getElementById("btnCases");
  var b = document.getElementById("btnDeaths");
  a.style.backgroundColor = "#dcdcdc";
  b.style.backgroundColor = "white";
}
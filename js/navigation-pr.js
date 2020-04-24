window.addEventListener('DOMContentLoaded', function () {
	var menubtn = document.getElementById("menuBtn");
	var menu = document.getElementById("myTopnav");
	
	menubtn.onclick = function() {
	  if (menu.className === "topnav") {
	    menu.className += " responsive";
	  } else {
		menu.className = "topnav";
	  }
	};
	
	var prbtn = document.getElementById("prBtn");
	var prmenu = document.getElementById("prselector");
	
	prbtn.onclick = function() {
	  if (prmenu.className === "selector-content") {
	    prmenu.className += " responsive";
	  } else {
		prmenu.className = "selector-content";
	  }
	};

	window.onclick = function(event) {
	  if (event.target == menu) {
		menu.className = "topnav";
	  } else if (event.target == prmenu) {
		prmenu.className = "selector-content";
	  }
	};
	
	window.onscroll = function() {
	  menu.className = "topnav";
	  prmenu.className = "selector-content";
	};
});
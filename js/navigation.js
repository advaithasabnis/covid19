window.addEventListener('DOMContentLoaded', function () {

	var menubtn = document.getElementById("menuBtn");
	var menu = document.getElementById("myTopnav");
	
	menubtn.onclick = function() {
	  if (menu.className === "topnav") {
	    menu.className += " responsive";
	  } else {
		menu.className = "topnav";
	  }
	}

	window.onmousedown = function(event) {
	  if (event.target == menu) {
		menu.className = "topnav";
	  }
	}
})
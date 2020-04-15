window.addEventListener('DOMContentLoaded', function () {

	var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	  modal.style.display = "block";
	}
	
	span.onclick = function() {
	  modal.style.display = "none";
	}
	
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
	  } else if (event.target == modal) {
		modal.style.display = "none";
	  }
	}
	
	window.onscroll = function() {
	  menu.className = "topnav";
	}
})
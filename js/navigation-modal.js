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
	
	var transition = document.getElementById("transitionModal");
	var span2 = document.getElementsByClassName("close2")[0];
	window.onload = function () {
		if (window.location.origin.includes('github')) {
			transition.style.display = "block";
		}
	}
	span2.onclick = function() {
	  transition.style.display = "none";
	}

	window.onmousedown = function(event) {
	  if (event.target == menu) {
		menu.className = "topnav";
	  } else if (event.target == modal) {
		modal.style.display = "none";
	  } else if (event.target == transition) {
		transition.style.display = "none";
	  }
	}
	
	window.onscroll = function() {
	  menu.className = "topnav";
	}
})
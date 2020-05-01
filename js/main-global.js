window.addEventListener('DOMContentLoaded', function () {
	
	var modal = document.getElementById("myModal");
	var infobtn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];

	infobtn.onclick = function() {
	  modal.style.display = "block";
	};
	
	span.onclick = function() {
	  modal.style.display = "none";
	};
	
	var menubtn = document.getElementById("menuBtn");
	var menu = document.getElementById("myTopnav");
	
	menubtn.onclick = function() {
	  if (menu.className === "topnav") {
	    menu.className += " responsive";
	  } else {
		menu.className = "topnav";
	  }
	};

	window.onclick = function(event) {
	  if (event.target == menu) {
		menu.className = "topnav";
	  } else if (event.target == modal) {
		modal.style.display = "none";
	  }
	};
	
	window.onscroll = function() {
	  menu.className = "topnav";
	};
	
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.parentElement.nextElementSibling;
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = 2500 + "px";
		}
	  });
	}
});

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
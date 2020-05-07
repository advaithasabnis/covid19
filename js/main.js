window.addEventListener('DOMContentLoaded', function () {

	var slideIndex = 0;
	carousel();

	function carousel() {
		var j;
		var s = document.getElementsByClassName("slide");
		for (j = 0; j < s.length; j++) {
			s[j].style.display = "none";
			s[j].style.visibility = "visible";
		}
		slideIndex++;
		if (slideIndex > s.length) {slideIndex=1;}
		s[slideIndex-1].style.display = "table-cell";
		setTimeout(carousel, 6000);
	}
	
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
	  menu.classList.toggle("responsive");
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
	  coll[i].addEventListener("click", openClose);
	  }
});

function openClose() {
	this.classList.toggle("active");
	var panel = this.parentElement.nextElementSibling;
	if (panel.style.display === "block") {
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
		graphDivs = panel.getElementsByClassName("plotly-graph-div");
		for (i = 0; i < graphDivs.length; i++) {
			Plotly.relayout(graphDivs[i], {autosize: true});
		}
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
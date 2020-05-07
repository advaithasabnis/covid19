window.addEventListener('DOMContentLoaded', function () {
	var menubtn = document.getElementById("menuBtn");
	var menu = document.getElementById("myTopnav");
	
	menubtn.onclick = function() {
	  menu.classList.toggle("responsive");
	};
	
	var prbtn = document.getElementById("prBtn");
	var prmenu = document.getElementById("prselector");
	
	prbtn.onclick = function() {
	  prmenu.classList.toggle("responsive");
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

function prSelector(item) {
	var prmenu = document.getElementById("prselector");
	prmenu.className = "selector-content";
	
	var coll = document.getElementsByClassName("panel");
	var tabBtns = document.getElementsByClassName("selector-item");
	var i;
	
	for (i = 0; i < coll.length; i++) {
		coll[i].style.display = "none";
	}
	
	for (i = 0; i < tabBtns.length; i++) {
		tabBtns[i].className = tabBtns[i].className.replace(" active", "");
	}
	
	var pr = item.value;
	panel = document.getElementById(pr);
	item.className += " active";
	panel.style.display = "block";
	
	graphDivs = panel.getElementsByClassName("plotly-graph-div");
	for (i = 0; i < graphDivs.length; i++) {
		Plotly.relayout(graphDivs[i], {autosize: true});
	}
}
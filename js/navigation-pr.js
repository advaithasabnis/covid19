window.addEventListener('DOMContentLoaded', function () {
	activePr = document.getElementById("active-pr");
	prSelector(activePr);
	
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
	
	var coll = document.getElementsByClassName("prpanel");
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
	
	if (pr != "all") {
		var primeGraph = graphDivs[2];
		
		primeGraph.on('plotly_hover', function(eventdata) {
			if (eventdata.xvals) {
				Plotly.Fx.hover(primeGraph, {
						xval: eventdata.xvals[0]
				}, ['xy', 'x2y2', 'x3y3', 'x4y4', 'x5y5', 'x6y6']);
			}
		});
		
		primeGraph.on('plotly_click', function(eventdata) {
			if (eventdata.points[0]) {
				var clickDate = new Date(...prepareDate(eventdata.points[0].x));
				var clickTime = clickDate.getTime();
				Plotly.Fx.hover(primeGraph, {
						xval: clickTime
				}, ['xy', 'x2y2', 'x3y3', 'x4y4', 'x5y5', 'x6y6']);
			}
		});
	}
}

function prepareDate(da) {
  [y, m, d] = da.split("-"); //Split the string
  return [y, m - 1, d]; //Return as an array with y,m,d sequence
}
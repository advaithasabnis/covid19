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
	
	var primeGraph = document.getElementById("canadaPrime").children[0].children[0];
	
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
	
	/*primeGraph.on('plotly_click', function(eventdata) {
			var pointNum = eventdata.points[0].pointNumber;
			Plotly.Fx.hover(primeGraph, [
				{curveNumber:0, pointNumber:pointNum},
				{curveNumber:1, pointNumber:pointNum},
				{curveNumber:2, pointNumber:pointNum},
				{curveNumber:3, pointNumber:pointNum},
				{curveNumber:4, pointNumber:pointNum},
				{curveNumber:5, pointNumber:pointNum},
				{curveNumber:6, pointNumber:pointNum},
				{curveNumber:7, pointNumber:pointNum},
				{curveNumber:8, pointNumber:pointNum},
				{curveNumber:9, pointNumber:pointNum},
			], ['xy', 'x2y2', 'x3y3', 'x4y4', 'x5y5']
			);
			alert(pointNum);
	});*/
		
});

function prepareDate(da) {
  [y, m, d] = da.split("-"); //Split the string
  return [y, m - 1, d]; //Return as an array with y,m,d sequence
}

function openClose() {
	this.classList.toggle("active");
	var panel = this.parentElement.nextElementSibling;
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = 2500 + "px";
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
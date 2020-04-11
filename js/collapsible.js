window.addEventListener('DOMContentLoaded', function () {

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
	
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	  modal.style.display = "block";
	}
	
	span.onclick = function() {
	  modal.style.display = "none";
	}

	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	}
})
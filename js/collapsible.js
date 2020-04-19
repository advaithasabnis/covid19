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
	
	/* if (window.location.href.indexOf("#ontario") > -1) {
		var province = document.getElementById("ontario");
		province.style.maxHeight = 2500 + "px";
		window.location.assign("#ontario");
	} */
})
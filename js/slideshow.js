var slideIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("slide");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex=1;}
	x[slideIndex-1].style.display = "table-cell";
	setTimeout(carousel, 6000);
}
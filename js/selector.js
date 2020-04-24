function prSelector(item) {
	var prmenu = document.getElementById("prselector");
	prmenu.className = "selector-content";
	
	var coll = document.getElementsByClassName("panel");
	var tabBtns = document.getElementsByClassName("selector-item");
	var i;
	
	for (i = 0; i < coll.length; i++) {
		coll[i].style.maxHeight = 0 + "px";
	}
	
	for (i = 0; i < tabBtns.length; i++) {
		tabBtns[i].className = tabBtns[i].className.replace(" active", "");
	}
	
	var pr = item.value;
	panel = document.getElementById(pr);
	item.className += " active";
	panel.style.maxHeight = 2500 + "px";
}
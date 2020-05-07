$(document).ready(function(){

	$("#menuBtn").click(function(){
		$("#myTopnav").toggleClass("responsive");
	});

	$("#prBtn").click(function(){
		$("#prselector").toggleClass("responsive");
	});
	
	$(document).click(function(event){
		if ($(event.target).is("#myTopnav")) {
			$("#myTopnav").attr("class", "topnav");
		} else if ($(event.target).is("#prselector")) {
			$("#prselector").attr("class", "selector-content");
		}
	});
	
	$(document).scroll(function(){
		$("#myTopnav").attr("class", "topnav");
		$("#prselector").attr("class", "selector-content");
	});
});

function prSelector(item) {
	$("#prselector").attr("class", "selector-content");
	
	$(".prpanel").each(function() {
		$(this).hide();
	});
	
	$(".selector-item").each(function() {
		$(this).removeClass("active");
	});
	
	var pr = $(item).attr("value");
	$("#" + pr).show();
	$("#" + pr + " .plotly-graph-div").each(function() {
		Plotly.relayout(this, {autosize: true});
	});
	$(item).addClass("active");
	
}
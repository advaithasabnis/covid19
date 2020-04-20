var map = L.map('leafletmap');

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/light-v10',
	minZoom: 4,
	maxZoom: 9,
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoiY292aWQxOWluY2FuYWRhIiwiYSI6ImNrOTdrZXV3azA3Z3AzZXByb21lbnp2a20ifQ.6xOC4eY5LjZ5ZutE2sBE0g'
}).addTo(map);

map.locate({setView: true, maxZoom: 9});

function onLocationError(e) {
	alert(e.message);
	map.setView([55, -102], 4);
}

map.on('locationerror', onLocationError);
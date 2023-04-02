var fieldLatLng = [47.3329, 8.41256];

var map = L.map("map").setView([47.3302, 8.4143], 15);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
//   fullscreenControl: true,
	// fullscreenControl: {
	// 	pseudoFullscreen: false // if true, fullscreen to page width and height
	// },
	// useCache: true,
}).addTo(map);

// map.addControl(new L.Control.Fullscreen());

var polygon = L.polygon([
    [47.3327531525947, 8.413414100429726],
    [47.332743964051325, 8.412897946519793],
    [47.33260584978157, 8.412902329022682],
	[47.33259842427294, 8.412779618941766],
	[47.33273208326811, 8.412643761352182],
	[47.3325909987633, 8.412271248606542],
	[47.33281821888578, 8.412032402199046],
	[47.333049893298224, 8.411955708398473],
	[47.33310484156743, 8.413390978094903],
]).addTo(map);

var greenIcon = L.icon({
    iconUrl: 'assets/map/bus_icon.svg',

    iconSize:     [50, 120], // size of the icon
    iconAnchor:   [20, 50], // point of the icon which will correspond to marker's location
});


function addBusMarkerAndRouting(busstop, lat, lng, via) {
	L.marker([lat, lng], {icon: greenIcon}).addTo(map).bindTooltip(busstop, {permanent: true, offset: [0, -20], direction: "top"}).openTooltip();;

	var waypoints = [];
	waypoints.push(L.latLng(lat, lng));
	for(point in via){
		waypoints.push(L.latLng(via[point][0], via[point][1]));
	}
	waypoints.push(L.latLng(fieldLatLng[0], fieldLatLng[1]))

	L.Routing.control({
		waypoints: waypoints,
		createMarker: function() { return null; },
		lineOptions : {
			addWaypoints: false
		},
	}).addTo(map);
}


addBusMarkerAndRouting("Oberwil-Lieli (AG), Lieli Dorf", 47.34133, 8.3968);
addBusMarkerAndRouting("Aesch (ZH), Gemeindehaus", 47.33782, 8.43852);
addBusMarkerAndRouting("Arni (AG), Arni Dorf", 47.31831, 8.41927, [[47.32448, 8.41363], [47.32835, 8.4235]]);




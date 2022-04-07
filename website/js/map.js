var map = L.map("map").setView([47.3329, 8.41256], 18);

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
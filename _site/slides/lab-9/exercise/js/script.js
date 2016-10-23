function raw2url(rawImg) {
	/* converts raw image string to base64 url format */
	var ary = new Uint8Array(rawImg);
	var raw = String.fromCharCode.apply(null, ary);
	var b64 = btoa(raw);
	var dataURL = "data:image/jpeg;base64," + b64;
	return dataURL;
}

function getImg(){
	var w = Math.floor((Math.random() * 6) + 1) * 100;
	var h = Math.floor((Math.random() * 6) + 1) * 100;
	var url = "https://placekitten.com/" + w + "/" + h;

	var xhr = new XMLHttpRequest();
	// Set the type of the returned response
	// This is only required for the purpose of the demo
	xhr.responseType = 'arraybuffer';

	xhr.open("GET", url);

	xhr.onload = function() {
		rawImg = xhr.response;

		dataURL = raw2url(rawImg);

		$("#imgContainer").empty();
		$("#imgContainer").append("<img src=\""+dataURL+"\" />");
		
	};

	xhr.send();
}
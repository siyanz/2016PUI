function raw2url(rawImg) {
	/* converts raw image string to base64 url format */
	var ary = new Uint8Array(rawImg);
	var raw = String.fromCharCode.apply(null, ary);
	var b64 = btoa(raw);
	var dataURL = "data:image/jpeg;base64," + b64;
	return dataURL;
}

function getImg(){
	// TODO: create a request
	var xhr = new XMLHttpRequest();

	// Set the type of the returned response
	// This is only required for the purpose of the demo
	xhr.responseType = 'arraybuffer';

	xhr.open("GET", "https://placekitten.com/200/200");

	// onload defines the behavior after
	xhr.onload = function() {
		// TODO: Get specific elements of returned response
		var rawImg = xhr.response;

		dataURL = raw2url(rawImg);

		$("#imgContainer").empty();
		$("#imgContainer").append("<img src=\""+dataURL+"\" />");
		
	};

	// TODO: Send the request
	xhr.send();
}
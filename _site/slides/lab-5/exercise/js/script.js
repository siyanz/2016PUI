console.log("Hi");


function contacts()
{
	document.getElementById("contactName").value = "Bob Miller";
	// Called to make button visible when the button is clicked
	document.getElementById("contactName").onchange();
}

// onload is needed to get hold of the elements 
// getElementById returns null if line 2 & 3 are called before onload 
// window.onload = function(){
	// Save the elements to variables so that they can be used later 
var inp = document.getElementById("contactName");
var but = document.getElementById("sendButton");

// onchange is called whenever there is a change to the input 
inp.onchange = function(){
	// First check if the value for input box is empty
	// If yes, change the visibility of the button to visible
	if (inp.value != ""){
		but.style.visibility = "visible";
	} else {
		but.style.visibility = "hidden";
	}
}; 
// };

/* Another way of implementing the same thing without onload
function contacts()
{
	document.getElementById("contactName").value = "Bob Miller";
	showButton();
}

var inp = document.getElementById("contactName");
inp.addEventListener("change", showButton, false);

function showButton(){
	var but = document.getElementById("sendButton");
	console.log(inp.value);
	if (inp.value != ""){
		but.style.visibility = "visible";
	} else {
		but.style.visibility = "hidden";
	}
};

*/
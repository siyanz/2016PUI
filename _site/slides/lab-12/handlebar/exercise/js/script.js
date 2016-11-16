var projects = {
	"projects":[
		{
			"name": "placehold", 
			"id": "0-placehold", 
			"thumbnail": "http://placehold.it/500x300", 
			"img": "http://placehold.it/750x500",
			"description": "This project was done in collaboration with John Doe and Jane Doe. The project focuses on lorem ipsum"},
		{
			"name": "kitten",
			"id": "1-kitten", 
			"thumbnail": "http://placekitten.com/500/300",
			"img": "http://placekitten.com/750/500",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor ex et varius tincidunt. Nullam condimentum sodales nunc in congue. Nulla non elit libero. Fusce consectetur efficitur neque accumsan fringilla. Phasellus diam dui, posuere ut venenatis quis, cursus feugiat diam. In dapibus, magna id hendrerit vehicula, dolor lectus scelerisque ligula, non mollis metus tortor sit amet nibh. Aenean eu neque a leo tincidunt malesuada."}
		]};


// This creates the grid at the bottom of the page
$( document ).ready(function (){
	// Retrieve the template data from the HTML (jQuery is used here).
	var showcase = $('#handlebars-showcase').html();
	// Compile the template data into a function
	var showcaseScript = Handlebars.compile(showcase);
	var showcaseHTML = showcaseScript(projects);
	// Insert the HTML code into the page
	$("#showcase").append(showcaseHTML);

	// Load some content when the page is first opened
	loadContent(0);

	// Even handler for each one of the grids
	// When clicked, refresh the page
	// The refresh is done by adding hash to the url 
	// This enables using browser's back and forward button to navigate
	$("#showcase").on("click", "a", function(evt) {
	        evt.preventDefault();

	        // Adding hash to the url
			window.location.hash = $(this).attr('id');

	    });
});


// This is the function that actually dynamically generates the page content
// It takes a number as id (e.g., 0, 1...)
// And gets the content data from projects
function loadContent(id){
	// Retrieve the template data from the HTML (jQuery is used here).
	var template = $('#handlebars-demo').html();

	// Compile the template data into a function
	var templateScript = Handlebars.compile(template);

	// Retrieves data by id
	var context = projects.projects[id];

	var html = templateScript(context);

	// Insert the HTML code into the page
	$("#description").html("");
	$("#description").html(html);

	// Scroll the page up
	window.scrollTo(0, 0);

};

// This triggers the loadContent function
// Whenever the url is changed (i.e, when a hash is added)
// It loades the contents by calling loadContent
$(window).on('hashchange', function() {
	var id = (((window.location.hash).split("#"))[1]).split("-")[0];

	loadContent(id);
});

$(document).ready( function() {
	$("#generateButton").click(function() {
		generateMeals();
	});

	var breakfast = ["oatmeal", "eggMilk"];
	var lunch = ["salad", "sandwich"];
	var dinner = ["burger", "pizza"];
	var meals = ["breakfast", "lunch", "dinner"];

	function randImg(options) {
		return options[Math.floor(Math.random() * options.length)];
	};

	function mealDivGenerator(meal) {
		var $elem = $("<div>", {'class': 'mealImg col-xs-4'});
		$elem.append($("<img>", {"src": "./img/"+randImg(eval(meal))+".jpg"}));

		$elem.append($("<button>", {'class': "btn deleteBtn"}).append(
									$("<p>Delete</p>")).hide());

		return $elem;
	};
	
	function deleteMeal(elem) {
		console.log($(elem).parent());
		$(elem).parent().remove();
	};

	function showEditBtns(elem) {
		$(elem).children('.deleteBtn').show("400");
	};

	function hideEditBtns(elem) {
		$(elem).children('.deleteBtn').hide("400");
	};	

	function generateMeals() {
		if ($("#meals").children().length == 0 ){
			// Creating element one by one by copy-pasting code

			// var $breakfastElem = mealDivGenerator(breakfast);
			// var $lunchElem = mealDivGenerator(lunch);
			// var $dinnerElem = mealDivGenerator(dinner);

			// $("#meals").append($breakfastElem).hide().fadeIn("slow");
			// $("#meals").append($lunchElem).hide().fadeIn("slow");
			// $("#meals").append($dinnerElem).hide().fadeIn("slow");


			// Using each function on the meals array to create a div and append it to #meals
			// This is exactly the same as the code above, but much shorter
			// AND no copy-pasting! :)
			$.each(meals, function(i, val) {
				$valElem = mealDivGenerator(val);
				$("#meals").append($valElem.hide().fadeIn("slow"));
			});

			$(".mealImg").on("mouseenter", function(){
				var that = this;
				showEditBtns(this);
			});

			$(".mealImg").on("mouseleave", function(){
				var that = this;
				hideEditBtns(this);
			});

			$(".deleteBtn").click(function() {
				var that = this;
				deleteMeal(this);
			});
		}
	};
		
});
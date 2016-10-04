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

		$("#confirm").modal("hide");
		$(elem).parent().remove();
	};

	function confirmDelete(elem) {
		var $popup = $('<div class="modal fade" id="confirm"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body"><p>One fine body&hellip;</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button><button type="button" class="btn btn-primary" id="confirmD">Delete</button></div></div></div><</div><!-- /.modal -->');

		$(".container").append($popup);

		var that = $(elem);
		$("#confirmD").on("click", function() {
			deleteMeal(that);
		});
		$("#confirm").modal("show");
	}

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
				confirmDelete(this);
			});
		}
	};
		
});
jQuery(document).ready(function($){
	
	// Hide all panels to start
	var panels = $(".accordion > dd").hide();

	// Show first panel on load (optional). Remove if you want
	panels.first().show();
	var title = $(".accordion > dt").first();
	var titles = $(".accordion > dt");

	title.addClass("open");

	// On click of panel title
	$(".accordion > dt").click(function() {
		var $this = $(this);

		// Slide up all panels
		panels.slideUp();
		titles.removeClass("open");
		$this.addClass("open");

		// Slide down target panel
		$this.next().slideDown();

		return false;
});
});	

$(".js-menu-trigger").on("click", function(){
   $(this).next().toggle();
});

var allItems = $(".js-item");


$(".js-item-trigger").on("click", function(){
  var thisId = $(this).attr("data-item");
  var thisItem = $(".js-" + thisId);
  
  allItems.removeClass("visible");
  thisItem.addClass("visible");

  		titles.removeClass("open");
		$this.addClass("open");
  // console.log(thisItem);
});
	

	/* Global Variables 
	var state = {

	} */


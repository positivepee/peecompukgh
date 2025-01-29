$(document).ready(function(){
	
	$(document).on("click", ".select-s-cat-btn", function(){
		var $dis = $(this),
		txt = $dis.text(),
		cid = $dis.attr("data-cat-id");
		$(".category-div").hide(0, function(){
			$(".top-category-text").text(" " + txt);
			$(".top-cat-sval").val(cid);	
			$("#main_search_input_item").focus();
		});
	});
		
	$(document).on("input change keypress", "#main_search_input_item", function(){
		var $dis = $(this);
		$(".top-src-sval").val($dis.val());	
	});
	
	$(document).on("keyup", "#main_search_input_item", function(e){
		if(e.keyCode == 13){
			//var url = "search?q=" + $(".top-src-sval").val() + "&cat=" + $(".top-cat-sval").val();
			var url = "search?cat=" + $(".top-cat-sval").val() + "&q=" + $(".top-src-sval").val();
			window.open(url, "_self");
		}
	});
	
	$(document).on("focus", "#main_search_input_item", function(e){
		$(".top-search-ccitem").addClass("dfo");
	});
	
	$(document).on("blur", "#main_search_input_item", function(e){
		$(".top-search-ccitem").removeClass("dfo");
	});
	
});
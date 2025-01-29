$(document).ready(function(){
	
	$(document).on("click", ".reg-option-btn", function(){
		var $dis = $(this), reg = $($dis.attr("data-reg"));
		if($dis.hasClass("active")) return;
		$(".reg-cnt, .reg-option-btn").removeClass("active");
		$dis.addClass("active");
		reg.addClass("active");
	});
	
	$(document).on("click", ".reg-option-btn2", function(){
		var $dis = $(this), reg = $($dis.attr("data-reg"));
		if($dis.hasClass("active")) return;
		$(".reg-cnt2, .reg-option-btn2").removeClass("active");
		$dis.addClass("active");
		reg.addClass("active");
	});
	
	$(document).on("click", ".count-btn", function(){
		var $dis = $(this), cnt = $($dis.attr("data-container-id")), cb = $($dis.attr("data-cb"));
		$(".count-btn, .count-container").removeClass("active");
		$(".count-btn, .separator").removeClass("dim");
		cb.addClass("active");
		cnt.addClass("active");
		
	});
	
});
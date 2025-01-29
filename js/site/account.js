$(document).ready(function(){
	
	$(".d-inp").focus(function(){
		$(this).prev().addClass("active");
		$(this).closest(".div-input").addClass("z");
	});
	
	$(".d-inp").blur(function(){
		$(this).closest(".div-input").removeClass("z");
		if($(this).val() == ""){
			$(this).prev().removeClass("active");
		}
	});
	
	$(document).on("click", ".toggle-password-btn", function(){
		var $dis = $(this), state = $dis.attr("data-state");
		switch(state){
			case "no":
				$dis.attr("data-state", "yes");
				$(".tpw").attr("type", "text");
				$dis.find("span").text("hide password");
				break;
			default:
				$dis.attr("data-state", "no");
				$(".tpw").attr("type", "password");
				$dis.find("span").text("Show password");
		}
	});
	
});
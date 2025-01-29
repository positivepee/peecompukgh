$(document).ready(function(){

    $(document).on("click", ".show-pam", function(e){
        e.stopPropagation();
		$(".page-aside-menu").show(0, function(){
			setTimeout(function(){
				$(".pam-main").addClass("opened");
				$("body, html").css("overflow", "hidden");	
			}, 350);
		});
    });

    $(document).on("click", ".aside-menu-closer", function(){
		$(".pam-main").removeClass("opened");
		setTimeout(function(){
			$(".page-aside-menu").hide(0, function(){
				$("body, html").css("overflow", "hidden").css("overflow-y", "auto");
			});
		}, 350);
    });

    $(document).on("click", function(e){
		$(".pam-main").removeClass("opened");
		setTimeout(function(){
			$(".page-aside-menu").hide(0, function(){
				$("body, html").css("overflow", "hidden").css("overflow-y", "auto");
			});
		}, 350);
    });
	
	$(document).on("click", ".pam-main", function(e){
        e.stopPropagation();
    });

});
var s = 0, is = true, sll = $(".slider-item-sect").length, sc = (sll - 1), sload = false, sto = null, mo = false;

$(document).ready(function(){

    createBullets();

    handleSliderResize();
	
	$(document).ready(function(){
		if(sll < 2){
			$(".sbl, .sbr").addClass("inactive");
		}
	});

    $(window).resize(function(){
        handleSliderResize(); //Get width on resize
    });

    //Autoplay slider
    sto = setInterval(function(){
        if(mo) return;
        s++;
        if(s > sc){
            s = 0;
        }

        $(".bul").each(function(){
            if(parseInt($(this).attr("data-index")) == s){
                s = parseInt($(this).attr("data-index"));
                slideContainer(null);
                $(".bul").removeClass("active");
                $(this).addClass("active");
            }
        });

    }, 3000);

    $(document).on("click", ".slider-btns", function(){
        var dir = $(this).attr("data-dir");
        slideContainer(dir);
    });

    $(document).on("mouseover", ".main-slider-content", function(){
        mo = true;
    });

    $(document).on("mouseout", ".main-slider-content", function(){
        mo = false;
    });

    $(document).on("click", ".bul", function(){
        s = parseInt($(this).attr("data-index"));
        slideContainer(null);
    });

});

function slideContainer(dir){
    if(sload){
        return;     
    }
    sload = true;
    var w = $(".slider-content")[0].clientWidth;
    switch(dir){
        case "left":
            s--;
            if(s < 0){
                s = 0;
                return;
            }
            $(".sc-main").css("transform", "translate3d(-" + (w * s) + "px, 0, 0)");
            $(".sc-main").css("-webkit-transform", "translate3d(-" + (w * s) + "px, 0, 0)");
            detectActiveBullet(s);
            restoreLoad();
            if(s < 1){
                $(".sbl").hide();
            }
            else{
                $(".sbl").show();
            }
            if(s > (sc - 1)){
                $(".sbr").hide();
            }
            else{
                $(".sbr").show();
            }
            break;
        case "right":
            s++;
            if(s > sc){
                s = sc;
                return;
            }
            $(".sc-main").css("transform", "translate3d(-" + (w * s) + "px, 0,0)");
            $(".sc-main").css("-webkit-transform", "translate3d(-" + (w * s) + "px, 0, 0)");
            detectActiveBullet(s);
            restoreLoad();
            if(s < 1){
                $(".sbl").hide();
            }
            else{
                $(".sbl").show();
            }
            if(s > (sc - 1)){
                $(".sbr").hide();
            }
            else{
                $(".sbr").show();
            }
            break;
        default:
            $(".sc-main").css("transform", "translate3d(-" + (w * s) + "px, 0,0)");
            $(".sc-main").css("-webkit-transform", "translate3d(-" + (w * s) + "px, 0, 0)");
            detectActiveBullet(s);
            restoreLoad();
            if(s < 1){
                $(".sbl").hide();
            }
            else{
                $(".sbl").show();
            }
            if(s > (sc - 1)){
                $(".sbr").hide();
            }
            else{
                $(".sbr").show();
            }    
    }
}

function handleSliderResize(){
	if($(".slider-content").length == 0) return;
    setTimeout(function(){
        var w = $(".slider-content")[0].clientWidth;
        $(".sc-main").width(w * sll);
        $(".sc-main div").width(w);
        $(".sc-main").css("transform", "translate3d(0, 0, 0)");
        $(".sbl").addClass("inactive");
        $(".sbr").removeClass("inactive");
        $(".bul").removeClass("active");
        $(".bul").first().addClass("active");
        s = 0;
    }, 10);
}

function createBullets(){
    for(var i = 0; i < sll; i++){
        $(".bullets").append("<span class='bul pcur' data-index='" + i + "'></span>");
    }
    detectActiveBullet(s);
}

function detectActiveBullet(s){
    $(".bul").each(function(){
        if(parseInt($(this).attr("data-index")) == s){
            $(".bul").removeClass("active");
            $(this).addClass("active");
        }
    });
}

function restoreLoad(){
    setTimeout(function(){
        sload = false;
    }, 360);
}
(function ($) {

var hwSlideSpeed = 300;
var hwTimeOut = 300000;
var hwNeedLinks = true;

$(document).ready(function(e) {
    $('.center-block-slider-item').css(
        {"position" : "absolute",
         "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $(".center-block-slider .center-block-slider-item").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.center-block-slider-item').eq(slideNum).fadeOut(hwSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
            }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
            }
        $('.center-block-slider-item').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
        }
if(hwNeedLinks){
// var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
//     .prependTo('#slider');      
    $('.center-block-slider-next').click(function(){
        animSlide("next");
 
        })
    $('.center-block-slider-prew').click(function(){
        animSlide("prew");
        })
}
    // var $adderSpan = '';
    // $('.center-block-slider-item').each(function(index) {
    //         $adderSpan += '<span class = "control-slide">' + index + '</span>';
    //     });
    // $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
    // $(".control-slide:first").addClass("active");
     
    // $('.control-slide').click(function(){
    // var goToNum = parseFloat($(this).text());
    // animSlide(goToNum);
    // });
    var pause = false;
    var rotator = function(){
    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
            }
    $('#slider-wrap').hover(    
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
});

})(jQuery);
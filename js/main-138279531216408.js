$(document).ready(function(){
//______________________________

// // Placeholder
// $('input, textarea').placeholder();


//Selects
// $("select option:last").addClass('last');
// $('.yellow-st, .gray-st, .w-check input, .w-check input, .month-select').styler();
// $('.w-check-label, .jq-checkbox').click(function(){
//     $(this).parent('.w-check').toggleClass('state_active');
// });



// // Popup
// $('.popup-close').click(function(){$.arcticmodal('close');});

// $('.js_popup').click(function(){
//     $('#exampleModal3').arcticmodal({
//         closeOnEsc: false,
//         closeOnOverlayClick: false,
//         overlay: {
//             css: {
//                 backgroundColor: '#000',
//                 opacity: 0.75
//             }
//         }
//     });
// });



// TABS
  $('.tabs').delegate('div:not(.state_active)', 'click', function() {
    $(this).addClass('state_active').siblings().removeClass('state_active');
    $('.tabs-content').find('.tabs-content-item').eq($(this).index()).fadeIn(150).siblings('.tabs-content-item').hide();
  });


if ($('div').is("#thumbs")) {
    $div = null;
    $('#thumbs').children().each(function(i) {
        if ( i % 6 == 0) {
            $div = $( '<div />' );
            $div.appendTo( '#thumbs' );
        }
        $(this).appendTo( $div );
        $(this).addClass( 'itm'+i );
        $(this).click(function() {
            $('#images').trigger( 'slideTo', [i, 0, true] );
        });
    });
    $('#thumbs img.itm0').addClass( 'selected' );

    //  the big-image carousel
    $('#images').carouFredSel({
        direction: 'up',
        circular: false,
        infinite: false,
        width: 968,
        height: 386,
        items: 1,
        auto: false,
        prev: '#prev .images',
        next: '#next .images',
        scroll: {
            fx: 'crossfade',
            onBefore: function() {
                var pos = $(this).triggerHandler( 'currentPosition' );
                $('#thumbs span').removeClass( 'selected' );
                $('#thumbs span.itm'+pos).addClass( 'selected' );
                
                var page = Math.floor( pos / 6 );
                $('#thumbs').trigger( 'slideToPage', page );
            }
        }
    });

    //  the thumbnail-carousel
    $('#thumbs').carouFredSel({
       
        direction: 'up',
        circular: false,
        infinite: false,
        width: 90,
        height: 386,
        items: 1,
        align: false,
        auto: false,
        prev: '#prev .thumbs',
        next: '#next .thumbs'
    },{ wrapper     : {
            element         : "div",
            classname       : "wrapper_thumb"
        }
    });
}


//Увеличение центрального блока
$('.js_galleryBlock').click(function(){
        $('.center-block-gallery').css('display','block').stop().animate( { fontSize:"10px" } , 200, function(){
            $(this).addClass('state_active');
            $('.center-block-menu-item').not('.center-block-menu-item.mod_center').addClass('transparent');
        } );
    });


// закрытие блока
$(document).click(function(e){
    if (  ($(e.target).parents().filter('.center-block-menu-item.mod_center').length !== 1)   ) {
        $('.center-block-gallery').removeClass('state_active').css('font-size','10px');
        $('.center-block-gallery').animate( { fontSize:"0px" } , 300, function(){
            $('.center-block-menu-item').removeClass('transparent');
            $(this).css('display','none');
        } );
    }
});

// Hover иконок
$('.center-block-slider-name').mouseenter(function(){
    $(this).parents('.center-block-slider-item').find('.center-block-slider-icon').addClass('state_active');
}).mouseleave(function(){
    $(this).parents('.center-block-slider-item').find('.center-block-slider-icon').removeClass('state_active');
});

if ($('.l-body').is('.mod_main-page')) {
    $.backstretch([
        "C:/Users/Vitaliy.Olemskiy/Desktop/fl.paznakomka.ru/img/screen/screen1.jpg"
        , "/img/screen/screen2.jpg"
        , "/img/screen/screen3.jpg"
        ], {duration: 8000, fade: 800});
}


// Паралакс
$('.about-excavator-fone-h').plaxmove({ratioH: 0.7,reversed: true});
// $('.about-excavator-fone-h1').plaxmove({ratioH: 0.03, reversed: true});
// $('.about-excavator-fone-h2').plaxmove({ratioH: 0.08});

// Слайдер причин
if ($('div').is('.cause-slider')) {
    $('.cause-slider .bjqs').carouFredSel({
        auto: false,
        circular: false,
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        pagination: ".cause-slider .bjqs-markers",
        scroll      : {
            fx              : "scroll",
            easing      : "elastic",
            duration    : 600,
            timeoutDuration: 1000
        }
    });

}


if ($('div').is('.gallery-slider')) {
    $('.gallery-slider .bjqs').carouFredSel({
            auto: false,
            circular: false,
            // mousewheel: true,
            // swipe: {
            //     onMouse: true,
            //     onTouch: true
            // },
            pagination: ".gallery-slider  .bjqs-markers",
            scroll      : {
                fx              : "scroll",
                easing      : "linear",
                duration    : 500,
                timeoutDuration: 500
            }
        });
}


$('.photo-slider').mouseenter(function(){
    $('.wrapper_thumb').fadeIn(500);
}).mouseleave(function(){$('.wrapper_thumb').fadeOut(500);});

// top-sub-header 
$('.top-sub-header').sticky({topSpacing:0});
$('.catalog-menu-icon-list').sticky({topSpacing:0});



// Colorbox
$(".group1").colorbox({rel:'group1', returnFocus: false, autoSize: false});
$(".group2").colorbox({rel:'group2', returnFocus: false, autoSize: false});
$(".group3").colorbox({rel:'group3', returnFocus: false, autoSize: false});
$(".group4").colorbox({rel:'group4', returnFocus: false, autoSize: false});
$(".group5").colorbox({rel:'group5', returnFocus: false, autoSize: false});
$(".group6").colorbox({rel:'group6', returnFocus: false, autoSize: false});

$(".video-box").colorbox({iframe:true, innerWidth:640, innerHeight:380});


// MAP block
$('.map-compas-link').click(function(){
    $(this).toggleClass('state_active')
    $(this).parents('.map-compas').find('.map-compas-note').fadeToggle();
});

var mapHeight = function() {

    var heightBody = $('.l-html').height() -  236;

    if (heightBody>600) {
        $('.maps-block').height(heightBody);
    }
    else {
        $('.maps-block').height(600);
    }
};

mapHeight();

$(window).resizeComplete(mapHeight,200);



//DRAG map

$('.tabs-item.mod_carer').click(function(){
    $('.carer-map').css('z-index',110);
});
$('.tabs-item.mod_office').click(function(){
    $('.carer-map').css('z-index',100);
});

$('.carer-map-hh').Draggable({
        zIndex:    10,
        ghosting:   false,
        containment: 'parent',
        opacity:    0.7});

var mapParentHeight = $('.carer-map-h').height(),
    mapParentWidth = $('.carer-map-h').width(),
    mapLeft = mapParentWidth/2 - 791,
    mapTop = mapParentHeight/2 - 562;
$('.carer-map-hh').css({"left":mapLeft, "top":mapTop});



// инициализация карты
if ($('div').is('.google-map'))  {
    initializeMap();
    $(window).resizeComplete(initializeMap,200);
}



// меню

    if(jQuery(".state_active").length>0){ // если есть активный пункт меню, то позиционируем двигающуюся плашку на нем
        var menuWidth = jQuery(".state_active").outerWidth(); // определяем ширину активного пункта меню
        var menuLeft = jQuery(".state_active").position().left; // определяем смещение активного пункта меню слева
        jQuery(".glide_sprite").stop().animate({ // анимируем движущуюся плашку
            left: menuLeft+'px',
            width: menuWidth+'px'
        }, 500, 'linear');
    }
    jQuery(".catalog-menu-icon .catalog-menu-icon-item").mouseover(function(){ // поведение движущейся плашки при наведении на любой пункт меню. Все тоже самое, что и при наличии активного пункта, только позиция плашки определяется относительно пункта, на который произошло наведение курсора мыши
            var menuWidth = jQuery(this).outerWidth();
            if ( $(this).hasClass('mod_icon1')) {
                var menuLeft = jQuery(this).position().left;
            } else {
                var menuLeft = jQuery(this).position().left+52;
            }
            // var menuLeft = jQuery(this).position().left;
            jQuery(".glide_sprite").stop().animate({
                left: menuLeft+'px',
                width: menuWidth+'px'
            }, 300, 'linear');      
    });
    jQuery(".catalog-menu-icon").mouseleave(function(){ // поведение плашки при окончании события наведения мыши на пункт меню (выход курсора мыши на пределы блока, в котором содержится меню)
        if(jQuery(".state_active").length<=0){ // если активного пункта нет, то перемещаем плашку за границу экрана
            jQuery(".glide_sprite").stop().animate({
                left: '-999px',
                width: '0px'
            }, 500, 'linear');
        }
        else{ // иначе, если есть активный пункт меню – возвращаем плашку на него
            var menuWidth = jQuery(".state_active").outerWidth();
            if ( $('.state_active').hasClass('mod_icon1')) {
                var menuLeft = jQuery(".state_active").position().left;
            } else {
                var menuLeft = jQuery(".state_active").position().left + 52;
            }
            jQuery(".glide_sprite").stop().animate({
                left: menuLeft+'px',
                width: menuWidth+'px'
            }, 500, 'linear');
        }
    });



// На верх
// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});


//Видео в каталоге
$('.product-video-title').click(function(){
    $('.product-video').toggleClass('state_active');
    $('.video').fadeToggle(300);
});


// 
$('.form-row.mod_mail').focusin(function(){$(this).addClass('focus')}).focusout(function(){$(this).removeClass('focus')});

$('#nav').onePageNav({
    currentClass: 'state_active',
    changeHash: false,
    scrollSpeed: 400,
    scrollOffset: '70',
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});


//Zoom
jQuery('.zoom').zoomy('mouseover',{
        zoomText: '',
        clickable: true,
        round: false,
        zoomSize: 84
    });

// POPUP
$('.md-trigger').click(function(e) {

    var ItmId = $(this).attr('data-modal');

    $(".md-modal").each(function(){
        if ($(this).attr('id') == ItmId ) {
            $(this).lightbox_me({
                centered: true,
                closeSelector: '.md-close',
                overlayCSS: { background: 'url(/img/colorbox/overlay.png) 0 0 repeat'}
                });
            e.preventDefault();
        }
    });

});



// Before after
if (($('.before-after').size()) >0 ) {
    $('.before-after').compareImages();
}

var panoramaW = function(){
    var panoramaWidth = $('.panorama').width();
    $('.panorama').width(panoramaWidth);
    $('.panorama-view').panorama360();
};

panoramaW();

$(window).resize(function(){
    panoramaW();
});


//______________________________
});

jQuery.fn.resizeComplete = function(fn, ms)
    {
    var timer = null;
    this.resize(function()
        {
        if (timer)
            {
            clearTimeout(timer);
            }
        timer = setTimeout(fn,ms);
        });
    }


//Error in 1.9 jquery msie
jQuery.browser={};(function(){jQuery.browser.msie=false;
jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();




// Карта

function initializeMap() {
    var MAP_STYLES = [
        {
            featureType: "all",
            stylers: [
                { saturation: -1000 }
            ]
        }, {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                { color: "#ffffff" }
            ]
        }, {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
                { visibility: "off" }
            ]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                { color: "#595959" }
            ]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                { color: "#dbdbdb" }
            ]
        }, {
            featureType: "transit.station",
            elementType: "labels.icon",
            stylers: [
                { lightness: 35 }
            ]
        }
    ];
    var MAP_OPTIONS = {
        styles: MAP_STYLES,
        zoom: 16,
        disableDefaultUI: true,
        panControl: true,
        zoomControl: true,
        streetViewControl: true,
        center: new google.maps.LatLng(55.778172, 37.586938),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var MAP = new google.maps.Map(document.getElementsByClassName("google-map")[0], MAP_OPTIONS);
    var MARKER_IMAGE = new google.maps.MarkerImage("/img/tech/marker.png",
        new google.maps.Size(103, 123)
        // ,
        // new google.maps.Point(0,0),
        // new google.maps.Point(15, 124)
    );
    var MARKER = new google.maps.Marker({
        position: new google.maps.LatLng(55.778172, 37.586938),
        map: MAP,
        icon: MARKER_IMAGE
    });


    var contentString = '<div id="content">'+
    '<div id="bodyContent">'+
    '<div class="note-logo"></div>'+
    '<div class="note-title"><b>Группа компаний Cantera</b></div>'+
    '<div class="note-text">Адрес офиса<br /> Краснодар, ул. Сормовская, д. 2</div>'+
    '<div class="gps"><b>GPS координаты:</b><br />широта N 45.022385°   долгота Е 39.053368°</div>'+
    '</div>'+
    '</div>';


var myOptions = {
             content: contentString
            ,disableAutoPan: false
            ,maxWidth: 330
            ,pixelOffset: new google.maps.Size(-3, -324)
            ,zIndex: null
            ,boxStyle: {
              background: "url('/img/tech/InfoWindow.png') no-repeat"
              // opacity: 0.75
              ,width: "428px"
              ,height: "224px"
             }
            ,closeBoxMargin: "15px"
            ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
            ,infoBoxClearance: new google.maps.Size(1, 1)
            ,isHidden: false
            ,pane: "floatPane"
            ,enableEventPropagation: false
        };

var infowindow = new google.maps.InfoWindow(myOptions);

// var marker = new google.maps.Marker({
//     position: myLatlng,
//     map: map,
//     title:"Uluru (Ayers Rock)"
// });

// google.maps.event.addListener(MARKER, 'click', function() {
//   infowindow.open(MAP,MARKER);
// });

        var ib = new InfoBox(myOptions);
        // ib.open(MAP,MARKER);
    google.maps.event.addListener(MARKER, "click", function (e) {
        ib.open(MAP, this);
    });

}











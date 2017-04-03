(function($){
    $.fn.plaxmove = function(options) {
        this.defaults = {
            ratioH: 0.1,
            reversed: false
        }
        var settings = $.extend({},this.defaults,options),
            layer = $(this),
            center = {
                x: $('html').width()/2-layer.width()/2
            },
            // x0 = layer.css('margin-left');
            // x0 = parseInt(layer.css('margin-left'), 10);

            x0 = 5395;


        var eqH = function(e) {
            // console.log((xIn-e.pageX)*settings.ratioH);
            return (xIn-e.pageX)*settings.ratioH;
        }

        // var eqW = function(e) {
        //     return y0+(e.pageY - center.y)*settings.ratioV
        // }

        var reverse = 0;
        if(settings.reversed) {
            reverse = 1;

        }
        var xIn = 0,
            x2In = 0;
        $('.about-excavator').mouseenter(function(e){
            xIn = (e.pageX);
        }).mouseleave(function(e){
            x0 = - parseInt(layer.css('margin-left'), 10);
        });
        $('.about-excavator').on('mousemove', function(e) {
            
            // var x = eqH(e) - x0 + x2In;
            if (reverse==1) {
                x0In = eqH(e);
                var x =  - eqH(e) - x0 ;
            }
            else {
                x0In = eqH(e);
                var x = eqH(e) - x0 +x0In;
            }
            // x2In = x;
            $(layer).css('margin-left', x);
        })

    };
})(jQuery);
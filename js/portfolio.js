/**********************Scroll Animation "START"************************************/
$(document).ready(function(){
    var $animation_elements = $('.anim');
    var $window = $(window);

    var $circles = $('.radial-progress');

    var $bars = $('.animateBar');

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('animated');
            } else {
                $element.removeClass('animated');
            }
        });

        $.each($circles, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                setTimeout(circleAnimate, 400);
            }
        });

        $.each($bars, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('bar');
            }
            else{
                $element.removeClass('bar');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});



function circleAnimate() {
    $('.radial-progress').each(function() {
        var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
        $(this).find('span').fadeTo('slow', 1);
        var score = $(this).data('score');
        var deg = (((100 / 5) * score) / 100) * 180;
        var rotation = deg;
        var fill_rotation = rotation;
        var fix_rotation = rotation * 2;
        for(i in transform_styles) {
            $(this).find('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
            $(this).find('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
        }
    });
}



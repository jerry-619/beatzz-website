$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.55;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.col-sm-6').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.1s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).css( {
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            }
        });
    }
    $('.col-sm-6').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});
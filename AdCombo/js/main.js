$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
        {
            breakpoint: 7680,
                settings: "unslick"
        },

        {
            breakpoint: 992,
                settings: "slick"
        },

    ],
});


$('.accordion').accordion({
	heightStyle: 'content',

});


$(function(){
    if ( $(window).width() > 1200 ) {

        $(document).ready(function() {
            function heightBlock(column) {
                var myblock = 0;
        
                column.each(function() {
                    thisHeight = $(this).height();
                    if (thisHeight > myblock) {
                        myblock = thisHeight;
                    }
                });
        
                column.height(myblock);
            };
        
            heightBlock($(".container-box > div"));
        });
    }
});


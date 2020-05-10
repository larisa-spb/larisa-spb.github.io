$(function(){
    $('.reviews__content').slick({
        nextArrow: '<button class="slick-arrrow slick-prev"><svg class="slick-arrow__icon"><use xlink:href="#arrow__prev"></use></svg></button>',
        prevArrow: '<button class="slick-arrrow slick-next"><svg class="slick-arrow__icon"><use xlink:href="#arrow__next"></use></svg></button>',
        responsive:[
			{
				breakpoint: 481,
				settings: {
					arrows: false

				
				}
			}
		]
    });
});

 
$(document).ready(function() {

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        $("html, body").animate({
            scrollTop: elementOffset
        }, 1000);
    });

});




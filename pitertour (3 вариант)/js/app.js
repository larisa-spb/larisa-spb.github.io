// scroll menu
$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});

// Slider
$(document).ready(function(){

   $('.tourslider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows:'.tour-arrows',
        prevArrow:'<span class="tour-prev"></span>',
        nextArrow:'<span class="tour-next"></span>',
        responsive: [
            {breakpoint: 900,settings: {slidesToShow: 2, dots: true}},
            {breakpoint: 599,settings: {slidesToShow: 1, dots: true}}
        ]
    });
    
});

$(document).ready(function(){

    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows:'.slider-arrows',
        prevArrow:'<span class="slider-prev"></span>',
        nextArrow:'<span class="slider-next"></span>',
        responsive: [
            {breakpoint: 900,settings: {slidesToShow: 1, dots: true}}
        ]
   });
    
});
// scroll menu
$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});




$(document).ready(function(){

    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows:'.slider-arrows',
        prevArrow:'<span class="slider-prev"></span>',
        nextArrow:'<span class="slider-next"></span>',
       // autoplay: true,
       // speed: 2000,
        //responsive: [{
            //breakpoint: 992,
            //settings: {
            //slidesToShow: 1
            //}
        //}]
    });
    
});
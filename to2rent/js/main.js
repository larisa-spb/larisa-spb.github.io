$(function(){
	$('.slider').slick({
		nextArrow: '<button class="slick-arrrow slick-prev"><img src="images/prev.svg" alt="prev arrow"></button>',
		prevArrow: '<button class="slick-arrrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
		fade:true,
		responsive:[
			{
				breakpoint: 441,
				settings: {
					arrows: false

				
				}
			}
		]
	});
});





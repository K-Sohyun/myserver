$(function(){
	var mainSwiper = new Swiper('#main_sec04 .swiper-container', {
		speed: 1000,
		loop : true,
		loopedSlides : 1,
		autoplay : {
			delay: 5000,
			disableOnInteraction : false,
		},
		pagination: {
			el: '#main_sec04 .slider_pagination',
			clickable : true
		},
		observer: true,
		observeParents: true,
	});
});
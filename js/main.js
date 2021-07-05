const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function () {	
   if (window.scrollY > 400) {
      header.classList.add('scroll');
		logo.src = 'img/logo-2.svg';
   } else {
      header.classList.remove('scroll');
		logo.src = 'img/logo-1.svg';
   }
});

$(function () {
	$('.carousel').on('touchstart', function(event){
		const xClick = event.originalEvent.touches[0].pageX;
		$(this).one('touchmove', function(event){
			 const xMove = event.originalEvent.touches[0].pageX;
			 const sensitivityInPx = 5;
  
			 if( Math.floor(xClick - xMove) > sensitivityInPx ){
				  $(this).carousel('next');
			 }
			 else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
				  $(this).carousel('prev');
			 }
		});
		$(this).on('touchend', function(){
			 $(this).off('touchmove');
		});
  });

	$('.slider-reviews__body').slick({
		dots: false,
		arrows: false,
		centerMode: true,
		centerPadding: '25%',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					centerPadding: '20%',
				},
			},
			{
				breakpoint: 1000,
				settings: {
					centerPadding: '15%',
				},
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '0',
				},
			},
		],
	});

	$('.slickPrev').on('click', function (event) {
		event.preventDefault();
		let currentSlider = $(this)
			.parents('.slider-reviews')
			.find('[data-slider="slick"]');
		currentSlider.slick('slickPrev');
	});

	$('.slickNext').on('click', function (event) {
		event.preventDefault();
		let currentSlider = $(this)
			.parents('.slider-reviews')
			.find('[data-slider="slick"]');
		currentSlider.slick('slickNext');
	});
});
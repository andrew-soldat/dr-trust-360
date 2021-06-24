const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function () {	
   if (window.scrollY > 400) {
      header.classList.add('scroll');
		logo.src = 'img/logo-2.png';
   } else {
      header.classList.remove('scroll');
		logo.src = 'img/logo-1.png';
   }
});

$(function () {
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
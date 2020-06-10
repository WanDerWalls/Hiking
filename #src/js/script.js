
$( document ).ready(function() {
    $('.best__slider').slick({
    	infinite: true,
    	swipeToSlide: true,
    	variableWidth: true,
    	arrows: false,
    	focusOnSelect: true,
		responsive: [
			{
				breakpoint: 991.98,
				settings: {
					centerMode: true,
				}
			},
		]
	});

    let counter = document.querySelector('.counter');
    let quantity = document.querySelector('.quantitySlides');
    let slider = document.querySelectorAll('.best__slide');
    let clone = document.querySelectorAll('.slick-cloned');

    	quantity.innerHTML = slider.length - clone.length;

    	// $('.best__arrow-left > img').addClass('disabled');

    $('.best__arrow-left img').click(function(){
    	$(".best__slider").slick('slickPrev');
	});
	$('.best__arrow-right img').click(function(){
    	$(".best__slider").slick('slickNext');
	});

	$('.best__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

		counter.innerHTML = nextSlide + 1;

		/*if (counter.innerHTML == '1') {
			$('.best__arrow-left > img').addClass('disabled');
		} else {
			$('.best__arrow-left > img').removeClass('disabled');
		}

		if (counter.innerHTML == quantity.innerHTML) {
			$('.best__arrow-right').addClass('disabled');
		} else {
			$('.best__arrow-right').removeClass('disabled');
		}*/
	});

	$('a[href^="#"]').on('click', function(event) {

		event.preventDefault();

		let where = $(this).attr("href"),
			position = $(where).offset().top;

		$('html, body').animate({scrollTop: position}, 1000);
	});

	$('#sandwichmenu').on('click', function(event) {
		event.preventDefault();

		let $sandwich = $('#sandwichmenu, .header, .menu');
		
		$sandwich.toggleClass("active");
		$('body').toggleClass('lock');

		$(".menu a").on('click', function() {
			$sandwich.removeClass("active");
			$('body').removeClass('lock');
		});
	});

	$('.header__btn').on('click', function () {
		let $popup = $('.overlay_popup, .popup');

		$popup.fadeIn( "slow" );
		$('body').addClass('lock');

		$('.popup__close').on('click', function () {
			$popup.fadeOut( "slow" );
			$('body').removeClass('lock');
		})
	})	
});
$(function () {

// Fixed navigation
$(window).scroll(function() {
	if ($(this).scrollTop() > 600){  
		$('nav').addClass("sticky");
	}
	else{
		$('nav').removeClass("sticky");
	}
});

	// Menu hamburger
	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('d-none');
		$('.nav-menu').toggleClass('menu-opener');
	});

	// Button UP
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},1000);
	});

	 // плавное перемещение страницы к нужному блоку
	 $('.go').click(function (e) {
	 	e.preventDefault();
	 	elementClick = $(this).attr('href');
	 	destination = $(elementClick).offset().top;
	 	$('body,html').animate({scrollTop: destination }, 1000);
	 });

// Animated.css
$(window).scroll(function() {
	$('.about__link a').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+750) {
			$(this).addClass('animate__fadeInUp');
		}
	});
});

$(window).scroll(function() {
	$('.about-store__item').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass('animate__fadeInUp');
		}
	});
});

$(window).scroll(function() {
	$('.img__item').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass('animate__fadeInRight');
		}
	});
});

$(window).scroll(function() {
	$('.corsets-img__item').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass('animate__fadeInRight');
		}
	});
});

});



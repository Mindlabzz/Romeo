'use strict';

//AOS.init({
//	duration: 1200,
//	once: true,
//	mirror: false
//})

$(window).on('load', function() {
     AOS.init({
		 duration: 1200,
		 once: true,
		 mirror: false}
	 );
 });



const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

// burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				pageYOffset -
				document.querySelector('.header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');

				// auto close sub-menu
				if (
					menuBody.dataset.sub_menu_auto_close &&
					document.body.classList.contains('_touch')
				) {
					let menuArrows = document.querySelectorAll('.menu__arrow');
					for (let index = 0; index < menuArrows.length; index++) {
						menuArrows[index].parentElement.classList.remove('_active');
					}
				}
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}

$(document).ready(function() {
	$('#bgvideo').on('loadstart', function (event) {
		$(this).addClass('loading');
	});

	$('#bgvideo').on('canplay', function (event) {
		$(this).removeClass('loading');
		$(this).attr('poster', '');
	});
});


$('#logo').click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 500);
	return false;
});

jQuery(document).ready(function($) {	
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }  
});


$("#myModal").click( function (){
    if( $("video").prop('muted') ) {
          $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });
	
	setTimeout(function () {
		$('#myModal').modal('show');
	}, 1000);

	

	//$(".play-button").modalVideo({
//		youtube:{
//			controls:0,
//			nocookie: true
//		}
//	});



$(document).ready(function() {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1500,
        draggable: true,
        infinite: true,
		pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		//fade: true,
		//cssEase: 'linear',
        arrows: true,
        dots: false,		
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
        ]
    });
});

$('.testimonial-slider').on('init', function(event, slick){
  console.log('.testimonial-slider init');

        AOS.init({
            easing: 'ease-out-back',
            duration: 1000
        });
});

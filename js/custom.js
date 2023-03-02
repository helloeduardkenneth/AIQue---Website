
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/slideshow/Newbie.jpg", 
      "images/slideshow/WalkThePlanet.jpg",
      "images/slideshow/QUBE.jpg",
      "images/slideshow/Giraffee.jpg"
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);

  // Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 800, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});
  

// QUBE
  
let popup_qube = document.getElementById("popup_qube");

  function openPopupQube() {
    popup_qube.classList.add("open-popup");
  }

  function closePopupQube() {
    popup_qube.classList.remove("open-popup");
  }

// WalkThePlanet
  
let popup_walktheplanet = document.getElementById("popup_walktheplanet");

  function openPopupWalkThePlanet() {
    popup_walktheplanet.classList.add("open-popup");
  }

  function closePopupWalkThePlanet() {
    popup_walktheplanet.classList.remove("open-popup");
  }  

// Newbie
  
let popup_newbie = document.getElementById("popup_newbie");

  function openPopupNewbie() {
    popup_newbie.classList.add("open-popup");
  }

  function closePopupNewbie() {
    popup_newbie.classList.remove("open-popup");
  }

// Giraffee
  
let popup_giraffee = document.getElementById("popup_giraffee");

  function openPopupGiraffee() {
    popup_giraffee.classList.add("open-popup");
  }

  function closePopupGiraffee() {
    popup_giraffee.classList.remove("open-popup");
  }

// Slick Slider

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
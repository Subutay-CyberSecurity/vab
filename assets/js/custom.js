(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	})

	var width = $(window).width();
		$(window).resize(function() {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	// Course Filter
	const courseGrid = document.querySelector('.course-grid');
	const filterMenu = document.querySelector('.filter-menu');
	if (courseGrid) {
		const courseFilter = new Isotope(courseGrid, {
			itemSelector: '.course-item',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: '.course-item'
			}
		});
		
		if (filterMenu) {
			filterMenu.addEventListener('click', function(event) {
				if (!matchesSelector(event.target, 'a')) {
					return;
				}
				event.preventDefault();
				
				const filterValue = event.target.getAttribute('data-filter');
				courseFilter.arrange({
					filter: filterValue
				});
				
				// Active class güncelleme
				filterMenu.querySelector('.is_active').classList.remove('is_active');
				event.target.classList.add('is_active');
			});
		}
	}

	


	$('.owl-banner').owlCarousel({
		center: true,
      items:1,
      loop:true,
      nav: true,
	  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      margin:30,
      responsive:{
        992:{
            items:1
        },
		1200:{
			items:1
		}
      }
	});

	$('.owl-testimonials').owlCarousel({
	  center: true,
      items:1,
      loop:true,
      nav: true,
	  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      margin:30,
      responsive:{
        992:{
            items:1
        },
		1200:{
			items:1
		}
      }
	});


	// Yeni Menu Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').toggleClass('active');
		});
	}
	
	// Header scroll effect
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.header-area').addClass('scrolled');
		} else {
			$('.header-area').removeClass('scrolled');
		}
	});


	// Menu elevator animation
	$('.scroll-to-section a[href*=\#]:not([href=\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 767) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').removeClass('active');
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	      
	        var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing');
	    });
	});


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }
    
    // Copyright yılı için otomatik güncelleme
    document.getElementById('current-year').textContent = new Date().getFullYear();

})(window.jQuery);
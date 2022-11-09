jQuery(function() {

	// ibg class
		if('objectFit' in document.documentElement.style === false){
		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

		    var image = el.querySelector('img');
		    el.style.backgroundImage = 'url("'+image.src+'")';
		    el.classList.add('ibg');
		    el.classList.remove('_fit');
 		 });
		}
	// End ibg class

	jQuery(document).on('click', function(e) {
		var $target = $(e.target);

		// catalog toggle
		if($target.attr('id') === 'catalog-toggle' || $target.closest('#catalog-toggle').length > 0){
			$('html').toggleClass('catalog-visible');
			if(screen.width <= 1100){
				$('html').toggleClass('multilevel-panel-opened');

			}
			// $('html').toggleClass('multilevel-panel-opened');
		}
		else if(!$target.hasClass('header__catalog') && $target.closest('.header__catalog').length === 0 && $target.attr('id') !== 'multilevel-panel-close'){
			$('html').removeClass('catalog-visible multilevel-panel-opened');
			// panel.reset();
		}
		// END catalog toggle

		// main menu toggle
		if($target.attr('id') === 'main-menu-opener' || $target.closest('#main-menu-opener').length > 0){
			$('html').addClass('main-menu-visible');
		}else{
			$('html').removeClass('main-menu-visible');

		}

		if($target.attr('id') === 'main-menu-closer' || $target.closest('#main-menu-closer').length > 0){
			$('html').removeClass('main-menu-visible');
		}
		// END main menu toggle

		// catalog filter toggle
		if($target.hasClass('page-catalog__toggle') || $target.closest('.page-catalog__toggle').length > 0){
			$('html').toggleClass('filters-opened');

			var $filters = $target.closest('.page-catalog__filters')
			
			$filters.find('.page-catalog__toggle').text($target.text() === 'Показать фильтры' ? 'Скрыть фильтры' : 'Показать фильтры');
			
			$filters.find('.page-catalog__filters-list').fadeToggle();
			
		}
		// 	END catalog filter toggle

		// product card like
		if($target.hasClass('product-like') || $target.closest('.product-like').length > 0){
			$target.closest('.product-card').toggleClass('liked');
		}
		if($target.hasClass('order-page-card__to-fav') || $target.closest('.order-page-card__to-fav').length > 0){
			$target.closest('.order-page-card__to-fav').toggleClass('liked');
		}
		// END product card like

		// catalog cards view change
		if($target.attr('id') === 'cards-to-tiles' || $target.closest('#cards-to-tiles').length > 0){
			$target.closest('.page-catalog').find('.product-cards').removeClass('product-cards--list');
			switcherSiblings($target.closest('#cards-to-tiles'));
		}
		if($target.attr('id') === 'cards-to-list' || $target.closest('#cards-to-list').length > 0){
			$target.closest('.page-catalog').find('.product-cards').addClass('product-cards--list');
			switcherSiblings($target.closest('#cards-to-list'));
		}

		function switcherSiblings($button) {
			$button.addClass('active')
				.siblings()
				.removeClass('active');
		}
		// END catalog cards view change

		// add-to-card popup
		if($target.hasClass('versions-table__to-cart') || $target.closest('.versions-table__to-cart').length > 0){
			$.magnificPopup.open({
			  items: {
			    src: '#popup-add-cart'
			  },
			  type: 'inline',
			  preloader: false,
				focus: '#name',
				fixedContentPos: false,

				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					}
				}

			  // You may add options here, they're exactly the same as for $.fn.magnificPopup call
			  // Note that some settings that rely on click event (like disableOn or midClick) will not work here
			}, 0);

			setTimeout(function() {
				$.magnificPopup.close();
			}, 3000);

			return false;
		}
		// END add-to-card popup
	
	}); //$(documrnt).click()
	
	jQuery(document).ready(function() {
		
		// header-search list toggle
		$('#header-search-input').on('focus', function(e) {
			$(this).closest('.header__search').addClass('opened');
		});
		$('#header-search-input').on('blur', function(e) {
			$(this).closest('.header__search').removeClass('opened');
		});
		// END header-search list toggle
		
		// main-slider
		if($('.main-slider__carousel').length > 0){
			$('.main-slider__carousel').slick({
				dots: true,
				fade: true,
				infinite: false
			});
		}
		// END main-slider

		// product-cards-slider
		if($('.product-cards-slider').length > 0){
			$('.product-cards-slider').each(function() {
				var $slider = $(this); 
				
				$slider.slick({
					slidesToScroll: 1,
					slidesToShow: 4,
					prevArrow: $slider.closest('.carouseled').find('.slider-prev'),
					nextArrow: $slider.closest('.carouseled').find('.slider-next'),
					infinite: false,
					responsive: [
						{
							breakpoint: 601,
							settings: {
									slidesToShow: 1
							}	
						},

						{
							breakpoint: 992,
							settings: {
									slidesToShow: 2,
							}	
						},
						{
							breakpoint: 1201,
							settings: {
								slidesToShow: 3,

							}	
						}
					]
				});
			
			});

		}
		// END product-cards-slider

		// news__slider
		if($('.news__slider').length > 0){
			$('.news__slider').slick({
				slidesToScroll: 1,
				slidesToShow: 3,
				prevArrow: $('.news').find('.slider-prev'),
				nextArrow: $('.news').find('.slider-next'),
				infinite: false,
				responsive: [

					{
						breakpoint: 601,
						settings: {
							slidesToShow: 1

						}	
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2

						}	
					}
				]
			});
		}
	// END news__slider

	// video-slider
	if($('.video__slider').length > 0){

		$('.video__slider').slick({
			slidesToScroll: 1,
			slidesToShow: 3,
			infinite: false,
			prevArrow: $('.video').find('.slider-prev'),
			nextArrow: $('.video').find('.slider-next'),
			responsive: [

				{
					breakpoint: 601,
					settings: {
						slidesToShow: 1

					}	
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2

					}	
				}
			]
		});
	}
	// END video-slider

	// video iframe url copy
		 if($('.video-wrapper iframe').length > 0){
		 	$('.video-wrapper iframe').each(function(i, item) {
			 	var $this = $(item),
			 			$iframeParent = $this.next('.card-video_link'),
			 			$videoTitle = $this.closest('.card-video').find('.card-video__title'),
			 			stringArray = $this.attr('data-src').split('/'),
			 			filename = stringArray[stringArray.length - 1];

	 			if($this.attr('title') === 'YouTube video player'){
	 				$iframeParent.attr('href', 'http://www.youtube.com/watch?v=' + filename);
	 				$videoTitle.attr('href', 'http://www.youtube.com/watch?v=' + filename);
	 			}else{
	 				$iframeParent.attr('href', $this.attr('src'));
	 				$videoTitle.attr('href', $this.attr('src'));
	 			}
		 	});
		 }
	 // END video iframe url copy

	 // video-popup
	if($('.popup-video').length > 0){
			
		$('.popup-video').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	}
	 // END video-popup


		// product-card sluders
		if($('.page-card__slider').length > 0 && $('.page-card__slider-nav').length > 0){
			$('.page-card__slider').slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: true,
				  infinite: false,
				  // fade: true,
				  dots: false,
				  asNavFor: '.page-card__slider-nav',
				  prevArrow: $('.page-card__screen .slider-prev'),
					nextArrow: $('.page-card__screen .slider-next')
				});
			$('.page-card__slider-nav').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: false,
			  asNavFor: '.page-card__slider',
			  // centerMode: true,
			  focusOnSelect: true
			});
			 
		}
		// END product-card sluders


		// product-info tabs slider
		// if($('.product-info__tabs-list').length > 0 && $('.product-info__tabs-content').length > 0){
		// 	$('.product-info__tabs-list').slick({
		// 		  slidesToShow: 1,
		// 		  slidesToScroll: 1,
		// 		  arrows:false,
		// 		  infinite: false,
		// 		  dots: false,
		// 		  asNavFor: '.product-info__tabs-content'
		// 		});

		// 	$('.product-info__tabs-content').slick({
		// 	  slidesToShow: 1,
		// 	  slidesToScroll: 1,
		// 	  arrows:false,
		// 		dots: false,
		// 	  infinite: false,
		// 	  asNavFor: '.product-info__tabs-list',
		// 	  focusOnSelect: true,
		// 	  responsive: [
		// 			{
		// 				breakpoint: 991,
		// 				settings: {
		// 	  				adaptiveHeight: true
		// 				}	
		// 			}
		// 		]
		// 	});
		// }
		// END product-info tabs slider

		// tabs
		$('.tabs__item').on('click', function(e) {
			e.preventDefault();
			var $th = $(this),
				$thisTabsContainer = $th.closest('.tabs'),
				$thisTabsContent = $thisTabsContainer.find('.tabs__content'),
				$thIndex = $(this).index();

			$th.addClass('tabs__item--active')
				.siblings()
				.removeClass('tabs__item--active');

			$thisTabsContent.find('.tabs__item').eq($thIndex).removeClass('hidden')
				.siblings()
				.addClass('hidden');
		});
		// END tabs

		// datepicker

		if($('.for-datepicker').length > 0){
			 var datePicker = {
		        'init': function () {
		            $('.for-datepicker').datepicker({
		                autoClose: true
		            });
		        }
		    };
		    datePicker.init();
		}
		// END datepicker

		$('.autorization__enter').on('submit', function(e) {
			e.preventDefault();
			$.ajax({
				url: "delivery.html",
				method: 'get', 
				dataType: 'html',
				context: $('.page-cart'),
				success: function(data){
					$(this).find('.autorization').remove();
					$(this).find('.digital-delivery').append($(data).html());
				},
				error: function (jqXHR, exception) {
				}
			}); 
		});

		//---------------Swiper
		if(document.querySelector('.main-slider .swiper') !== null){
			const swiper = new Swiper('.main-slider .swiper', {
		  // fadeEffect: { crossFade: true },
			effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			//spaceBetween: 0,
			//autoHeight: true,
			speed: 1600,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
		  // direction: 'vertical',
		  loop: false,

		  // If we need pagination
		  pagination: {
		  	el: '.swiper-pagination',
		  	type: 'bullets',
		  	clickable: true,
			//custom pagination
			//type: 'custom',
			//renderCustom: (swiper, current, total) => {
				//return current.toString().length > 1 ? current : '0'+current;
			//}
		},

		  // Navigation arrows
		  navigation: {
		  	nextEl: '.swiper-button-next',
		  	prevEl: '.swiper-button-prev',
		  }
		});
	}
//---------------END Swiper


	if(document.querySelector('.tiny-slider') !== null){
		var slider = tns({
			container: '.tiny-slider',
			items: 1,
	    // autoplay: true,
	    gutter: 30,
	    slideBy: 'page',
	    mouseDrag: true,
	    speed: 500,
	    loop: false,
	    nav: false,
	    controlsContainer: '.hits.carouseled .block-header__nav', // внутри .block-header__nav должны быть 2 заранее отстилизованные кнопки
	    responsive: {
	    	601: {
	    		items: 2
	    	},
	    	992: {
	    		items: 3
	    	},
	    	1201: {
	    		items: 4
	    	}
	    }

	  });

	}

	//---------------Swiper
if(document.querySelector('.page-card__screen') !== null){
	const swiperNav = new Swiper('.swiper-nav-slider', {
		slidesPerView: 4,
	  loop: false,
	  spaceBetween: 10,
	  // Navigation arrows
	  navigation: false,
	  navigation: {
	  	nextEl: '.swiper-button-next',
	  	prevEl: '.swiper-button-prev',
	  }
	});

  const swiperScreen = new Swiper('.swiper-car-slider', {
		slidesPerView: 1,
	  loop: false,
	  thumbs: {
	  	swiper: swiperNav
	  },
	  // Navigation arrows
	  navigation: {
	  	nextEl: '.page-card__screen .slider-prev',
	  	prevEl: '.page-card__screen .slider-next',
	  }
	});

}
//---------------END Swiper

		
	}); //END jquery document ready
	
});


/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";
var	html = jQuery('html'),
	photty_fullscreen_slider = jQuery('.photty_fullscreen_slider'),
	photty_fullscreen_slider_wrapper = jQuery('.photty_fullscreen_slider_wrapper'),
	photty_fullscreen_title_wrapper = jQuery('.photty_slideshow_title_wrapper'),
	photty_fullscreen_title = jQuery('.photty_slideshow_title'),
	photty_fullscreen_descr = jQuery('.photty_slideshow_caption'),
	photty_fullscreen_controls = jQuery('.photty_fullscreen_controls'),
	max_slide = photty_fullscreen_slider.find('.photty_fullscreen_slide').length,
	photty_thumbs = jQuery('.photty_fullscreen_thumbs_wrapper');

/* Start Sldier */
if (jQuery('.photty_fullscreen_slider').length > 0) {
	jQuery(document.documentElement).keyup(function (event) {
		if ((event.keyCode == 37)) {
			photty_fullscreen_prevSlide();
		} else if ((event.keyCode == 39)) {
			photty_fullscreen_nextSlide();
		}
	});
}
var photty_fullscreen_interval = setInterval('photty_fullscreen_nextSlide()', photty_fullscreen_slider.attr('data-interval'));
clearInterval(photty_fullscreen_interval);
jQuery('.photty_fullscreen_play_pause').removeClass('photty_fullscreen_state_play');

jQuery(document).ready(function ($) {
	if (jQuery('.photty_fullscreen_slider').length > 0) {
		photty_preloader();
		html.addClass('photty_fullscreen_slider').addClass('photty_transparent_header');;
		if (photty_fullscreen_slider.attr('data-nav') == 'thumbs') {
			html.addClass('photty_slider_w_thumbs');
		} else {
			html.addClass('photty_slider_w_arrows');
		}
		jQuery('.photty_fullscreen_slider_prev').on('click', function () {
			photty_fullscreen_prevSlide();
		});
		jQuery('.photty_fullscreen_slider_next').on('click', function () {
			photty_fullscreen_nextSlide();
		});
		jQuery('.photty_fullscreen_controls_toggler').on('click', function () {
			html.toggleClass('photty_fullscreen_fullview');
		});
		jQuery('.photty_fullscreen_thmb').on('click', function () {
			photty_setSlide(jQuery(this).attr('data-count'));
		});
		
		
		jQuery('.photty_fullscreen_play_pause').on('click', function(){
			if (jQuery(this).hasClass('photty_state_play')) {
				clearInterval(photty_fullscreen_interval);
			} else {
				photty_fullscreen_interval = setInterval('photty_fullscreen_nextSlide()', photty_fullscreen_slider.attr('data-interval'));
			}
			jQuery('.photty_fullscreen_play_pause').toggleClass('photty_state_play');
		});

		//Touch Events
		var touch_container = photty_fullscreen_slider;
		touch_container.on("swipeleft", function () {
			photty_fullscreen_nextSlide();
		});
		touch_container.on("swiperight", function () {
			photty_fullscreen_prevSlide();
		});
		var set_step = 0;
		 // photty_setGalleryContainer();
	}
	
});

jQuery(window).resize(function () {
	// if (jQuery('.photty_fullscreen_slider').length > 0) {
	// 	photty_setGalleryContainer(jQuery('.photty_fullscreen_gallery_container'));
	// }
});

function photty_fullscreen_prevSlide() {
	var cur_slide = parseInt(jQuery('.current-slide').attr('data-count'), 10);
	cur_slide--;
	var max_slide = photty_fullscreen_slider.find('.photty_fullscreen_slide').length;
	if (cur_slide > max_slide) cur_slide = 1;
	if (cur_slide < 1) cur_slide = max_slide;	
	photty_setSlide(cur_slide);
}

function photty_fullscreen_nextSlide() {
	var cur_slide = parseInt(jQuery('.current-slide').attr('data-count'), 10);
	cur_slide++;
	var max_slide = photty_fullscreen_slider.find('.photty_fullscreen_slide').length;
	if (cur_slide > max_slide) cur_slide = 1;
	if (cur_slide < 1) cur_slide = max_slide;
	photty_setSlide(cur_slide);
}

function photty_setSlide(slideNum) {
	clearInterval(photty_fullscreen_interval);
	var slideNum = parseInt(slideNum, 10);
	jQuery('.prev-slide').removeClass('prev-slide');
	jQuery('.current-slide').removeClass('current-slide');
	jQuery('.next-slide').removeClass('next-slide');

	if((parseInt(slideNum, 10)+1) > max_slide) {
		var nextSlide = jQuery('.photty_fullscreen_slide1');
	} else if ((parseInt(slideNum, 10)+1) == max_slide){
		var nextSlide = jQuery('.photty_fullscreen_slide'+max_slide);
	} else {
		var nextSlide = jQuery('.photty_fullscreen_slide'+(parseInt(slideNum, 10)+1));
	}
	
	if((parseInt(slideNum, 10)-1) < 1) {
		var prevSlide = jQuery('.photty_fullscreen_slide'+max_slide);
	} else if ((slideNum-1) == 1){
		var prevSlide = jQuery('.photty_fullscreen_slide1');
	} else {
		var prevSlide = jQuery('.photty_fullscreen_slide'+(parseInt(slideNum, 10)-1));
	}

	prevSlide.addClass('prev-slide');
	var curSlide = jQuery('.photty_fullscreen_slide'+slideNum);
	
	curSlide.addClass('current-slide');
	nextSlide.addClass('next-slide');
	
	if (prevSlide.find('iframe').length > 0) {
		prevSlide.find('iframe').remove();
	}
	if (nextSlide.find('iframe').length > 0) {
		nextSlide.find('iframe').remove();
	}
	if (prevSlide.find('div').length > 0) {
		prevSlide.find('div').remove();
	}
	if (nextSlide.find('div').length > 0) {
		nextSlide.find('div').remove();
	}
	photty_fullscreen_title_wrapper.fadeOut(500, function () {
		setTimeout("photty_fullscreen_title.html(jQuery('.current-slide').attr('data-title'))",100);
		setTimeout("photty_fullscreen_descr.html(jQuery('.current-slide').attr('data-descr'))",100);
		setTimeout("photty_fullscreen_title_wrapper.fadeIn(500)",200);
	});
	curSlide.attr('style', 'background:url(' + curSlide.attr('data-src') + ') no-repeat;');
	nextSlide.attr('style', 'background:url(' + nextSlide.attr('data-src') + ') no-repeat;');
	prevSlide.attr('style', 'background:url(' + prevSlide.attr('data-src') + ') no-repeat;');

	if (!prevSlide.hasClass('was_showed')) {
		prevSlide.addClass('was_showed');
	}
	if (!curSlide.hasClass('was_showed')) {
		curSlide.addClass('was_showed');
	}
	if (!nextSlide.hasClass('was_showed')) {
		nextSlide.addClass('was_showed');
	}
	
	if (photty_thumbs.length > 0) {
		if (max_slide < 5) {
			if (!jQuery('.photty_fullscreen_thumbs_wrapper').hasClass('photty_three_thumbs')) {
				jQuery('.photty_fullscreen_thumbs_wrapper').addClass('photty_three_thumbs');
			}
			jQuery('.photty_thmb_prev').removeClass('photty_thmb_prev');
			jQuery('.photty_thmb_current').removeClass('photty_thmb_current');
			jQuery('.photty_thmb_next').removeClass('photty_thmb_next');
			
			var curSlide = jQuery('.photty_fullscreen_thmb'+slideNum);
			curSlide.addClass('photty_thmb_current');
	
			if((parseInt(slideNum, 10)+1) > max_slide) {
				var nextSlide = jQuery('.photty_fullscreen_thmb1');
			} else if ((parseInt(slideNum, 10)+1) == max_slide){
				var nextSlide = jQuery('.photty_fullscreen_thmb'+max_slide);
			} else {
				var nextSlide = jQuery('.photty_fullscreen_thmb'+(parseInt(slideNum, 10)+1));
			}
			
			if((parseInt(slideNum, 10)-1) < 1) {
				var prevSlide = jQuery('.photty_fullscreen_thmb'+max_slide);
			} else if ((slideNum-1) == 1){
				var prevSlide = jQuery('.photty_fullscreen_thmb1');
			} else {
				var prevSlide = jQuery('.photty_fullscreen_thmb'+(parseInt(slideNum, 10)-1));
			}
	
			prevSlide.addClass('photty_thmb_prev');
			curSlide.addClass('photty_thmb_current');
			nextSlide.addClass('photty_thmb_next');

		} else {
			jQuery('.photty_thmb_prev2').removeClass('photty_thmb_prev2');
			jQuery('.photty_thmb_prev').removeClass('photty_thmb_prev');
			jQuery('.photty_thmb_current').removeClass('photty_thmb_current');
			jQuery('.photty_thmb_next').removeClass('photty_thmb_next');
			jQuery('.photty_thmb_next2').removeClass('photty_thmb_next2');
			
			var curSlide = jQuery('.photty_fullscreen_thmb'+slideNum);
			curSlide.addClass('photty_thmb_current');
	
			if((parseInt(slideNum, 10)+1) > max_slide) {
				var nextSlide = jQuery('.photty_fullscreen_thmb1');
				var nextSlide2 = jQuery('.photty_fullscreen_thmb2');
			} else if ((parseInt(slideNum, 10)+1) == max_slide){
				var nextSlide = jQuery('.photty_fullscreen_thmb'+max_slide);
				var nextSlide2 = jQuery('.photty_fullscreen_thmb1');
			} else {
				var nextSlide = jQuery('.photty_fullscreen_thmb'+(parseInt(slideNum, 10)+1));
				var nextSlide2 = jQuery('.photty_fullscreen_thmb'+(parseInt(slideNum, 10)+2));
			}
			
			if((parseInt(slideNum, 10)-1) < 1) {
				var prevSlide = jQuery('.photty_fullscreen_thmb'+max_slide);
				var prevSlide2 = jQuery('.photty_fullscreen_thmb'+(max_slide-1));
			} else if ((slideNum-1) == 1){
				var prevSlide = jQuery('.photty_fullscreen_thmb1');
				var prevSlide2 = jQuery('.photty_fullscreen_thmb'+max_slide);
			} else {
				var prevSlide = jQuery('.photty_fullscreen_thmb'+(parseInt(slideNum, 10)-1));
				var prevSlide2 = jQuery('.photty_fullscreen_thmb'+(parseInt(slideNum, 10)-2));
			}
	
			prevSlide2.addClass('photty_thmb_prev2');
			prevSlide.addClass('photty_thmb_prev');
			curSlide.addClass('photty_thmb_current');
			nextSlide.addClass('photty_thmb_next');
			nextSlide2.addClass('photty_thmb_next2');	
		}
	}
	
	if (jQuery('.photty_fullscreen_play_pause').hasClass('photty_state_play')) {
		photty_fullscreen_interval = setInterval('photty_fullscreen_nextSlide()', photty_fullscreen_slider.attr('data-interval'));
	}
}

function run_photty_fullscreen_slider() {
	photty_fullscreen_slider.addClass('started');
	if (photty_fullscreen_slider.attr('data-autoplay') == 'yes') {
		jQuery('.photty_fullscreen_play_pause').addClass('photty_state_play');
		clearInterval(photty_fullscreen_interval);
		photty_fullscreen_interval = setInterval('photty_fullscreen_nextSlide()', photty_fullscreen_slider.attr('data-interval'));
	}
	photty_setSlide(1);
}

function slide_not_loaded(slide_num) {
	var slide_num = parseInt(slide_num, 10);
	var curSlide = jQuery('.photty_fullscreen_slide'+slide_num);
	if (curSlide.attr('data-type') == 'image' && !curSlide.hasClass('photty_slide_loaded'))  {
		curSlide.attr('style', 'background:none');
		setTimeout("slide_not_loaded(jQuery('.current-slide').attr('data-count'))",500);	
	} else {
		photty_setSlide(slide_num);
	}
}
/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";
var	html = jQuery('html'),
	photty_ribbon_slider_wrapper = jQuery('.photty_ribbon_slider_wrapper'),
	photty_ribbon_slider = jQuery('.photty_ribbon_slider'),
	photty_ribbon_slide = jQuery('.photty_ribbon_slide'),
	photty_ribbon_title_wrapper = jQuery('.photty_ribbon_title_wrapper'),
	photty_ribbon_title = jQuery('.photty_ribbon_title'),
	photty_ribbon_descr = jQuery('.photty_ribbon_caption'),
	r_max_slide = photty_ribbon_slider.find('.photty_ribbon_slide').length;

jQuery(document.documentElement).keyup(function (event) {
	if ((event.keyCode == 37)) {
		//Left Button
		photty_ribbon_prevSlide();
	} else if ((event.keyCode == 39)) {
		//Right Button
		photty_ribbon_nextSlide();
	}
});

if (photty_ribbon_slider.attr('data-interval') !== '' && parseInt(photty_ribbon_slider.attr('data-interval'), 10) > 0) {
	var photty_ribbon_interval = setInterval('photty_ribbon_nextSlide()', parseInt(photty_ribbon_slider.attr('data-interval'), 10));
	if (photty_ribbon_slider.attr('data-autoplay') == 'yes') {
		jQuery('.photty_ribbon_btn_play').removeClass('photty_state_pause');
	} else {
		clearInterval(photty_ribbon_interval);
	}	
}

jQuery(document).ready(function ($) {
	if (jQuery('.photty_ribbon_slider_wrapper').length > 0) {
		photty_preloader();
		html.addClass('photty_ribbon_slider_page').addClass('photty_transparent_header');

		jQuery('.photty_ribbon_btn_prev').on('click', function () {
			photty_ribbon_prevSlide();
		});
		jQuery('.photty_ribbon_btn_next').on('click', function () {
			photty_ribbon_nextSlide();
		});		
		jQuery('.photty_ribbon_btn_fullview').on('click', function () {
			html.toggleClass('photty_ribbon_fullview');
		});		
		jQuery('.photty_ribbon_btn_play').on('click', function () {
			jQuery(this).toggleClass('photty_state_pause');
			if (jQuery(this).hasClass('photty_state_pause')) {
				clearInterval(photty_ribbon_interval);
			} else {
				photty_ribbon_interval = setInterval('photty_ribbon_nextSlide()', parseInt(photty_ribbon_slider.attr('data-interval'), 10));
			}
		});		

		//Touch Events
		var touch_container = photty_ribbon_slider;
		touch_container.on("swipeleft", function () {
			photty_ribbon_nextSlide();
		});
		touch_container.on("swiperight", function () {
			photty_ribbon_prevSlide();
		});
	}
});

jQuery(window).on('load', function () {
	if (jQuery('.photty_ribbon_slider_wrapper').length > 0) {
		photty_ribbon_setup();
	}
});

jQuery(window).resize(function () {
	if (jQuery('.photty_ribbon_slider_wrapper').length > 0) {
		photty_ribbon_setup();
	}
});

function photty_ribbon_prevSlide() {
	var	cur_slide = parseInt(jQuery('.photty_ribbon_current').attr('data-count'), 10);
	cur_slide--;
	var	r_max_slide = photty_ribbon_slider.find('.photty_ribbon_slide').length;
	if (cur_slide > r_max_slide) cur_slide = 1;
	if (cur_slide < 1) cur_slide = r_max_slide;	
	photty_set_ribbon_Slide(cur_slide);
}

function photty_ribbon_nextSlide() {
	var	cur_slide = parseInt(jQuery('.photty_ribbon_current').attr('data-count'), 10);
	cur_slide++;
	var	r_max_slide = photty_ribbon_slider.find('.photty_ribbon_slide').length;
	if (cur_slide > r_max_slide) cur_slide = 1;
	if (cur_slide < 1) cur_slide = r_max_slide;
	photty_set_ribbon_Slide(cur_slide);
}

function photty_set_ribbon_Slide(slideNum) {
	var	slideNum = parseInt(slideNum, 10);

	if (photty_ribbon_slider.attr('data-interval') !== '' && parseInt(photty_ribbon_slider.attr('data-interval'), 10) > 0) {
		clearInterval(photty_ribbon_interval);	
	}

	if (r_max_slide < 5) {
		jQuery('.photty_ribbon_prev').removeClass('photty_ribbon_prev');
		jQuery('.photty_ribbon_current').removeClass('photty_ribbon_current');
		jQuery('.photty_ribbon_next').removeClass('photty_ribbon_next');
		
		var curSlide = jQuery('.photty_ribbon_slide'+slideNum);
		curSlide.addClass('photty_ribbon_current');

		if((parseInt(slideNum, 10)+1) > r_max_slide) {
			var nextSlide = jQuery('.photty_ribbon_slide1');
		} else if ((parseInt(slideNum, 10)+1) == r_max_slide){
			var nextSlide = jQuery('.photty_ribbon_slide'+r_max_slide);
		} else {
			var nextSlide = jQuery('.photty_ribbon_slide'+(parseInt(slideNum, 10)+1));
		}
		
		if((parseInt(slideNum, 10)-1) < 1) {
			var prevSlide = jQuery('.photty_ribbon_slide'+r_max_slide);
		} else if ((slideNum-1) == 1){
			var prevSlide = jQuery('.photty_ribbon_slide1');
		} else {
			var prevSlide = jQuery('.photty_ribbon_slide'+(parseInt(slideNum, 10)-1));
		}

		prevSlide.addClass('photty_ribbon_prev');
		curSlide.addClass('photty_ribbon_current');
		nextSlide.addClass('photty_ribbon_next');

		var	mainOffSet = (photty_window.width() - curSlide.width()) /2 - parseInt(photty_ribbon_slider_wrapper.css('left'), 10);
		var	nextOffset = curSlide.width() + mainOffSet;
		var	prevOffset = mainOffSet - prevSlide.width();
		
		curSlide.css('transform' , 'translateX('+Math.floor(mainOffSet)+'px)'); 
		nextSlide.css('transform' , 'translateX('+Math.floor(nextOffset)+'px)');
		prevSlide.css('transform' , 'translateX('+Math.floor(prevOffset)+'px)');

		ribbon_title.fadeOut(300, function () {
			setTimeout("ribbon_title.html(jQuery('.photty_ribbon_current').attr('data-title'))",100);
			setTimeout("ribbon_title.fadeIn(500)",200);
		});
	} else {
		jQuery('.photty_ribbon_prev2').removeClass('photty_ribbon_prev2');
		jQuery('.photty_ribbon_prev').removeClass('photty_ribbon_prev');
		jQuery('.photty_ribbon_current').removeClass('photty_ribbon_current');
		jQuery('.photty_ribbon_next').removeClass('photty_ribbon_next');
		jQuery('.photty_ribbon_next2').removeClass('photty_ribbon_next2');
		
		var curSlide = jQuery('.photty_ribbon_slide'+slideNum);
		curSlide.addClass('photty_ribbon_current');

		if((parseInt(slideNum, 10)+1) > r_max_slide) {
			var nextSlide = jQuery('.photty_ribbon_slide1');
			var nextSlide2 = jQuery('.photty_ribbon_slide2');
		} else if ((parseInt(slideNum, 10)+1) == r_max_slide){
			var nextSlide = jQuery('.photty_ribbon_slide'+r_max_slide);
			var nextSlide2 = jQuery('.photty_ribbon_slide1');
		} else {
			var nextSlide = jQuery('.photty_ribbon_slide'+(parseInt(slideNum, 10)+1));
			var nextSlide2 = jQuery('.photty_ribbon_slide'+(parseInt(slideNum, 10)+2));
		}
		
		if((parseInt(slideNum, 10)-1) < 1) {
			var prevSlide = jQuery('.photty_ribbon_slide'+r_max_slide);
			var prevSlide2 = jQuery('.photty_ribbon_slide'+(r_max_slide-1));
		} else if ((slideNum-1) == 1){
			var prevSlide = jQuery('.photty_ribbon_slide1');
			var prevSlide2 = jQuery('.photty_ribbon_slide'+r_max_slide);
		} else {
			var prevSlide = jQuery('.photty_ribbon_slide'+(parseInt(slideNum, 10)-1));
			var prevSlide2 = jQuery('.photty_ribbon_slide'+(parseInt(slideNum, 10)-2));
		}

		prevSlide2.addClass('photty_ribbon_prev2');
		prevSlide.addClass('photty_ribbon_prev');
		curSlide.addClass('photty_ribbon_current');
		nextSlide.addClass('photty_ribbon_next');
		nextSlide2.addClass('photty_ribbon_next2');

		var	mainOffSet = (photty_window.width() - curSlide.width()) /2 - parseInt(photty_ribbon_slider_wrapper.css('left'), 10),
		nextOffset = curSlide.width() + mainOffSet,
		prevOffset = mainOffSet - prevSlide.width(),
		nextOffset2 = nextSlide.width() + nextOffset,
		prevOffset2 = prevOffset - prevSlide2.width();
		
		curSlide.css('transform' , 'translateX('+Math.floor(mainOffSet)+'px)'); 
		nextSlide.css('transform' , 'translateX('+Math.floor(nextOffset)+'px)');
		nextSlide2.css('transform' , 'translateX('+Math.floor(nextOffset2)+'px)');
		prevSlide.css('transform' , 'translateX('+Math.floor(prevOffset)+'px)');
		prevSlide2.css('transform' , 'translateX('+Math.floor(prevOffset2)+'px)');

		photty_ribbon_title_wrapper.fadeOut(300, function () {
			setTimeout("photty_ribbon_title.html(jQuery('.photty_ribbon_current').attr('data-title'))",100);
			setTimeout("photty_ribbon_descr.html(jQuery('.photty_ribbon_current').attr('data-descr'))",100);
			setTimeout("photty_ribbon_title_wrapper.fadeIn(500)",200);
		});		
	}
	if (photty_ribbon_slider.hasClass('wait4load')) {
		photty_ribbon_slider.removeClass('wait4load');
	}
	if (photty_ribbon_slider.attr('data-interval') !== '' && parseInt(photty_ribbon_slider.attr('data-interval'), 10) > 0) {		
		if (photty_ribbon_slider.attr('data-autoplay') == 'yes' && !jQuery('.photty_ribbon_btn_play').hasClass('photty_state_pause')) {
			photty_ribbon_interval = setInterval('photty_ribbon_nextSlide()', parseInt(photty_ribbon_slider.attr('data-interval'), 10));
		}	
	}
	
}
function photty_ribbon_setup() {
	if (jQuery('#wpadminbar').length > 0) {
		var set_height = photty_window.height() - jQuery('#wpadminbar').height(),
			set_top = jQuery('#wpadminbar').height();
	} else {
		var set_height = photty_window.height(),
			set_top = 0;
	}	
	photty_ribbon_slider_wrapper.css('top', set_top+'px').height(set_height);
	photty_ribbon_slider.height(set_height);
	photty_ribbon_slide.height(set_height);	
	photty_ribbon_slide.each(function(){
		jQuery(this).width(set_height*jQuery(this).attr('data-ratio'));
	});
	if (!photty_ribbon_slider.hasClass('wait4load')) {
		var	cur_slide = parseInt(jQuery('.photty_ribbon_current').attr('data-count'), 10);
		photty_set_ribbon_Slide(cur_slide);
	}
}

function run_photty_ribbon_slider() {
	photty_ribbon_slider.addClass('started');	
	photty_set_ribbon_Slide(1);
	photty_ribbon_setup();
}
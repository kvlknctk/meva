/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";
var	html = jQuery('html'),
	photty_albums_slider_wrapper = jQuery('.photty_albums_slider_wrapper'),
	photty_albums_slider_inner = jQuery('.photty_albums_slider_inner'),
	photty_albums_slider_meta = jQuery('.photty_albums_slider_meta'),
	r_max_slide = parseInt(photty_albums_slider_meta.attr('data-slides'), 10);
	
jQuery(document.documentElement).keyup(function (event) {
	if ((event.keyCode == 37)) {
		//Left Button
		photty_albums_prevSlide();
	} else if ((event.keyCode == 39)) {
		//Right Button
		photty_albums_nextSlide();
	}
});

jQuery(document).ready(function ($) {
	var	last_slide = parseInt(photty_albums_slider_meta.attr('data-slides'), 10);
	if (jQuery('.photty_albums_slide'+last_slide).length == 2) {
		jQuery('.photty_albums_slide'+last_slide).addClass('albums_slide_2slides');
	}
	if (jQuery('.photty_albums_slide'+last_slide).length == 1) {
		jQuery('.photty_albums_slide'+last_slide).addClass('albums_slide_1slide');
	}
	html.addClass('photty_albums_slider');

	jQuery('.photty_albums_btn_prev').on('click', function () {
		photty_albums_prevSlide();
	});
	jQuery('.photty_albums_btn_next').on('click', function () {
		photty_albums_nextSlide();
	});

	//Touch Events
	var touch_container = photty_albums_slider_wrapper;
	touch_container.on("swipeleft", function () {
		photty_albums_nextSlide();
	});
	touch_container.on("swiperight", function () {
		photty_albums_prevSlide();
	});
	photty_set_album_Slide(1);
	
	if (parseInt(photty_albums_slider_meta.attr('data-slides'), 10) == 1) {
		jQuery('html').addClass('only_one_slide');
	}
});

jQuery(window).on('load', function () {
	photty_albums_setup();
});

jQuery(window).resize(function () {
	photty_albums_setup();
});

function photty_albums_prevSlide() {
	var	cur_slide = parseInt(jQuery('.photty_albums_current').attr('data-count'), 10);
	cur_slide--;
	if (cur_slide > r_max_slide) cur_slide = 1;
	if (cur_slide < 1) cur_slide = r_max_slide;	
	photty_set_album_Slide(cur_slide);
}

function photty_albums_nextSlide() {
	var	cur_slide = parseInt(jQuery('.photty_albums_current').attr('data-count'), 10);
	cur_slide++;
	if (cur_slide > r_max_slide) cur_slide = 1;
	if (cur_slide < 1) cur_slide = r_max_slide;
	photty_set_album_Slide(cur_slide);
}

function photty_albums_setup() {
	
	var set_height = photty_window.height() - photty_albums_slider_meta.height() - jQuery('header.photty_header').height(),
		set_top = jQuery('header.photty_header').height();
	jQuery('body').height(photty_window.height());
	
	if (photty_window.width() < 760) {
		set_height = set_height - photty_albums_slider_meta.height();
		set_top = set_top + photty_albums_slider_meta.height();
	}
	photty_albums_slider_wrapper.css('top', set_top+'px').height(set_height);
	photty_albums_slider_inner.height(set_height);
}

function photty_set_album_Slide(slideNum) {
	var	slideNum = parseInt(slideNum, 10);
	
	jQuery('.photty_albums_prev').removeClass('photty_albums_prev');
	jQuery('.photty_albums_current').removeClass('photty_albums_current');
	jQuery('.photty_albums_next').removeClass('photty_albums_next');
	
	var curSlide = jQuery('.photty_albums_slide'+slideNum);
	curSlide.addClass('photty_albums_current');

	if((parseInt(slideNum, 10)+1) > r_max_slide) {
		var nextSlide = jQuery('.photty_albums_slide1');
	} else if ((parseInt(slideNum, 10)+1) == r_max_slide){
		var nextSlide = jQuery('.photty_albums_slide'+r_max_slide);
	} else {
		var nextSlide = jQuery('.photty_albums_slide'+(parseInt(slideNum, 10)+1));
	}
	
	if((parseInt(slideNum, 10)-1) < 1) {
		var prevSlide = jQuery('.photty_albums_slide'+r_max_slide);
	} else if ((slideNum-1) == 1){
		var prevSlide = jQuery('.photty_albums_slide1');
	} else {
		var prevSlide = jQuery('.photty_albums_slide'+(parseInt(slideNum, 10)-1));
	}
	
	curSlide.addClass('photty_albums_current');
	if (parseInt(photty_albums_slider_meta.attr('data-slides'), 10) > 1) {
		prevSlide.addClass('photty_albums_prev');
		nextSlide.addClass('photty_albums_next');
	}
}
/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";
var	html = jQuery('html'),
	photty_split_gallery_wrapper = jQuery('.photty_split_showcase_wrapper'),
	photty_split_gallery = jQuery('.photty_split_showcase'),
	photty_split_slide = jQuery('.photty_split_slide'),
	even_max_slide = jQuery('.photty_even_slide').length,
	odd_max_slide = jQuery('.photty_odd_slide').length;

var lastChange = +new Date();
	
if (jQuery('.photty_split_showcase_wrapper').length > 0) {
	jQuery(document.documentElement).keyup(function (event) {
		if ((event.keyCode == 40)) {
			photty_split_prevSlide();				
		}
		if ((event.keyCode == 38)) {
			photty_split_nextSlide();
		}
	});
}
	
jQuery(document).ready(function ($) {
	photty_preloader();
	html.addClass('photty_split_gallery_page').addClass('photty_transparent_header');
	
	jQuery('.photty_split_btn_prev').on('click', function () {
		photty_split_prevSlide();		
	});
	jQuery('.photty_split_btn_next').on('click', function () {
		photty_split_nextSlide();
	});

	//Touch Events
	photty_split_gallery.on("swipeleft", function () {
		if (!photty_split_gallery_wrapper.hasClass('fullview')) {
			jQuery('.photty_split_even_current').addClass('slide_fullview');
			photty_split_gallery_wrapper.addClass('fullview');
		} else {
			jQuery('.photty_split_even_current').removeClass('slide_fullview');
			jQuery('.photty_split_odd_current').removeClass('slide_fullview');
			photty_split_gallery_wrapper.removeClass('fullview');
		}
	});
	photty_split_gallery.on("swiperight", function () {
		if (!photty_split_gallery_wrapper.hasClass('fullview')) {
			jQuery('.photty_split_odd_current').addClass('slide_fullview');
			photty_split_gallery_wrapper.addClass('fullview');
		} else {
			jQuery('.photty_split_even_current').removeClass('slide_fullview');
			jQuery('.photty_split_odd_current').removeClass('slide_fullview');
			photty_split_gallery_wrapper.removeClass('fullview');
		}
	});
	photty_split_gallery.on("swipeup", function () {
		photty_split_nextSlide();
	});
	photty_split_gallery.on("swipedown", function () {
		photty_split_prevSlide();
	});

	photty_split_gallery.on('mousewheel', function(event) {
	    if(+new Date() - lastChange > 100){
			var half_screen = jQuery(window).width()/2;
			if (event.deltaY < 0) {
				if (event.pageX <= half_screen) {
					photty_split_nextSlide();
				} else {
					photty_split_prevSlide();
				}
			}
			if (event.deltaY > 0) {
				if (event.pageX <= half_screen) {
					photty_split_prevSlide();
				} else {
					photty_split_nextSlide();
				}
			}
			lastChange = +new Date();
		} else {
			lastChange = +new Date();
		}
	});	
});

jQuery(window).resize(function () {
	setup_photty_split_gallery();
});

jQuery(document).on("click", ".photty_split_slide", function() {
	jQuery(this).toggleClass('slide_fullview');
	photty_split_gallery_wrapper.toggleClass('fullview');
});

function photty_split_prevSlide() {
	if (!photty_split_gallery_wrapper.hasClass('fullview') && !photty_split_gallery.hasClass('now_animate')) {
		if (even_max_slide < 5 && odd_max_slide < 5) {
			photty_split_gallery.addClass('prev_power');
		}
		var cur_slide_even = parseInt(jQuery('.photty_split_even_current').attr('data-count'), 10);
		var cur_slide_odd = parseInt(jQuery('.photty_split_odd_current').attr('data-count'), 10);
	
		cur_slide_even--;
		cur_slide_odd--;
		
		var even_max_slide = jQuery('.photty_even_slide').length,
			odd_max_slide = jQuery('.photty_odd_slide').length;
	
		if (cur_slide_even > even_max_slide) cur_slide_even = 1;
		if (cur_slide_even < 1) cur_slide_even = even_max_slide;
	
		if (cur_slide_odd > odd_max_slide) cur_slide_odd = 1;
		if (cur_slide_odd < 1) cur_slide_odd = odd_max_slide;
	
		set_photty_split_Slide(cur_slide_even,cur_slide_odd);
	}
}

function photty_split_nextSlide() {	
	if (!photty_split_gallery_wrapper.hasClass('fullview') && !photty_split_gallery.hasClass('now_animate')) {
		if (even_max_slide < 5 && odd_max_slide < 5) {
			photty_split_gallery.addClass('next_power');
		}
		var cur_slide_even = parseInt(jQuery('.photty_split_even_current').attr('data-count'), 10);
		var cur_slide_odd = parseInt(jQuery('.photty_split_odd_current').attr('data-count'), 10);
	
		cur_slide_even++;
		cur_slide_odd++;
		
		var even_max_slide = jQuery('.photty_even_slide').length,
			odd_max_slide = jQuery('.photty_odd_slide').length;
	
		if (cur_slide_even > even_max_slide) cur_slide_even = 1;
		if (cur_slide_even < 1) cur_slide_even = even_max_slide;
	
		if (cur_slide_odd > odd_max_slide) cur_slide_odd = 1;
		if (cur_slide_odd < 1) cur_slide_odd = odd_max_slide;
	
		set_photty_split_Slide(cur_slide_even,cur_slide_odd);
	}
}

function set_photty_split_Slide(slideNumEven,slideNumOdd) {
	photty_split_gallery.addClass('now_animate');
	slideNumEven = parseInt(slideNumEven, 10);
	slideNumOdd = parseInt(slideNumOdd, 10);
	if (even_max_slide < 5 && odd_max_slide < 5) {
		jQuery('.photty_split_even_prev').removeClass('photty_split_even_prev');
		jQuery('.photty_split_even_current').removeClass('photty_split_even_current');
		jQuery('.photty_split_even_next').removeClass('photty_split_even_next');

		jQuery('.photty_split_odd_prev').removeClass('photty_split_odd_prev');
		jQuery('.photty_split_odd_current').removeClass('photty_split_odd_current');
		jQuery('.photty_split_odd_next').removeClass('photty_split_odd_next');
		
		var curSlideEven = jQuery('.photty_even_slide'+slideNumEven);
		var curSlideOdd = jQuery('.photty_odd_slide'+slideNumOdd);
		curSlideEven.addClass('photty_split_even_current');
		curSlideOdd.addClass('photty_split_odd_current');

		//EVEN
		if((parseInt(slideNumEven, 10)+1) > even_max_slide) {
			var nextSlideEven = jQuery('.photty_even_slide1');
		} else if ((parseInt(slideNumEven, 10)+1) == even_max_slide){
			var nextSlideEven = jQuery('.photty_even_slide'+even_max_slide);
		} else {
			var nextSlideEven = jQuery('.photty_even_slide'+(parseInt(slideNumEven, 10)+1));
		}
		
		if((parseInt(slideNumEven, 10)-1) < 1) {
			var prevSlideEven = jQuery('.photty_even_slide'+even_max_slide);
		} else if ((slideNumEven-1) == 1){
			var prevSlideEven = jQuery('.photty_even_slide1');
		} else {
			var prevSlideEven = jQuery('.photty_even_slide'+(parseInt(slideNumEven, 10)-1));
		}

		prevSlideEven.addClass('photty_split_even_prev');
		nextSlideEven.addClass('photty_split_even_next');
		
		//ODD
		if((parseInt(slideNumOdd, 10)+1) > odd_max_slide) {
			var nextSlideOdd = jQuery('.photty_odd_slide1');
		} else if ((parseInt(slideNumOdd, 10)+1) == odd_max_slide){
			var nextSlideOdd = jQuery('.photty_odd_slide'+odd_max_slide);
		} else {
			var nextSlideOdd = jQuery('.photty_odd_slide'+(parseInt(slideNumOdd, 10)+1));
		}
		
		if((parseInt(slideNumOdd, 10)-1) < 1) {
			var prevSlideOdd = jQuery('.photty_odd_slide'+odd_max_slide);
		} else if ((slideNumOdd-1) == 1){
			var prevSlideOdd = jQuery('.photty_odd_slide1');
		} else {
			var prevSlideOdd = jQuery('.photty_odd_slide'+(parseInt(slideNumOdd, 10)-1));
		}

		prevSlideOdd.addClass('photty_split_odd_prev');
		nextSlideOdd.addClass('photty_split_odd_next');
		
		setTimeout("photty_split_gallery.removeClass('prev_power')",500);
		setTimeout("photty_split_gallery.removeClass('next_power')",500);
		
	} else {
		jQuery('.photty_split_even_prev2').removeClass('photty_split_even_prev2');
		jQuery('.photty_split_even_prev').removeClass('photty_split_even_prev');
		jQuery('.photty_split_even_current').removeClass('photty_split_even_current');
		jQuery('.photty_split_even_next').removeClass('photty_split_even_next');
		jQuery('.photty_split_even_next2').removeClass('photty_split_even_next2');

		jQuery('.photty_split_odd_prev2').removeClass('photty_split_odd_prev2');
		jQuery('.photty_split_odd_prev').removeClass('photty_split_odd_prev');
		jQuery('.photty_split_odd_current').removeClass('photty_split_odd_current');
		jQuery('.photty_split_odd_next').removeClass('photty_split_odd_next');
		jQuery('.photty_split_odd_next2').removeClass('photty_split_odd_next2');
		
		var curSlideEven = jQuery('.photty_even_slide'+slideNumEven);
		var curSlideOdd = jQuery('.photty_odd_slide'+slideNumOdd);
		curSlideEven.addClass('photty_split_even_current');
		curSlideOdd.addClass('photty_split_odd_current');

		//EVEN
		if((parseInt(slideNumEven, 10)+1) > even_max_slide) {
			var nextSlideEven = jQuery('.photty_even_slide1');
			var nextSlideEven2 = jQuery('.photty_even_slide2');
		} else if ((parseInt(slideNumEven, 10)+1) == even_max_slide){
			var nextSlideEven = jQuery('.photty_even_slide'+even_max_slide);
			var nextSlideEven2 = jQuery('.photty_even_slide1');
		} else {
			var nextSlideEven = jQuery('.photty_even_slide'+(parseInt(slideNumEven, 10)+1));
			var nextSlideEven2 = jQuery('.photty_even_slide'+(parseInt(slideNumEven, 10)+2));
		}
		
		if((parseInt(slideNumEven, 10)-1) < 1) {
			var prevSlideEven = jQuery('.photty_even_slide'+even_max_slide);
			var prevSlideEven2 = jQuery('.photty_even_slide'+(even_max_slide-1));
		} else if ((slideNumEven-1) == 1){
			var prevSlideEven = jQuery('.photty_even_slide1');
			var prevSlideEven2 = jQuery('.photty_even_slide'+even_max_slide);
		} else {
			var prevSlideEven = jQuery('.photty_even_slide'+(parseInt(slideNumEven, 10)-1));
			var prevSlideEven2 = jQuery('.photty_even_slide'+(parseInt(slideNumEven, 10)-2));
		}

		prevSlideEven2.addClass('photty_split_even_prev2');
		prevSlideEven.addClass('photty_split_even_prev');
		nextSlideEven.addClass('photty_split_even_next');
		nextSlideEven2.addClass('photty_split_even_next2');
		
		//ODD
		if((parseInt(slideNumOdd, 10)+1) > odd_max_slide) {
			var nextSlideOdd = jQuery('.photty_odd_slide1');
			var nextSlideOdd2 = jQuery('.photty_odd_slide2');
		} else if ((parseInt(slideNumOdd, 10)+1) == odd_max_slide){
			var nextSlideOdd = jQuery('.photty_odd_slide'+odd_max_slide);
			var nextSlideOdd2 = jQuery('.photty_odd_slide1');
		} else {
			var nextSlideOdd = jQuery('.photty_odd_slide'+(parseInt(slideNumOdd, 10)+1));
			var nextSlideOdd2 = jQuery('.photty_odd_slide'+(parseInt(slideNumOdd, 10)+2));
		}
		
		if((parseInt(slideNumOdd, 10)-1) < 1) {
			var prevSlideOdd = jQuery('.photty_odd_slide'+odd_max_slide);
			var prevSlideOdd2 = jQuery('.photty_odd_slide'+(odd_max_slide-1));
		} else if ((slideNumOdd-1) == 1){
			var prevSlideOdd = jQuery('.photty_odd_slide1');
			var prevSlideOdd2 = jQuery('.photty_odd_slide'+odd_max_slide);
		} else {
			var prevSlideOdd = jQuery('.photty_odd_slide'+(parseInt(slideNumOdd, 10)-1));
			var prevSlideOdd2 = jQuery('.photty_odd_slide'+(parseInt(slideNumOdd, 10)-2));
		}

		prevSlideOdd2.addClass('photty_split_odd_prev2');
		prevSlideOdd.addClass('photty_split_odd_prev');
		nextSlideOdd.addClass('photty_split_odd_next');
		nextSlideOdd2.addClass('photty_split_odd_next2');		
	}
	setTimeout("photty_split_gallery.removeClass('now_animate')",300);
}
function setup_photty_split_gallery() {
	if (jQuery('.photty_even_slide').length == 1) {
		photty_split_gallery_wrapper.addClass('even_alone');
	}	 
	if (jQuery('.photty_odd_slide').length == 1) {
		photty_split_gallery_wrapper.addClass('odd_alone');
	}


	
	
	var set_height = photty_window.height(),
		set_top = 0;
	
	
	photty_split_gallery_wrapper.css('top', set_top+'px').height(set_height);
	photty_split_gallery.height(set_height).css('top', set_top+'px');	
	photty_split_slide.height(set_height);
	if (photty_split_gallery.hasClass('started')) {
		if (jQuery('.photty_split_even_current').length > 0 && jQuery('.photty_split_odd_current').length > 0) {
			var cur_slide_even = parseInt(jQuery('.photty_split_even_current').attr('data-count'), 10);
			var cur_slide_odd = parseInt(jQuery('.photty_split_odd_current').attr('data-count'), 10);
			set_photty_split_Slide(cur_slide_even,cur_slide_odd);
		} else {
			set_photty_split_Slide(1,1);
		}
	}
}
function run_photty_split_slider() {
	photty_split_gallery.addClass('started')
	setup_photty_split_gallery();
}
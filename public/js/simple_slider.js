/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";
var	html = jQuery('html'),
	photty_simple_slider = jQuery('.photty_simple_slider'),
	photty_simple_slider_wrapper = jQuery('.photty_simple_slider_wrapper'),
	photty_max_slide = photty_simple_slider.find('.photty_simple_slide').length,
	photty_simple_slider_array = [];

/* Start Simple Slider */
if (jQuery('.photty_simple_slider').length > 0) {
	jQuery(document.documentElement).keyup(function (event) {
		if (jQuery('.photty_simple_slider_hovered').length > 0) {
			if ((event.keyCode == 37)) {
				event.preventDefault();
			}
			if ((event.keyCode == 39)) {
				event.preventDefault();
			}
		}		

		if ((event.keyCode == 37)) {
			if (jQuery('.photty_simple_slider_hovered').length > 0) {
				event.preventDefault();
				photty_simple_slider_prevSlide(jQuery('.photty_simple_slider_hovered').attr('data-uniqid'));
			}
		}
		if ((event.keyCode == 39)) {
			if (jQuery('.photty_simple_slider_hovered').length > 0) {
				event.preventDefault();
				photty_simple_slider_nextSlide(jQuery('.photty_simple_slider_hovered').attr('data-uniqid'));
			}
		}
	});
}

jQuery(document).on('mouseenter', '.photty_simple_slider_wrapper', function(e){
	jQuery(this).addClass('photty_simple_slider_hovered');
}).on('mouseleave', '.photty_simple_slider_wrapper', function(e){
	jQuery(this).removeClass('photty_simple_slider_hovered');
});
jQuery(document).ready(function ($) {
	if (jQuery('.photty_simple_slider').length > 0) {
		photty_simple_slider_preSetup();
		photty_simple_slider.each(function(){
			photty_simple_slider_array['photty_slider_' + jQuery(this).attr('data-uniqid')] = {};
			photty_simple_slider_array['photty_slider_' + jQuery(this).attr('data-uniqid')].id = jQuery(this).attr('data-uniqid');
			photty_simple_slider_array['photty_slider_' + jQuery(this).attr('data-uniqid')].autoplay = jQuery(this).attr('data-autoplay');
			photty_simple_slider_array['photty_slider_' + jQuery(this).attr('data-uniqid')].set_interval = setInterval('photty_simple_slider_nextSlide('+ jQuery(this).attr('data-uniqid') +')', jQuery(this).attr('data-interval'));
			if (jQuery(this).attr('data-autoplay') == 'off') {
				clearInterval(photty_simple_slider_array['photty_slider_' + jQuery(this).attr('data-uniqid')].set_interval);
			}	
			photty_simple_slider_array['photty_slider_' + jQuery(this).attr('data-uniqid')].ready_state = false;
			photty_simple_slider_array['photty_slider_' + jQuery(this).attr('data-uniqid')].full_loaded = false;
	
		});		
		simple_slider_preloader();
		var	set_step = 0;
	}
});

jQuery(window).resize(function () {
	if (jQuery('.photty_simple_slider').length > 0) {
		setup_photty_simple_slider('all');
	}
});

function photty_simple_slider_prevSlide(this_slider_id) {
	var this_slider = jQuery('.photty_slider_'+this_slider_id);
	var	cur_slide = parseInt(this_slider.find('.current-slide').attr('data-count'), 10);
	cur_slide--;
	var	photty_max_slide = this_slider.find('.photty_simple_slide').size();
	if (cur_slide > photty_max_slide) cur_slide = 1;
	if (cur_slide < 1) cur_slide = photty_max_slide;	
	set_simple_slide(cur_slide, this_slider_id);
}

function photty_simple_slider_nextSlide(this_slider_id) {
	var this_slider = jQuery('.photty_slider_'+this_slider_id);
	var	cur_slide = parseInt(this_slider.find('.current-slide').attr('data-count'), 10);
	cur_slide++;
	var	photty_max_slide = this_slider.find('.photty_simple_slide').length;
	if (cur_slide > photty_max_slide) cur_slide = 1;
	if (cur_slide < 1) cur_slide = photty_max_slide;	
	set_simple_slide(cur_slide, this_slider_id);
}

function set_simple_slide(slideNum, this_slider_id) {
	var this_slider = jQuery('.photty_slider_'+this_slider_id);
	clearInterval(photty_simple_slider_array['photty_slider_' + this_slider_id].set_interval);
	var	slideNum = parseInt(slideNum, 10);

	this_slider.find('.current-thmb').removeClass('current-thmb');
	
	this_slider.find('.prev-slide').removeClass('prev-slide');
	this_slider.find('.current-slide').removeClass('current-slide');
	this_slider.find('.next-slide').removeClass('next-slide');

	if((parseInt(slideNum, 10)+1) > photty_max_slide) {
		var	nextSlide = this_slider.find('.photty_simple_slide1');
	} else if ((parseInt(slideNum, 10)+1) == photty_max_slide){
		var	nextSlide = this_slider.find('.photty_simple_slide'+photty_max_slide);
	} else {
		var	nextSlide = this_slider.find('.photty_simple_slide'+(parseInt(slideNum, 10)+1));
	}
	
	if((parseInt(slideNum, 10)-1) < 1) {
		var	prevSlide = this_slider.find('.photty_simple_slide'+photty_max_slide);
	} else if ((slideNum-1) == 1){
		var	prevSlide = this_slider.find('.photty_simple_slide1');
	} else {
		var	prevSlide = this_slider.find('.photty_simple_slide'+(parseInt(slideNum, 10)-1));
	}

	prevSlide.addClass('prev-slide');
	var curSlide = this_slider.find('.photty_simple_slide'+slideNum);
	
	curSlide.addClass('current-slide');
	nextSlide.addClass('next-slide');
	
	if (!prevSlide.hasClass('was_showed')) {
		prevSlide.addClass('was_showed');
	}
	if (!curSlide.hasClass('was_showed')) {
		curSlide.addClass('was_showed');
	}
	if (!nextSlide.hasClass('was_showed')) {
		nextSlide.addClass('was_showed');
	}
	photty_simple_slider_array['photty_slider_' + this_slider_id].set_interval = setInterval('photty_simple_slider_nextSlide('+this_slider_id+')', this_slider.attr('data-interval'));
}

function setup_photty_simple_slider(this_slider_id) {
	if (this_slider_id == 'all') {
		photty_simple_slider.each(function(){
			var	setHeight = jQuery(this).attr('data-height');
			if (setHeight == '100%') {
				if (jQuery('#wpadminbar').length > 0) {
					var setModuleHeight = photty_window - jQuery('#wpadminbar').height();
				} else {
					var setModuleHeight = photty_window;
				}
				jQuery(this).height(setModuleHeight);
				jQuery(this).parents('.photty_simple_slider_wrapper').height(setModuleHeight);
			} else {
				jQuery(this).height(parseInt(setHeight, 10));
				jQuery(this).parents('.photty_simple_slider_wrapper').height(parseInt(setHeight, 10));
			}
			if (jQuery(this).find('.current-slide').length < 1) {
				set_simple_slide(1, jQuery(this).attr('data-uniqid'));
			}
		});
	} else {
		var this_slider = jQuery('.photty_slider_'+this_slider_id);
		var	setHeight = this_slider.attr('data-height');
		if (setHeight == '100%') {
			if (jQuery('#wpadminbar').length > 0) {
				var setModuleHeight = photty_window - jQuery('#wpadminbar').height();
			} else {
				var setModuleHeight = photty_window;
			}			
			this_slider.height(setModuleHeight);
			this_slider.parents('.photty_simple_slider_wrapper').height(setModuleHeight);
		} else {
			this_slider.height(parseInt(setHeight, 10));
			this_slider.parents('.photty_simple_slider_wrapper').height(parseInt(setHeight, 10));
		}
		if (this_slider.find('.current-slide').length < 1) {
			set_simple_slide(1, this_slider_id);
		}
	}		
}

function simple_slider_preloader() {
	if (jQuery('.simple_slide_loader:first').length > 0) {
		var $this_obj = jQuery('.simple_slide_loader:first');
		(function (img, src) {
			img.src = src;			
			img.onload = function () {
				//console.log(src + ' loaded from: ');
				$this_obj.removeClass('simple_slide_loader').addClass('simple_slide_loaded').animate({					
					'z-index': '3'
				}, 100, function() {					
					simple_slider_preloader();
				});
			};                
		}(new Image(), $this_obj.attr('data-src')));

		if ($this_obj.parents('.photty_simple_slider').find('.photty_simple_slide1').hasClass('simple_slide_loaded') && !$this_obj.parents('.photty_simple_slider_wrapper').hasClass('photty_simple_slider_started')) {
			$this_obj.parents('.photty_simple_slider_wrapper').addClass('photty_simple_slider_started');
			setup_photty_simple_slider($this_obj.parents('.photty_simple_slider').attr('data-uniqid'));
		}
	}
}

function photty_simple_slider_preSetup() {
	photty_simple_slider_wrapper.each(function(){
		var	setHeight = jQuery(this).attr('data-height');
		if (setHeight == '100%') {
			if (jQuery('#wpadminbar').length > 0) {
				var setModuleHeight = photty_window - jQuery('#wpadminbar').height();
			} else {
				var setModuleHeight = photty_window;
			}
			jQuery(this).height(setModuleHeight);
		} else {
			jQuery(this).height(parseInt(setHeight, 10));
		}
		jQuery(this).removeClass('presetup');
	});
}
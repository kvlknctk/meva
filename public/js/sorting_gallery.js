/* SORTING */
"use strict";
if (jQuery('.photty_grid_inner').length > 0) {
	var need_late_setup = false;
} else {
	var need_late_setup = true;
}
	
jQuery(function () {
	if (jQuery('.photty_grid_inner').length > 0) {
		jQuery('.photty_grid_inner').isotope({
			itemSelector: '.element'
		});
	
		var $photty_optionSet = jQuery('.optionset'),
			$photty_optionLinks = $photty_optionSet.find('a'),
			$photty_showAll = jQuery('.show_all');
	
		$photty_optionLinks.on('click', function () {
			var $photty_this = jQuery(this);
			// don't proceed if already selected
			if ($photty_this.parent('li').hasClass('selected')) {
				return false;
			}
			var $photty_optionSet = $photty_this.parents('.optionset');
			$photty_optionSet.find('.selected').removeClass('selected');
			$photty_this.parent('li').addClass('selected');
			if ($photty_this.attr('data-option-value') == "*") {
				jQuery('.photty_grid_inner').removeClass('now_filtering');
			} else {
				jQuery('.photty_grid_inner').addClass('now_filtering');
			}
	
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var photty_options = {},
				key = $photty_optionSet.attr('data-option-key'),
				value = $photty_this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			photty_options[key] = value;
			if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
				// changes in layout modes need extra logic
				changeLayoutMode($photty_this, photty_options)
			} else {
				// otherwise, apply new options
				jQuery('.photty_grid_inner').isotope(photty_options);
			}
			return false;
		});
	
		jQuery('.photty_grid_inner').find('img').on('load', function () {
			jQuery('.photty_grid_inner').isotope('reLayout');
		});
	}
});

function isotope_late_setup() {
	if (jQuery('.photty_grid_inner').length > 0) {
		jQuery('.photty_grid_inner').isotope({
			itemSelector: '.element'
		});
	
		var $photty_optionSet = jQuery('.optionset'),
			$photty_optionLinks = $photty_optionSet.find('a'),
			$photty_showAll = jQuery('.show_all');
	
		$photty_optionLinks.on('click', function () {
			var $photty_this = jQuery(this);
			// don't proceed if already selected
			if ($photty_this.parent('li').hasClass('selected')) {
				return false;
			}
			var $photty_optionSet = $photty_this.parents('.optionset');
			$photty_optionSet.find('.selected').removeClass('selected');
			$photty_this.parent('li').addClass('selected');
			if ($photty_this.attr('data-option-value') == "*") {
				jQuery('.photty_grid_inner').removeClass('now_filtering');
			} else {
				jQuery('.photty_grid_inner').addClass('now_filtering');
			}
	
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var photty_options = {},
				key = $photty_optionSet.attr('data-option-key'),
				value = $photty_this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			photty_options[key] = value;
			if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
				// changes in layout modes need extra logic
				changeLayoutMode($photty_this, photty_options)
			} else {
				// otherwise, apply new options
				jQuery('.photty_grid_inner').isotope(photty_options);
			}
			return false;
		});
	
		jQuery('.photty_grid_inner').find('img').on('load', function () {
			jQuery('.photty_grid_inner').isotope('reLayout');
		});
	}
	setTimeout("photty_animateListGrid()", 500);
	photty_setup_grid();
}

jQuery(document).ready(function(){
	if (jQuery('.photty_grid_inner').length > 0) {
		setTimeout("photty_animateListGrid()", 500);
		photty_setup_grid();
	}
});

jQuery(window).on('load', function () {
	if (need_late_setup) {
		isotope_late_setup();
	}
	if (jQuery('.photty_grid_inner').length > 0) {
		if(typeof photty_container !== "undefined") {
			jQuery('.photty_grid_inner').isotope('reLayout');
		}
	}
});
jQuery(window).resize(function () {
	if (jQuery('.photty_grid_inner').length > 0) {
		if(typeof photty_container !== "undefined") {
			jQuery('.photty_grid_inner').isotope('reLayout');
			setTimeout("jQuery('.photty_grid_inner').isotope('reLayout')", 1000);
		}
		photty_setup_grid();
		setTimeout("photty_setup_grid()", 500);
		setTimeout("photty_setup_grid()", 1500);
	}
});

jQuery(window).on("orientationchange",function(){
	photty_setup_grid();
	setTimeout("photty_setup_grid()", 500);
	setTimeout("photty_setup_grid()", 1500);
});

function photty_setup_grid() {	
	if (jQuery('.photty_grid_inner').length > 0) {
		var setPad = Math.floor(parseInt(jQuery('.photty_grid_inner').attr('data-pad'), 10)/2);
		jQuery('.photty_grid_inner').css('margin', setPad+'px').css('margin-top', -1*setPad+'px');
		jQuery('.grid-item-inner').css({
			'margin-left' : setPad+'px',
			'margin-top' : setPad+'px',
			'margin-right' : setPad+'px',
			'margin-bottom' : setPad+'px'
		});
		jQuery('.grid-item').each(function(){
			if (jQuery(this).hasClass('anim_el2')) {
				jQuery(this).removeClass('anim_el2');
			}
		});
		jQuery('.photty_grid_inner').isotope('reLayout');
		setTimeout("jQuery('.photty_grid_inner').isotope('reLayout')",1000);
	}
}

function photty_animateListGrid() {
	if (jQuery('.load_anim:first').length > 0) {
		(function (img, src) {
			img.src = src;
			img.onload = function () {
				jQuery('.load_anim:first').removeClass('load_anim').removeClass('anim_el').animate({
					'z-index': '15'
				}, 200, function() {
					photty_animateListGrid();
				});
			};
		}(new Image(), jQuery('.load_anim:first').find('img').attr('src')));
	}
}






jQuery(document).on("click", ".grid_load_more", function () {
	if (jQuery('.vc_editor').length > 0) {
		alert('Not available in editor mode');
	} else {
		var photty_what_to_append = '',		
			photty_grid_post_per_page = jQuery(this).parents('.photty_grid_wrapper').attr('data-perload'),
			photty_uniqid = jQuery(this).parents('.photty_grid_wrapper').attr('data-uniqid'),
			photty_allposts = photty_grid_array['photty_grid_' + photty_uniqid].items.length,
			photty_overlay = jQuery(this).parents('.photty_grid_wrapper').find('.photty_grid_inner').attr('data-overlay');
		var photty_ins_container = jQuery('.photty_grid_'+photty_uniqid).find('.photty_grid_inner');	
		if (photty_grid_array['photty_grid_' + photty_uniqid].showed >= photty_allposts) {
			jQuery(this).slideUp(300);
		} else {
			var photty_now_step = photty_grid_array['photty_grid_' + photty_uniqid].showed + parseInt(photty_grid_post_per_page, 10) - 1;
			if (photty_now_step < photty_allposts) {
				var photty_limit = photty_now_step;
			} else {
				var photty_limit = photty_allposts - 1;
				jQuery(this).slideUp(300);
			}
			for (var i = photty_grid_array['photty_grid_' + photty_uniqid].showed; i <= photty_limit; i++) {
				var photty_thishref = photty_grid_array['photty_grid_' + photty_uniqid].items[i].img,
				photty_what_to_append = photty_what_to_append +'\
				<div class="grid-item element anim_el anim_el2 load_anim grid_b2p">\
						<div class="grid-item-inner">\
							<a href="' + photty_thishref +'" class="swipebox" title="' + photty_grid_array['photty_grid_' + photty_uniqid].items[i].title + '"></a>\
							<img src="'+ photty_grid_array['photty_grid_' + photty_uniqid].items[i].thmb +'" alt="' + photty_grid_array['photty_grid_' + photty_uniqid].items[i].alt + '" class="grid_thmb"/>\
							<div class="grid_overlay" style="background-color:'+ photty_overlay +'"></div>\
							<div class="photty-img-preloader"></div>\
						</div>\
				</div>';
				photty_grid_array['photty_grid_' + photty_uniqid].showed++;
			}
								
			var $photty_newItems = jQuery(photty_what_to_append);
			
			photty_ins_container.isotope('insert', $photty_newItems, function() {
				photty_ins_container.find('.photty_grid_inner').ready(function() {
					photty_ins_container.isotope('reLayout');
					photty_setup_grid();
				});
			});
			photty_setup_grid();			
			setTimeout("photty_animateListGrid()", 500);
		}
		jQuery('.photty_grid_inner').isotope("reLayout");
		setTimeout(function () {jQuery('.gallery_grid').isotope("reLayout");}, 1500);
	}
});			

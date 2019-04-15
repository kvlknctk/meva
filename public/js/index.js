"use strict";

var photty_window = jQuery(window);
jQuery(document).ready(function(){

    /* Preloader */

    if (jQuery('.photty_preloader_wrapper').length > 0) {
        jQuery('.photty_preloader_wrapper').addClass('run_preloader');
    }
    

    /* Menu */

    if (jQuery('.mobile_header').length > 0) {
        jQuery('.mobile_header').after('<div class="mobile_menu_wrapper"><ul class="mobile_menu"/></div>');
        jQuery('.mobile_menu').html(jQuery('.photty_menu_cont').find('ul.photty_menu').html());
        jQuery('.mobile_menu_wrapper').hide();
        jQuery('.btn_mobile_menu').on('click', function () {
            jQuery('.mobile_menu_wrapper').stop().slideToggle(300);
            jQuery('.photty_header').toggleClass('opened');
        });
    }

    photty_theme_setup();
    jQuery('.photty_fullscreen_slider_wrapper').height(jQuery(window).height());
    if (photty_window.width() < 769) {

      jQuery('.photty_fullscreen_slider').height(jQuery(window).height() + 50);
    } 
    else { jQuery('.photty_fullscreen_slider').height(jQuery(window).height());
  }
    /* Swipebox */

    if (jQuery('a.swipebox-video').length) {
        jQuery('html').addClass('photty_swipe_box');
        jQuery('.swipebox-video').swipebox({
          selector: '.swipebox-video',
          afterOpen: function () {
            photty_setup_box();
        }
    });
    }
    if (jQuery('a.swipebox').length) {
        jQuery('html').addClass('photty_swipe_box');
        jQuery('.swipebox').swipebox({
          selector: '.swipebox',
          afterOpen: function () {
            photty_setup_box();
        }
    });
    }
    function photty_setup_box() {
     var swipe_slider = jQuery('#swipebox-slider'),
     swipe_title = jQuery('#swipebox-top-bar'),
     swipe_bottom = jQuery('#swipebox-bottom-bar'),
     setHeight = 0;
     setHeight = jQuery(window).height() - swipe_title.height() - swipe_bottom.height();
     swipe_slider.height(setHeight).css('top', swipe_title.height());
 }

 jQuery(document).on("click", "#swipebox-container .slide.current img", function (e) {
     jQuery('#swipebox-next').trigger('click');
     e.stopPropagation();
 });

 jQuery(document).on("click", "#swipebox-container", function (e) {
     jQuery('#swipebox-close').trigger('click');
 });

 /* Contact Form */
 
 jQuery('.photty_form input[type=submit]').on('click', function(){
    var this_contact = jQuery(this).parents('form');
    jQuery.post('mail.php', {
      send_mail: 'true',
      form_name: this_contact.find('input[name=name]').val(),
      form_email: this_contact.find('input[name=email]').val(),
      form_text: this_contact.find('textarea[name=message]').val(),
  }).done(function (data) {
      alert(data);
  });

  return false;
});


 if (jQuery('.photty_js_bg_image').length > 0) {
    jQuery('.photty_js_bg_image').each(function () {
        jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
    });
}

photty_countdown();
photty_cs_page_centered();


jQuery('.photty_grid_about_element').each(function(){
    var items_set = [
    {src: 'img/14-800x600.jpg', href: 'img/14.jpg'},
    {src: 'img/18-800x600.jpg', href: 'img/18.jpg'},
    {src: 'img/25-800x600.jpg', href: 'img/25.jpg'},
    {src: 'img/17-800x600.jpg', href: 'img/17.jpg'},
    {src: 'img/35-800x600.jpg', href: 'img/35.jpg'},
    {src: 'img/21-800x600.jpg', href: 'img/21.jpg'}
    ];

    jQuery('#list').grid_gallery_about({
        load_count: 3,
        items: items_set
    });
});

jQuery('.photty_grid_gallery_element').each(function(){
   var items_set = [
   {src: 'img/14-800x600.jpg', href: 'img/14.jpg'},
   {src: 'img/18-800x600.jpg', href: 'img/18.jpg'},
   {src: 'img/25-800x600.jpg', href: 'img/25.jpg'},
   {src: 'img/17-800x600.jpg', href: 'img/17.jpg'},
   {src: 'img/35-800x600.jpg', href: 'img/35.jpg'},
   {src: 'img/21-800x600.jpg', href: 'img/21.jpg'}
   ];

   jQuery('#list').grid_gallery_about({
    load_count: 3,
    items: items_set
});
});

jQuery('.photty_masonry_gallery_element').each(function(){
   var items_set = [
   {src: 'img/masonry-10-960x1250.jpg', href: 'img/masonry-10.jpg'},
   {src: 'img/masonry-11-960x694.jpg', href: 'img/masonry-11.jpg'},
   {src: 'img/masonry-12-960x884.jpg', href: 'img/masonry-12.jpg'}          
   ];

   jQuery('#list').grid_gallery_masonry({
    load_count: 3,
    items: items_set
});
});


jQuery('.photty_album-listing_element').each(function(){
   var items_set = [
   {src: 'img/15-915x600.jpg', title: 'Street Life', cat_name1: 'Events', cat_name2: ' / People', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/14-915x600.jpg', title: 'Stroll With Joy', cat_name1: 'Events', cat_name2: '', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/13-915x600.jpg', title: 'Jeans And Tattoos', cat_name1: 'People', cat_name2: '', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/11-915x600.jpg', class: 'grid-item--width2', title: 'Lady in Red', cat_name1: 'Fashion', cat_name2: '', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/09-915x600.jpg', class: 'grid-item--width2', title: 'Fresh Portraits', cat_name1: 'People', cat_name2: ' / Portrait', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/10-915x600.jpg', title: 'Vintage', cat_name1: 'Fashion', cat_name2: ' / Portrait', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/12-915x600.jpg', title: 'Hot Summertime', cat_name1: 'Events', cat_name2: ' / People', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/04-915x600.jpg', title: 'Girl Portrait', cat_name1: 'Portrait', cat_name2: '', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/02-915x600.jpg', class: 'grid-item--width2', title: 'Beauty In Hat', cat_name1: 'Fashion', cat_name2: ' / Portrait', href1: 'album-category.html', href2: 'album-category.html'},
   {src: 'img/01-915x600.jpg', class: 'grid-item--width2', title: 'Walking Down The Streets', cat_name1: 'Events', cat_name2: '', href1: 'album-category.html', href2: 'album-category.html'}          
   ];

   jQuery('#list').album_listing({
    load_count: 5,
    items: items_set
});
});


jQuery('.photty_grid_blog_element').each(function(){
   var items_set = [
   {src: 'img/40-800x600.jpg', title: 'Sweet Blonde', cat_name1: ' Portrait', cat_name2: '', cat_name3: '', href: 'category.html',  href1: 'category.html',   href2: 'category.html',  href3: 'category.html',  text: 'Pellentesque in, suscipit ut odio. Nunc maximus ultrices eros, non malesuada diam tincidunt vitae. Sed euismod, diam quis sollicitudin pretium, neque lacus venenatis mi, tempor posuere metus dolor in sapien. Vestibulum lobortis ultrices lorem, ut tincidunt diam. Curabitur varius sapien in elit fringilla, in lacinia enim.'},
   {src: 'img/34-800x600.jpg', title: 'Girl In Hat', cat_name1: ' Fashion', cat_name2: 'Portrait', cat_name3: '', href: 'category.html',  href1: 'category.html',   href2: 'category.html',  href3: 'category.html',  text: 'Sed tempus mattis ligula, eu volutpat neque sagittis eu. Donec feugiat leo dolor, sed interdum mi gravida vitae. Nulla ac maximus arcu, sit amet vestibulum erat. Proin faucibus, ex vitae commodo facilisis, eros risus ullamcorper justo, et placerat ante lectus in dui. Proin et elementum ante, ac commodo felis. Aenean est eros.'},
   {src: 'img/15-800x600.jpg', title: 'Playground, Italy', cat_name1: ' Events', cat_name2: 'Fashion', cat_name3: '', href: 'category.html',  href1: 'category.html',   href2: 'category.html',  href3: 'category.html',  text: 'Ut in metus. Integer lobortis laoreet mi, a consequat ante facilisis ac. Etiam gravida velit mauris, ac vehicula neque hendrerit in. Integer facilisis pretium tellus et dignissim. Ut ipsum lectus, lobortis sed tortor eu, malesuada maximus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.'},
   {src: 'img/01-800x600.jpg', title: 'Street Style', cat_name1: ' Events', cat_name2: 'People', cat_name3: '', href: 'category.html',  href1: 'category.html',   href2: 'category.html',  href3: 'category.html',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas est risus, ac bibendum nulla consequat vitae. In molestie magna vel justo euismod, ut pharetra nisl tincidunt. Proin in velit posuere felis tempus molestie pharetra ac urna. Nulla porttitor quam ex, sed porta ipsum congue quis. Nam quis lorem non.'},
   {src: 'img/21-800x600.jpg', title: 'Faster and Faster!', cat_name1: ' Events', cat_name2: '', cat_name3: '', href: 'category.html',  href1: 'category.html',   href2: 'category.html',  href3: 'category.html',  text: 'Duis eu leo urna. Sed vel sapien pharetra, mollis ex eu, lacinia lorem. Donec elit turpis, porttitor sit amet erat vitae, molestie facilisis diam. Sed sit amet felis massa. Vivamus lobortis, libero sit amet vulputate placerat, arcu leo feugiat arcu, a commodo ligula enim eget risus. Nullam maximus sapien quam, sed pellentesque mi.'},
   {src: 'img/43-800x600.jpg', title: 'Few wisdom words', cat_name1: ' People', cat_name2: '', cat_name3: '', href: 'category.html',  href1: 'category.html',   href2: 'category.html',  href3: 'category.html',  text: 'Proin sollicitudin justo in tortor pulvinar, quis venenatis purus viverra. Pellentesque consequat, massa nec ultricies commodo, diam odio consectetur arcu, nec blandit nulla ex ut arcu. Nulla ornare velit quam. Donec a ante non quam vestibulum consectetur sed eu enim. Nunc consequat lorem sem, eu hendrerit sapien.'}
   ];

   jQuery('#list').blog_grid_posts({
    load_count: 3,
    items: items_set
});
});


photty_preloader();

if (jQuery('.photty_single_album_head').length > 0) {
    setup_photty_single_album();
    jQuery('html').addClass('photty_single_album');

    if (photty_window.scrollTop() > 10) {
        jQuery('html').addClass('header_scrolled');
    }
    photty_window.on('scroll', function () {
        if (photty_window.scrollTop() > 10) {
            jQuery('html').addClass('header_scrolled');
        } else {
            jQuery('html').removeClass('header_scrolled');
        }
    });
    jQuery('a.photty_album_down_arrow').on('click', function () {
        
     var photty_album_featured_height = photty_window.height();
     

     jQuery('html, body').stop().animate({scrollTop: photty_album_featured_height + 'px'}, 600);
 });
}

/* Back To Top */

jQuery('.photty_back_to_top').attr('data-bottom', parseInt(jQuery('.photty_back_to_top').css('bottom'), 10));
if (photty_window.scrollTop() > photty_window.height()) {
    jQuery('.photty_back_to_top').addClass('photty_show_me');
} else {
    jQuery('.photty_back_to_top').removeClass('photty_show_me');
    if (jQuery('.photty_footer').length > 0) {
        var footer_offset = jQuery('.photty_footer').offset().top,
        check_footer_state = photty_window.scrollTop() + photty_window.height(),
        photty_footer_showed = 'no',
        photty_b2t_fixer = 0;
        
        if ( check_footer_state >= footer_offset) {
            photty_b2t_fixer = check_footer_state - footer_offset;
            photty_footer_showed = 'yes';
        } else {
            photty_footer_showed = 'no';
            photty_b2t_fixer = 0;
        }
        jQuery('.photty_back_to_top').css('bottom', parseInt(jQuery('.photty_back_to_top').attr('data-bottom'), 10) + photty_b2t_fixer + 'px');
    }
}
photty_window.on('scroll', function(){
    if (photty_window.scrollTop() > photty_window.height()/2) {
        jQuery('.photty_back_to_top').addClass('photty_show_me');
    } else {
        jQuery('.photty_back_to_top').removeClass('photty_show_me');
    }
    if (jQuery('.photty_footer').length > 0) {
        var footer_offset = jQuery('.photty_footer').offset().top,
        check_footer_state = photty_window.scrollTop() + photty_window.height(),
        photty_footer_showed = 'no',
        photty_b2t_fixer = 0;
        
        if ( check_footer_state >= footer_offset) {
            photty_b2t_fixer = check_footer_state - footer_offset;
            photty_footer_showed = 'yes';
        } else {
            photty_footer_showed = 'no';
            photty_b2t_fixer = 0;
        }
        jQuery('.photty_back_to_top').css('bottom', parseInt(jQuery('.photty_back_to_top').attr('data-bottom'), 10) + photty_b2t_fixer + 'px');
    }
});
jQuery('.photty_back_to_top').on('click', function(){
    jQuery('html, body').stop().animate({scrollTop: 0}, 400, function(){
        jQuery('.photty_back_to_top').removeClass('photty_show_me');
    });
});
});


jQuery(window).on('load', function(){
    if (jQuery('.photty_preloader_wrapper').length > 0) {
        jQuery('.photty_preloader_wrapper').addClass('remove_preloader');
        setTimeout("jQuery('.photty_preloader_wrapper').remove()", 600);
    }
    photty_theme_setup();
    setTimeout("photty_theme_setup()", 500);

    if (jQuery('.photty_slider1i_auto_height').length) {
        $('.photty_slider1i_auto_height').owlCarousel({
            slideSpeed:200, 
            items:1,
            autoplayTimeout:2000,
            smartSpeed:200,
            autoplayHoverPause:true,
            autoHeight:true,
            nav: true,
            loop:true
        });
    }
});
jQuery(window).resize(function(){
	photty_cs_page_centered();
    if (jQuery('.photty_blog_grid_ratio').length > 0) {
        jQuery('.photty_blog_grid_ratio').each(function () {
            var setHeight = Math.floor(jQuery(this).width() * jQuery(this).attr('data-ratio'));
            jQuery(this).height(setHeight);
        });
    }
    photty_theme_setup();
    
    setTimeout("photty_theme_setup()", 500);
});




/* About slider */

if (jQuery('.photty_slider3i').length) {
  $('.photty_slider3i').owlCarousel({
      center: true,
      items:2,
      slideSpeed:200,       
      
      autoplayTimeout:2000,
      smartSpeed:200,
      autoplayHoverPause:true,
      loop:true,
      margin:30,
      responsive:{
          767:{
              items:4
          }
      }
  });
}
if (jQuery('.photty_slider1i').length) {
	$('.photty_slider1i').owlCarousel({
     slideSpeed:200, 
     items:1,
	    // autoplay: true,
	    autoplayTimeout:2000,
	    smartSpeed:200,
	    autoplayHoverPause:true,
	    nav: true,
	    loop:true
	});
}



/* Isopope */

if (jQuery('.grid').length) {
	var $grid = $('.grid').imagesLoaded().progress( function() {
     $grid.isotope({
         itemSelector: '.grid-item',
         layoutMode: 'fitRows'
     });
 }); 

	    // bind filter button click
	    $('.filters-button-group').on( 'click', 'button', function() {
         var filterValue = $( this ).attr('data-filter');
	        // use filterFn if matches value
           
         $grid.isotope({ filter: filterValue });
     });
	    // change is-checked class on buttons
	    $('.button-group').each( function( i, buttonGroup ) {
         var $buttonGroup = $( buttonGroup );
         $buttonGroup.on( 'click', 'button', function() {
             $buttonGroup.find('.is-checked').removeClass('is-checked');
             $( this ).addClass('is-checked');
         });
     })
	}
 


	if (jQuery('.grid1').length) {
     var $grid1 = $('.grid1').imagesLoaded().progress( function() {
         $grid1.isotope({
             itemSelector: '.grid-item'
             
         });
     });     
 }

 function photty_countdown() {
    jQuery('.photty_countdown').each(function(){
        var pm_year = jQuery(this).attr('data-year'),
        pm_month = jQuery(this).attr('data-month'),
        pm_day = jQuery(this).attr('data-day'),
        austDay = new Date(pm_year, pm_month - 1, pm_day);

        jQuery(this).countdown({
            until: austDay,
            padZeroes: true
        });
    });
}

function photty_cs_page_centered(){
    var container_cs_height = jQuery(window).height(),
    inner_container_cs_height = jQuery('.photty_content_cs_inner').height();
    if (inner_container_cs_height < container_cs_height) {
        var white_space = container_cs_height  - inner_container_cs_height;

        jQuery('.photty_content_cs').css({'padding-top': white_space / 2, 'padding-bottom': white_space / 2});
    }
}


function photty_theme_setup() {
    jQuery(".photty_owlCarousel").each(function () {
        jQuery(this).trigger('refresh.owl.carousel');
    });
    
    if (jQuery('.photty_grid').length > 0) {
        jQuery('.photty_grid').each(function () {
            var set_item_width = 100 / parseInt(jQuery(this).attr('data-inrow'), 10);
            jQuery(this).find('.photty_grid-item').css('width', set_item_width.toPrecision(3) + '%');
            var setPad = Math.floor(parseInt(jQuery(this).attr('data-setpad'), 10) / 2);
            jQuery(this).css('padding', setPad + 'px');
            jQuery(this).find('.photty_grid-item_iner').css({
                'margin-left': setPad + 'px',
                'margin-top': setPad + 'px',
                'margin-right': setPad + 'px',
                'margin-bottom': setPad + 'px'
            });
        });
        if (jQuery('.photty_grid_post_loading').length > 0) {
            jQuery(".photty_owlCarousel").on("initialized.owl.carousel", function (e) {
                jQuery(".photty_owlCarousel").css("opacity", "1");
            });
            jQuery(".photty_owlCarousel").owlCarousel(
            {
                items: 1,
                lazyLoad: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                autoHeight: false
            }
            );
            pm_load_blog_posts();
        }
    }
    if (jQuery('.photty_blog_grid_ratio').length > 0) {
        jQuery('.photty_blog_grid_ratio').each(function () {
            var setHeight = Math.floor(jQuery(this).width() * jQuery(this).attr('data-ratio'));
            jQuery(this).height(setHeight);
        });
    }
}

function pm_load_blog_posts() {
    if (jQuery('.photty_grid_post_loading').length > 0) {
        jQuery('.photty_grid_post_loading:first').removeClass('photty_grid_post_loading').animate({
            'z-index': '3'
        }, 200, function () {
            pm_load_blog_posts();
        });
    }

}



function setup_photty_single_album() {
    
    var photty_album_featured_height = photty_window.height();
    

    jQuery('.photty_single_album_head').css('margin-top', -1 * jQuery('header.photty_header').height() + 'px').height(photty_album_featured_height);
}

function photty_preloader() {
    if (jQuery('.photty_split_showcase').length > 0) {
        //Split Showcase Slides
        if (jQuery('.photty_preload_slide:first').length > 0) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.photty_preload_slide:first').removeClass('photty_preload_slide').addClass('photty_slide_loaded').animate({
                        'z-index': '15'
                    }, 100, function () {
                        photty_preloader();
                    });
                };
            }(new Image(), jQuery('.photty_preload_slide:first').attr('data-src')));
        } else {
            photty_split_gallery.removeClass('wait4load');
        }

        if ((jQuery('.photty_odd_slide1').hasClass('photty_slide_loaded') && jQuery('.photty_even_slide1').hasClass('photty_slide_loaded')) && !photty_split_gallery.hasClass('started')) {
            run_photty_split_slider();
        }
    }

    if (jQuery('.photty_ribbon_slider_wrapper').length > 0) {
        //Ribbon Slides
        if (jQuery('.photty_preload_slide:first').length > 0) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.photty_preload_slide:first').removeClass('photty_preload_slide').addClass('photty_slide_loaded').animate({
                        'z-index': '15'
                    }, 100, function () {
                        photty_preloader();
                    });
                };
            }(new Image(), jQuery('.photty_preload_slide:first').find('img').attr('src')));
        } else {
            photty_ribbon_slider.removeClass('wait4load');
        }

        if (jQuery('.photty_ribbon_slide1').hasClass('photty_slide_loaded') && !photty_ribbon_slider.hasClass('started')) {
            run_photty_ribbon_slider();
        }
    }

    if (jQuery('.photty_fullscreen_slider').length > 0) {
        //Fullscreen Slideshow Slides
        if (jQuery('.photty_preload_slide:first').length > 0) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.photty_preload_slide:first').removeClass('photty_preload_slide').addClass('photty_slide_loaded').animate({
                        'z-index': '15'
                    }, 100, function () {
                        photty_preloader();
                    });
                };
            }(new Image(), jQuery('.photty_preload_slide:first').attr('data-src')));
        } else {
            photty_fullscreen_slider.removeClass('wait4load');
        }

        if ((jQuery('.photty_fullscreen_slide1').hasClass('photty_slide_loaded')) && !photty_fullscreen_slider.hasClass('started')) {
            run_photty_fullscreen_slider();
        }
    }
}


jQuery.fn.grid_gallery_about = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.grid');

    jQuery('.photty_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="grid-item grid-item--width2 added">' +
                '<a href="' + addon_options.items[i].href + '" class="swipebox">' +
                '<div class="photty_grayscale_img">' +	
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                '</div>' +
                '</a>' +					
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
            
        }
    });
};






jQuery.fn.grid_gallery_masonry = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.grid1');

    jQuery('.photty_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="grid-item grid-item--width2 added">' +
                '<a href="' + addon_options.items[i].href + '" class="swipebox">' +
                '<div class="photty_grayscale_img">' +	
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                '</div>' +
                '</a>' +					
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
             $container.isotope("layout");
         });
        }
    });
};

jQuery.fn.album_listing = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.grid');

    jQuery('.photty_load_more').on('click', function () {
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="grid-item ' + addon_options.items[i].class + ' added">' +
                '<a class="photty_album_img" href="album-single.html">' +							
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                '</a>' +
                '<div class="photty_album_content">' +
                '<a href="album-single.html">' +
                '<h5>' + addon_options.items[i].title + '</h5>' +
                '</a>' +
                '<div class="photty_albums_categories">' +
                '<a href="' + addon_options.items[i].href1 + '">' + addon_options.items[i].cat_name1 + '</a>' +

                '<a href="' + addon_options.items[i].href2 + '">' + addon_options.items[i].cat_name2 + '</a>' +
                '</div>' +
                '</div>' +		
                '</div>' 

                ;
            }

            $newEls = jQuery(loaded_object);
            $container.isotope('insert', $newEls, function () {
                $container.isotope('reLayout');
            });
            $container.imagesLoaded().progress( function() {
                $container.isotope("layout");
            });
        }
    });
};



jQuery.fn.blog_grid_posts = function (addon_options) {
    "use strict";
    //Set Variables
    var addon_el = jQuery(this),
    addon_base = this,
    img_count = addon_options.items.length,
    img_per_load = addon_options.load_count,
    $newEls = '',
    loaded_object = '',
    $container = jQuery('.photty_grid');

    jQuery('.photty_load_more').on('click', function () {             
        $newEls = '';
        loaded_object = '';
        var loaded_images = $container.find('.added').length;
        if ((img_count - loaded_images) > img_per_load) {
            var now_load = img_per_load;
        } else {
            now_load = img_count - loaded_images;
        }

        if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

        if (loaded_images < 1) {
            var i_start = 1;
        } else {
            i_start = loaded_images + 1;
        }

        if (now_load > 0) {
            // load more elements
            for (var i = i_start - 1; i < i_start + now_load - 1; i++) {
                loaded_object = loaded_object +
                '<div class="photty_grid-item photty_grid_post_loading added">' +
                '<div class="photty_grid-item_iner">' +
                '<div class="photty_blog_grid_ratio" data-ratio="0.75">' +
                '<div class=" photty_post_formats">' +
                '<img src="' + addon_options.items[i].src + '" alt="">' +
                '</div>' +
                '</div>' +
                '<div class="photty_grid_post_content">' +
                '<a href="blog-single-post.html"><h5>' + addon_options.items[i].title + '</h5></a>' +
                '<div class="photty_meta">' +
                '<div>January 26, 2017</div>' + 
                '<div> <a href="' + addon_options.items[i].href + '"> pixel-mafia</a></div>' + 
                '<div class="photty_post_ref"> <a href="' + addon_options.items[i].href1 + '"> ' + addon_options.items[i].cat_name1 + '</a>, <a href="' + addon_options.items[i].href2 + '">' + addon_options.items[i].cat_name2 + '</a>, <a href="' + addon_options.items[i].href3 + '">' + addon_options.items[i].cat_name3 + '</a></div>' +
                '</div>' +  
                '<div class="photty_excerpt">' + addon_options.items[i].text + '</div>' +               
                '</div>' +
                '</div>' +
                '</div>'
                ;
            }

            $newEls = jQuery(loaded_object);

            $container.append($newEls);
            photty_theme_setup();
            
        }
    });
};


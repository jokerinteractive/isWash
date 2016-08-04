jQuery(function($) {

	$.fn.selectRange = function(start, end) {
    if(!end) end = start; 
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
	};
	
	$('.client-phone-3').bind('click focus', function() {
		$(this).selectRange(0);
	});
	
	var mobile = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);

	if(mobile != null) {
		$('html').css('width', window.innerWidth + 'px');
		$('html, body').addClass('mobile');
	}

	// Slide
	$('.result-item-slider').mousemove(function(e) {
		var offsetX = e.pageX - $(this).offset().left;
		
			if (offsetX < 0 || offsetX > $(this).width()) return false;
		
		$(this).find('.result-wrapper').css('width', offsetX);
		$(this).find('.drag-cursor').css('left', offsetX);
	});

	// IE placeholders
	$('input[placeholder], textarea[placeholder]').placeholder();
	
	// Labels focus
	$('label').click(function() {$(this).next('input, textarea').focus();})
	
	// Client phone jump
	$('.client-phone-jump').on('input', function() {if ($(this).val().length >= $(this).prop('maxlength')) {$(this).next('input, textarea').focus()}})
	
	// Mask phone
	$('.client-phone-1').mask('+9');
	$('.client-phone-2').mask('999');
	$('.client-phone-3').mask('999-99-99');

	
	// Modal photos
	$('a[data-rel]').each(function() {$(this).attr('rel', $(this).data('rel'));}); 
	$('a[rel^=prettyPhoto]').prettyPhoto({social_tools : false});
	
	
	// Counter 
	var tomorrow = new Date();
		tomorrow.setHours(24,0,0,0);
	$('.counter').countdown({
		until: tomorrow,
		layout: '<div class="counter-item first">{dn}<br /><span>{dl}</span></div>' +
				'<div class="counter-item">{hnn}<br /><span>{hl}</span></div>' +
				'<div class="counter-dots">:</div>' +
				'<div class="counter-item">{mnn}<br /><span>{ml}</span></div>' +
				'<div class="counter-dots">:</div>' +
				'<div class="counter-item">{snn}<br /><span>{sl}</span></div>'
	});


	
	// Modals
		
		// Phone
		$('.open-phone-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .phone-modal').fadeIn(700);
			$('.phone-modal .send-extra').val($(this).data('extra'));
			return false;
		});
					
		// Calc
		$('.open-calc-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .calc-modal').fadeIn(700);
			return false;
		});
								
		// Clean
		$('.open-clean-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .clean-modal').fadeIn(700);
			$('.clean-modal .send-extra').val($(this).data('extra'));
			return false;
		});
											
		// Price
		$('.open-price-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .price-modal').fadeIn(700);
			return false;
		});
							
		// Also
		$('.open-also-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .also-modal').fadeIn(700);
			$('.also-modal .send-extra').val($(this).data('extra'));
			return false;
		});
				
		// Simple
		$('.open-simple-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .simple-modal').fadeIn(700);
			return false;
		});
							
		// Questions
		$('.open-questions-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .questions-modal').fadeIn(700);
			return false;
		});
										
		// Privacy
		$('.open-privacy-modal').click(function() {
			$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()});
			$('.si-overlay, .privacy-modal').fadeIn(700);
			return false;
		});
				
			
			// Overlay close
			$('.si-overlay').click(function() {
			
				$('.si-overlay').fadeOut(700);
				$('.si-modal').fadeOut(700);
				$('.si-success-modal').fadeOut(700);
				
				return false;
				
			});
			
			$('.si-close').click(function() {
			
				$('.si-overlay').fadeOut(700);
				$('.si-modal').fadeOut(700);
				$('.si-success-modal').fadeOut(700);
				
				return false;
				
			});
});

$(window).load(function() {
  $("#before-after").twentytwenty();
  $("a[href*='#']").mPageScroll2id({
  	offset: 60
  });
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18
  });
}

/* Adding blocks, transform blocks, only for correct display */
$(document).ready(function() {

	$('a[rel*=leanModal]').leanModal({ top : 125, closeButton: ".modal_close" });	
	
	$('a[rel=leanModal]').click(function(){
		$('#makeorder .service').val($(this).attr('valueforleanmodal')); 
	});
	
	$('a[rel=leanModal]').click(function(){
		$('#makeorder2 .service').val($(this).attr('valueforleanmodal')); 
	});

	$(".fancybox").fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',

		helpers : {
			title : {
				type : 'over'
			}
		}
	});

		var form_top = $('nav').offset().top;
		$(window).scroll(function() {
			var scroll_top = $(this).scrollTop();
			if (scroll_top > form_top) {
				$('nav').css('top', 0).css('position', 'fixed').css('z-index', 3);
			} else {
				$('nav').css('top', '').css('position', '');
			}
		});

	$(".menu_a a").click(function(event) {
		event.preventDefault(); $(".menu").animate({ "height": "toggle", "opacity": "toggle" });
	});

	$('.complete a').click(function () {
		$('.complete').fadeOut('slow', function () {
			// Animation complete.
		});
	});

	$('.error a').click(function () {
		$('.error').fadeOut('slow', function () {
			// Animation complete.
		});
	});

	$('input[data-placeholder], textarea[data-placeholder]').each(function() {
		var placeholder = $(this).attr('data-placeholder');
		if ((($(this).val() !== undefined) && ($(this).val().length > 0)) && ($(this).val() != placeholder)) {
			$(this).removeClass('placeholder');
		} else {
			$(this).val(placeholder);
			$(this).addClass('placeholder');
		}
		$(this).focusin(function() {
			$(this).removeClass('placeholder');
			if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
				$(this).val('');
			}
		});
		$(this).focusout(function() {
			if (($(this).val() === undefined) || ($(this).val() == '') || ($(this).val() == placeholder)) {
				$(this).val(placeholder);
				$(this).addClass('placeholder');		
			}
		});		
	});
	
	$('form').submit(function() {
		$(this).find('input[data-placeholder], textarea[data-placeholder]').each(function() {
			var placeholder = $(this).attr('data-placeholder');
			$(this).removeClass('placeholder');
			if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
				$(this).val('');
			}	
		});
	});


	var set_slide = function(selector, slide) {
	  	$(selector).text(slide);
  	}
	
  	var time = new Date();
	var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
	target_time = target_time.valueOf()+1000*60*60*24;
	
	
	
	var tick = function(init) {
		if (init == undefined) {
			init = false;
		}
		var current_time = new Date();
		current_time = current_time.valueOf();
		if (current_time > target_time) {
		  	var time = new Date();
			target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
			target_time = target_time.valueOf()+1000*60*60*24;			
		}
		var time_diff = Math.floor((target_time - current_time)/1000);	
		var second_2 = time_diff % 10; time_diff = Math.floor(time_diff/10);
		var second_1 = time_diff % 6; time_diff = Math.floor(time_diff/6);
		var minute_2 = time_diff % 10; time_diff = Math.floor(time_diff/10);
		var minute_1 = time_diff % 6; time_diff = Math.floor(time_diff/6);
		var hour_2 = Math.floor(time_diff/10);
		var hour_1 = time_diff % 10;
	  	set_slide('span.secondPlay', second_2);
	  	if ((second_2 == 9) || init) {set_slide('span.second6Play', second_1);
	  	if ((second_1 == 5) || init) {set_slide('span.minutePlay', minute_2);
	  	if ((minute_2 == 9) || init) {set_slide('span.minute6Play', minute_1);
	  	if ((minute_1 == 5) || init) {set_slide('span.hourPlay', hour_1);
	  	if ((hour_2 == 9) || init) {set_slide('span.hour2Play', hour_2);}}}}}
	  }
	tick(true);
	setInterval(tick, 1000);
	
	if(null === navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)){ 

		var scene = document.getElementById('scene');
		var parallax = new Parallax(scene);

		// ниже вставляем код, который НЕ БУДЕТ РАБОТАТЬ на iphone|ipod|ipad|android
		$('.scroll-animate').each(function () {
			var block = $(this);
			$(window).scroll(function() {
				var top = block.offset().top;
				var bottom = block.height()+top;
				top = top - $(window).height();
				var scroll_top = $(this).scrollTop();
				if ((scroll_top > top) && (scroll_top < bottom)) {
					if (!block.hasClass('animate')) {
						block.addClass('animate');
						block.trigger('animateIn');
					}
				} else {
					block.removeClass('animate');
					block.trigger('animateOut');
				}
			});				
		
		});
		
		$('.counts em').each(function() {
			$(this).attr('data-number', parseInt($(this).text()));
		});
		
		$('.counts').on('animateIn', function() {
			$(this).find('em').each(function() {
				var count =  parseInt($(this).attr('data-number'));
				var block = $(this);
				var timeout = null;
				var step = 1;
				timeout = setInterval(function() {
					if (step == 40) {
						block.text(count.toString());
						clearInterval(timeout);
					} else {
						block.text((Math.floor(count*step/25)).toString());
						step++;
					}
				}, 60);
			});
		});
		
		$('.projects').on('animateIn', function() {
			var inter = 0;
			$(this).find('.scale').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
					block.css('transform', 'scale(1.0, 1.0)');
				}, inter*100);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.scale').each(function() {
				$(this).css('opacity', 0.01);
				$(this).css('transform', 'scale(0.5, 0.5)');
			});
		});

		$('.whats, .e1, .e2, .e3, .e4, .e5, .e6, .e7, .e8, .e9, .e10, .v1a, .v2a, .v3a, .v4a, .p1a, .p2a, .p3a, .p4a, .p5a, .p6a, .p7a, .p8a, .a1a, .a2a, .a3a, .a4a, .a5a').on('animateIn', function() {
			var inter = 0;
			$(this).find('.fade').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
				}, inter*500);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.fade').each(function() {
				$(this).css('opacity', 0.01);
			});
		});

		$('.whats').on('animateIn', function() {
			var inter = 0;
			$(this).find('.fade1').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
				}, inter*220);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.fade1').each(function() {
				$(this).css('opacity', 0.01);
			});
		});	

		$('.hww').on('animateIn', function() {
			var inter = 0;
			$(this).find('.fade2').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
				}, inter*400);
				inter++;
			});
		}).on('animateOut', function() {
			$(this).find('.fade1').each(function() {
				$(this).css('opacity', 0.01);
			});
		});	

		$('.hww').on('animateIn', function () {
			$(this).find('.car').each(function() {
				var block = $(this);
				setTimeout(function() {
					block.css('opacity', 1);
					block.addClass('slideRight');
				}, 1700);
			});
		}).on('animateOut', function() {
			$(this).find('.car').each(function() {
				$(this).css('opacity', 0.01);
				$(this).removeClass('slideRight');
			});
		});

	}

	if(null !== navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)){ 

		// ниже вставляем код, который БУДЕТ РАБОТАТЬ ТОЛЬКО на iphone|ipod|ipad|android 
		$('head').append('<style>.scale, .fade{opacity:1} .fade1{opacity:1} .car{opacity:1}</style>'); // это css-код, который делает видимыми элементы анимации, которые изначально прописаны невидимыми
	}

});

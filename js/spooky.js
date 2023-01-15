var flyAway = function( flyer, props ) {
	var defaults = {
		fps: 11,
		no_of_frames: 6,
		duration: 3200,
		delay: 1500,
		left: '550px',
		top: '-400px',
		origin_left: '80px',
		origin_top: '540px',
		easing: 'easeOutQuad'
	}
	props = $.extend(defaults, props || {});

	setTimeout(function watchMeSoar(){
		flyer
			.show().css({
				left: props.origin_left,
				top: props.origin_top
			})
			// http://www.spritely.net/documentation/
			.sprite({
				fps: props.fps,
				no_of_frames: props.no_of_frames
			}).animate({
				left: props.left,
				top: props.top
			}, props.duration, props.easing, function(){
				flyer.fadeOut( function(){
					// fly again
					flyer
						.show().css({
							left: props.origin_left,
							top: props.origin_top
						})
						.animate({
							left: props.left,
							top: props.top
						}, props.duration, props.easing, function() {
							flyer.destroy().hide();
						});
				});
			});

	}, props.delay);
}

$.easing.easeOutQuad = function (x, t, b, c, d) {
	return -c *(t/=d)*(t-2) + b;
}

$(function letBatsLoose() {

	flyAway( $('#sam_bat'), {
		left: '550px',
		top: '-400px',
		delay: 1400
	});

	flyAway( $('#left_bat'), {
		left: '-500px',
		top: '-420px',
		delay: 1800,
		duration: 3400
	});

	flyAway( $('#spencer_bat'), {
		left: '860px',
		top: '-420px',
		delay: 2200,
		duration: 3100
	});

	flyAway( $('#gibby_bat'), {
		left: '180px',
		top: '-400px',
		delay: 2900,
		duration: 3200
	});

	flyAway( $('#carly_bat'), {
		left: '1100px',
		top: '-390px',
		delay: 3400,
		duration: 3300
	});

	flyAway( $('#freddie_bat'), {
		left: '-220px',
		top: '-420px',
		delay: 4200,
		duration: 4000
	});

	flyAway( $('#right_bat'), {
		left: '860px',
		top: '-420px',
		delay: 5400,
		duration: 3500
	});
 });
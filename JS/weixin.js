$(document).ready(function($) {
	$('.carousel').owlCarousel({
		loop:false,
		margin:90,
		nav:true,
		lazyLoad:true, 
		autoplay:false,//是否开启自动播放
        autoplayTimeout:1000,//控制自动播放的速度
        merge: true, 
		video: true,
        responsive:{	
		    120:{items:1},//当屏幕大小缩小到480的时候变2个
            480:{items:1},//当屏幕大小缩小到480的时候变2个
			678:{items:2},//当屏幕大小缩小到678的时候变3个
			960:{items:3},//当屏幕大小缩小到960的时候变5个
			1200:{items:4},
		}
	});
});
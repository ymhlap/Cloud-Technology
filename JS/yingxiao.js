$(document).ready(function($) {
	$('.carousel').owlCarousel({
		loop:false,
		margin:0,
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
			1200:{items:5},
		}
	});
});

$(document).ready(function($) {
	$('.Marketing_idea_content').owlCarousel({
		loop:false,
		margin:0,
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
			960:{items:2},//当屏幕大小缩小到960的时候变5个
			1200:{items:3},
		}
	});
});

$(function(){
    time();
});
function time(){
    setTimeout(function(){
      $(".xqsj").addClass("on");
      $(".qnwh").removeClass("on");
    }, 1000);
    setTimeout(function(){
      $(".fxch").addClass("on");
      $(".xqsj").removeClass("on");
    }, 2000);
    setTimeout(function(){
      $(".hzqd").addClass("on");
      $(".fxch").removeClass("on");
      $(".xqsj").removeClass("on");
    }, 3000);
    setTimeout(function(){
      $(".ymsj").addClass("on");
      $(".hzqd").removeClass("on");
      $(".fxch").removeClass("on");
      $(".xqsj").removeClass("on");
    }, 4000);
    setTimeout(function(){
      $(".kfzz").addClass("on");
      $(".ymsj").removeClass("on");
      $(".hzqd").removeClass("on");
      $(".fxch").removeClass("on");
      $(".xqsj").removeClass("on");
    }, 5000);
    setTimeout(function(){
      $(".sxcs").addClass("on");
      $(".kfzz").removeClass("on");
      $(".ymsj").removeClass("on");
      $(".hzqd").removeClass("on");
      $(".fxch").removeClass("on");
      $(".xqsj").removeClass("on");
    }, 6000);
    setTimeout(function(){
      $(".fkxg").addClass("on");
      $(".sxcs").removeClass("on");
      $(".kfzz").removeClass("on");
      $(".ymsj").removeClass("on");
      $(".hzqd").removeClass("on");
      $(".fxch").removeClass("on");
      $(".xqsj").removeClass("on");
    }, 7000);
    setTimeout(function(){
      $(".ktsx").addClass("on");
      $(".fkxg").removeClass("on");
      $(".sxcs").removeClass("on");
      $(".kfzz").removeClass("on");
      $(".ymsj").removeClass("on");
      $(".hzqd").removeClass("on");
      $(".fxch").removeClass("on");
      $(".xqsj").removeClass("on");
    }, 8000);
    setTimeout(function(){
      $(".qnwh").addClass("on");
      $(".ktsx").removeClass("on");
      $(".fkxg").removeClass("on");
      $(".sxcs").removeClass("on");
      $(".kfzz").removeClass("on");
      $(".ymsj").removeClass("on");
      $(".hzqd").removeClass("on");
      $(".fxch").removeClass("on");
      $(".xqsj").removeClass("on");
      time();
    }, 9000);
}
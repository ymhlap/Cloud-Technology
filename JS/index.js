$(document).ready(function(e) {
	var video1=document.getElementById("video_button");
	var video2=document.getElementById("video_button2");
		video1.onclick=function(){
			   video2.play();
			   video2.muted=false;
			   video2.volume="0.4"
			   video1.style.display="none";
	
		}
		video2.onclick=function(){
		   video2.pause();
		   video1.style.display="block";
		}
    
});

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
			1200:{items:4},
		}
	});
});

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       200
      }
    );
    wow.init();
    
    //判断浏览器大小加上事件
	var width=$(window).width();
	if(width <= 700) {
		   wow = new WOW(
	      {
	        animateClass: 'animated',
	        offset:       10
	      }
	    );
	    wow.init();
	    function fixed_gun(obj){
			var m_top=$(obj).offset().top;
			$(window).scroll(function(){
				if($(window).scrollTop() >= m_top -300){
					onlyOne();
				};
			});	
		};
	}
	
	//数字滚动
	fixed_gun("#digital");	
	var flag = 1;
	function onlyOne() {
		if(flag == 1) {
			$('.counter-demo-4').lemCounter();
		}
		flag = 0;
	};
	function fixed_gun(obj){
		var m_top=$(obj).offset().top;
		$(window).scroll(function(){
			if($(window).scrollTop() >= m_top + 300){
				onlyOne();
			};
		});	
	};

    $('.slick-hero-slider').slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        focusOnSelect: true,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
    });
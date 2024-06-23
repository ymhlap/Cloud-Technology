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
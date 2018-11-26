$(function(){
//recruit anchor
  $(".menu li").click(function(){
    var target = $(this).attr("class");
    var speed = 1000; // ミリ秒
    //var target = $(".head02");
    var targetid = "#" + $(this).attr("class");
    var target = $(targetid);
    if(target.offset() !== undefined) {
    var position = target.offset().top - 90;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    $('.navbar-collapse').removeClass('in');
  }else{
    window.location.href = "/"+targetid ;
  }
    return false;

  });

//scroll & fadeIn
  $('.animate-box').animateCssPlus({
    scroll:true,
    class:'fadeInUp'
  });


  //header slide Down & Up
 var flag = "up";

 $(window).on("scroll", function () {
   var doch = $(document).innerHeight();
   var winh = $(window).innerHeight();
   var bottom = doch - winh;

   if ($(this).scrollTop() > 400) {
     if (flag === "up") {
       $(".navbar-default.navbar-fixed-top").removeClass("slide-up");
       $(".navbar-default.navbar-fixed-top").addClass("slide-down");
       flag = "down";
     }

 if (bottom <= $(this).scrollTop()) {
   if (flag === "down") {
   $(".navbar-default.navbar-fixed-top").removeClass("slide-down");
   $(".navbar-default.navbar-fixed-top").addClass("slide-up");
   flag = "up";
  }
 }


   } else {
     if (flag === "down") {
       $(".navbar-default.navbar-fixed-top").removeClass("slide-down");
       $(".navbar-default.navbar-fixed-top").addClass("slide-up");
       flag = "up";
     }
   }


 });

  });

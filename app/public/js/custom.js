$(function(){
  //menu anchor
  $(".menu li").click(function(){
    var target = $(this).attr("class");
    var speed = 1000; // ミリ秒
    //var target = $(".head02");
    var targetid = "#" + $(this).attr("class");
    var target = $(targetid);
    if(target.offset() !== undefined) {
    var position = target.offset().top + 300;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
  }else{
    return true;
  }
    return false;

  });

  //scroll to down
  $('.scroll').click(function(){
    var pos = $(window).offset();
    var pos_down = $(document).height()-$(window).height();
    $('body,html').animate({scrollTop: pos_down}, 1000, 'swing');
  });

    //scroll to top
    $(".scroll-top img").on("click", function() {
       $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });

  //hanko anchor
  $('.anchor a').click(function(){
    var target = $(this).attr("class");
    var speed = 1000; // ミリ秒
    var targetid = "#" + $(this).attr("class");
    var target = $(targetid);
    if(target.offset() !== undefined) {
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
    }
    return false;
  });


  //scroll & fadeIn
  $('.fadein').animateCssPlus({
    scroll:true,
    class:'fadeInUp'
  });



 	// Global Sticky
  var waypointsHideGlobal = $('.sticky_point').waypoint({
		handler: function(direction) {
      if(direction === 'down'){
				$('.navbar-default').addClass('sticky');
      }else{
      	$('.navbar-default').removeClass('sticky');
      }
		},
  	offset: '0'
	});
  // other page  Sticky
  $('.other_page').prev('header').addClass('sticky_point');

  });

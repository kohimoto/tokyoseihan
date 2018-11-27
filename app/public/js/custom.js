$(function(){
//recruit anchor
  $(".menu li").click(function(){
    var target = $(this).attr("class");
    var speed = 1000; // ミリ秒
    //var target = $(".head02");
    var targetid = "#" + $(this).attr("class");
    var target = $(targetid);
    if(target.offset() !== undefined) {
    var position = target.offset().top + 300;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    $('.navbar-collapse').removeClass('in');
  }else{
    return true;
  }
    return false;

  });
//  $('.scroll').click(function(){
//    var pos = $(window).offset();
//    $('body,html').animate({scrollTop:'200px'}, 1000, 'swing');
//  });

//scroll & fadeIn
  $('.animate-box').animateCssPlus({
    scroll:true,
    class:'fadeInUp'
  });


  //Tab to top
  $(".scroll-top img").on("click", function() {
     $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });


  //header slide Down & Up

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
  $('.other_page').prev('header').addClass('sticky_point');

  });

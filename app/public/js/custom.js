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

  });

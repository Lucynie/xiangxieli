/**
 * Created by nie on 2016/12/6.
 */
$(document).ready(function () {
   $(window).scroll(function () {
       if($(window).scrollTop()>700){
           $(".float_top").stop().show().animate({opacity:1});
       }else{
           $(".float_top").stop().animate({opacity:0}).hide();
       }
   })
    $(".banner .d1 .scroll2").scrollable({size:1,items:".banner .d1 .scroll2",speed:500,vertical:true,loop:true})
                             .autoscroll({autoplay:true,interval:3000,steps:1})
                             .navigator({navi:".banner_u1",naviItem:"li",activeClass:"focus"})

    $(".back").click(function () {
        $("html,body").animate({scrollTop:0},2000)
    })
})
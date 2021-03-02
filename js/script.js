	
/*window.addEventListener=('DOMContentLoaded', function(){
		$("#my-video").addClass("play");
	});
	*/

$(window).scroll(function(){
	var sc_top = $(this).scrollTop();
	
	console.log(sc_top);
	
	/*1024 ~ 1920*/
	if(sc_top > 700){
		$("header").addClass("active");
		
		
	}
	
	else if(sc_top < 700){
		$("header").removeClass("active");
		$(".section-guide").removeClass("active");
	
	}
	
	if(sc_top > 701){
		$(".section-guide").addClass("active");
		
		$(".section-guide > .guide-wrap:nth-child(1)").addClass("active");
	
	}
	
	else{
		$(".section-guide").removeClass("active");
	}
	
	
	if(sc_top > 1100){
		$(".section-guide > .guide-wrap:nth-child(1)").removeClass("active");
		
		$(".section-guide > .guide-wrap:nth-child(2)").addClass("active");
	
	}
	
	else{
		$(".section-guide > .guide-wrap:nth-child(2)").removeClass("active");
	}
	
	if(sc_top > 2170){
		
		$(".section-guide > .guide-wrap:nth-child(1)").removeClass("active");
		
		
		$(".section-guide > .guide-wrap:nth-child(2)").removeClass("active");
		
		$(".section-guide > .guide-wrap:nth-child(3)").addClass("active");
	}
	
	else{
		$(".section-guide > .guide-wrap:nth-child(3)").removeClass("active");
	}
	
	if(sc_top > 3000){
		
		$(".section-guide > .guide-wrap:nth-child(1)").removeClass("active");
		
		
		$(".section-guide > .guide-wrap:nth-child(2)").removeClass("active");
		
			$(".section-guide > .guide-wrap:nth-child(3)").removeClass("active");
		
		$(".section-guide > .guide-wrap:nth-child(4)").addClass("active");
	}
	
	else{
		$(".section-guide > .guide-wrap:nth-child(4)").removeClass("active");
	}
	
	if(sc_top > 3800){
		$(".section-guide").removeClass("active");
		
	}
	
	else if(sc_top < 700){
		$(".section-guide").removeClass("active");
	} 
    
    
    /*768 ~ 1024*/
	
   
	
	if(sc_top > 200){
		$(".section-guide-2").addClass("active");
		
		$(".section-guide-2 > .guide-wrap-2:nth-child(1)").addClass("active");
	
	}
	
	else{
		$(".section-guide-2").removeClass("active");
	}
    
    if(sc_top > 1400){
		$(".section-guide-2 > .guide-wrap-2:nth-child(1)").removeClass("active");
		
		$(".section-guide-2 > .guide-wrap-2:nth-child(2)").addClass("active");
	
	}
	
	else{
		$(".section-guide-2 > .guide-wrap-2:nth-child(2)").removeClass("active");
	}
	
    
    if(sc_top > 2050){
		
		$(".section-guide-2 > .guide-wrap-2:nth-child(1)").removeClass("active");
		
		
		$(".section-guide-2 > .guide-wrap-2:nth-child(2)").removeClass("active");
		
		$(".section-guide-2 > .guide-wrap-2:nth-child(3)").addClass("active");
	}
	
	else{
		$(".section-guide-2 > .guide-wrap-2:nth-child(3)").removeClass("active");
	}
    
    	if(sc_top > 2800){
		
		$(".section-guide-2 > .guide-wrap-2:nth-child(1)").removeClass("active");
		
		
		$(".section-guide-2 > .guide-wrap-2:nth-child(2)").removeClass("active");
		
			$(".section-guide-2 > .guide-wrap-2:nth-child(3)").removeClass("active");
		
		$(".section-guide-2 > .guide-wrap-2:nth-child(4)").addClass("active");
	}
	
	else{
		$(".section-guide-2 > .guide-wrap-2:nth-child(4)").removeClass("active");
	}

    
    if(sc_top > 3200){
		$(".section-guide-2").removeClass("active");
		
	}
	
	else if(sc_top < 200){
		$(".section-guide-2").removeClass("active");
	} 
    
    
	

	
});



$(document).ready(function(){
	
    /*section-guide1*/
	$(".section-guide > .guide-wrap:nth-child(1)> p").click(function(){
		$("html, body").animate({ scrollTop: 702 });
	});
	
	
	$(".section-guide > .guide-wrap:nth-child(2) > p").click(function(){
		$("html, body").animate({ scrollTop: 1250 });
	});
	
	$(".section-guide > .guide-wrap:nth-child(3) > p").click(function(){
		$("html, body").animate({ scrollTop: 2600 });
	});
	
	$(".section-guide > .guide-wrap:nth-child(4) > p").click(function(){
		$("html, body").animate({ scrollTop: 3700});
	});
    
      /*section-guide2*/
    $(".section-guide-2 > .guide-wrap-2:nth-child(1)> p").click(function(){
		$("html, body").animate({ scrollTop: 201 });
	});
	
	
	$(".section-guide-2 > .guide-wrap-2:nth-child(2) > p").click(function(){
		$("html, body").animate({ scrollTop: 1401 });
	});
	
	$(".section-guide-2 > .guide-wrap-2:nth-child(3) > p").click(function(){
		$("html, body").animate({ scrollTop: 2060 });
	});
	
	$(".section-guide-2 > .guide-wrap-2:nth-child(4) > p").click(function(){
		$("html, body").animate({ scrollTop: 2810});
	});
    
	
		/*img1*/
	$(".nav-wrap > .nav-bg > .content-wrap > .left-wrap > .ul-menu-wrap > ul:nth-of-type(1) > li").mouseover(function(){
		
		$(".nav-wrap > .nav-bg > .content-wrap > .right-wrap > .right-img-wrap > .img1").addClass("active");
	});
	
	

		/*img2*/
	$(".nav-wrap > .nav-bg > .content-wrap > .left-wrap > .ul-menu-wrap > ul:nth-of-type(2) > li").mouseover(function(){
		
		$(".nav-wrap > .nav-bg > .content-wrap > .right-wrap > .right-img-wrap > .img2").addClass("active");
	});
	
	$(".nav-wrap > .nav-bg > .content-wrap > .left-wrap > .ul-menu-wrap > ul:nth-of-type(2) > li").mouseleave(function(){
		
		$(".nav-wrap > .nav-bg > .content-wrap > .right-wrap > .right-img-wrap > .img2").removeClass("active");
	});
	
	/*img3*/
	$(".nav-wrap > .nav-bg > .content-wrap > .left-wrap > .ul-menu-wrap > ul:nth-of-type(3) > li").mouseover(function(){
		
		$(".nav-wrap > .nav-bg > .content-wrap > .right-wrap > .right-img-wrap > .img3").addClass("active");
	});
	
	$(".nav-wrap > .nav-bg > .content-wrap > .left-wrap > .ul-menu-wrap > ul:nth-of-type(3) > li").mouseleave(function(){
		
		$(".nav-wrap > .nav-bg > .content-wrap > .right-wrap > .right-img-wrap > .img3").removeClass("active");
	});
	
	/*img4*/
	$(".nav-wrap > .nav-bg > .content-wrap > .left-wrap > .ul-menu-wrap > ul:nth-of-type(4) > li").mouseover(function(){
		
		$(".nav-wrap > .nav-bg > .content-wrap > .right-wrap > .right-img-wrap > .img4").addClass("active");
	});
	
	$(".nav-wrap > .nav-bg > .content-wrap > .left-wrap > .ul-menu-wrap > ul:nth-of-type(4) > li").mouseleave(function(){
		
		$(".nav-wrap > .nav-bg > .content-wrap > .right-wrap > .right-img-wrap > .img4").removeClass("active");
	});
	
	$(".top-bar-wrap > .ham-menu-wrap").click(function(){
		$(this).toggleClass("active");
		
		$(".nav-wrap").toggleClass("active");
		
		
		$(".top-bar-wrap > .logo-wrap").toggleClass("active");
		
		$(".top-bar-wrap > .menu-wrap").toggleClass("active");
	});
	
	

	
    /*main-slide*/
  $('.main-bg').slick({
	 slidesToShow:1,
	  dots:true,
	  arrows:false,
	  draggable:true,
	   autoplay:true,
    autoplaySpeed:4000,
	  
  });
	
	 /*section1-slide*/
 $('.right-slider').slick({
	 slidesToShow:3,
	 slidesToScroll:1,
	 arrows:false,
	   dots:false,
	  arrows:false,
	  autoplay:true,
    autoplaySpeed:4000,
     responsive: [
         {
             breakpoint:1024,
             settings: {
             
              slidesToShow:3,
				 
                 
         }
			 
         },
		 {
			 breakpoint:768,
             settings: {
				centerMode:true,
              slidesToShow:1.56,
				
		 }
		 },
		 {
			 breakpoint:540,
             settings: {
				
              slidesToShow:1,
				 dots:true,
				
				
			 }
		 }
     ]
     
  });	
	
	
	/*scrollmagic*/
	var controller = new ScrollMagic.Controller();
	
	
	/*section1*/
	/*section1 text*/
	var tween1 = TweenMax.to(".section1 > .section1-wrap > .left-box-wrap > .left-img > .left-text-box", 1 , {
		
		opacity:1,
		
		
	});
	
	var scene1 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 40,
	
	})
	
	
.setTween(tween1) 
.addTo(controller) 

	
	var tween2 = TweenMax.to(".section1 > .section1-wrap > .left-box-wrap > .left-img > .section1-more", 1 , {
		
		opacity:1,
		
		
	});
	
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 40,
	
	})
	
	
.setTween(tween2) 
.addTo(controller) 
	
	
	var tween2_1 = TweenMax.to(".section1 > .section1-wrap > .left-box-wrap > .left-img-2", 1 , {
		
		left:"12%",
		opacity:1,
		
	});
	
	var scene2_1 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 40,
	
	})
	
	
.setTween(tween2_1) 
.addTo(controller)

	
var tween2_2 = TweenMax.to(".section1 > .section1-wrap > .left-box-wrap > .left-img-3", 1 , {
		
		left:"15%",
		opacity:1,
		
	});
	
	var scene2_2 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 40,
	
	})
	
	
.setTween(tween2_2) 
.addTo(controller)

var tween2_3 = TweenMax.to(".section1 > .section1-wrap > .left-box-wrap > .left-img-4", 1 , {
		
		left:"17%",
		opacity:1,
		
	});
	
	var scene2_3 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 40,
	
	})
	
	
.setTween(tween2_3) 
.addTo(controller)

		
	
var tween2_3 = TweenMax.to(".section1 > .section1-wrap > .left-box-wrap > .left-img-two", 1 , {
		
		left:"38%",
		opacity:1,
		
	});
	
	var scene2_3 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 40,
	
	})
	
	
.setTween(tween2_3) 
.addTo(controller)

	
var tween2_4 = TweenMax.to(".section1 > .section1-wrap > .left-box-wrap > .left-img-three", 1 , {
		
		left:"34%",
		opacity:1,
		
	});
	
	var scene2_4 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 40,
	
	})
	
	
.setTween(tween2_4) 
.addTo(controller)

	
	


	
/*section1 text ed*/
	
/*section1 color-bar st*/	
var tween3 = TweenMax.to(".right-box-wrap > .top-color-bar", 1 , {
		
		opacity:1,
		width:"44vw",
		
	});
	
	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 270,
	
	})
	
	
.setTween(tween3) 
.addTo(controller) 
	

	
var tween3_1 = TweenMax.to(".right-box-wrap > .btm-color-bar", 1 , {
		
		opacity:1,
		width:"24vw",
		
	});
	
	var scene3_1 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 270,
	
	})
	
	
.setTween(tween3_1) 
.addTo(controller) 

	
var tween3_2 = TweenMax.to(".section1 > .section1-wrap > .top-color-2-bar", 1 , {
		
		opacity:1,
		width:"55vw",
		
	});
	
	var scene3_2 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 500,
	
	})
	
	
.setTween(tween3_2) 
.addTo(controller) 	

	
var tween3_3 = TweenMax.to(".section1 > .section1-wrap > .btm-color-2-bar", 1 , {
		
		opacity:1,
		width:"45vw",
		
	});
	
	var scene3_3 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 550,
	
	})
	
	
.setTween(tween3_3) 
.addTo(controller) 	
	
	
/*section1 color-bar st*/	

/*section1 img background st*/	
var tween4 = TweenMax.to(".slider-img .box-shadow", 1 , {
		
		opacity:1,
		width:"16vw",
		
	});
	
	var scene4 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 220,
	
	})
	
	
.setTween(tween4) 
.addTo(controller) 
 
var tween4_1 = TweenMax.to(".slider-img .box-shadow-2", 1 , {
		
		opacity:1,
		width:"24vw",
		
	});
	
	var scene4_1 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 220,
	
	})
	
	
.setTween(tween4_1) 
.addTo(controller) 

var tween4_2 = TweenMax.to(".slider-img .box-shadow-3", 1 , {
		
		opacity:1,
		width:"38vw",
		
	});
	
	var scene4_2 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 220,
	
	})
	
	
.setTween(tween4_2) 
.addTo(controller) 
	
	
/*section1 img background ed*/
	
/*section1 img st*/		
var tween5 = TweenMax.to(".dia", 1 , {
		
		left:"0%",
	opacity:1,
		
	});
	
	var scene5 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 220,
	
	})
	
	
.setTween(tween5) 
.addTo(controller) 

var tween6 = TweenMax.to(".dia-2", 1 , {
		
		left:"0%",
	opacity:1,
		
	});
	
	var scene6 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 220,
	
	})
	
	
.setTween(tween6) 
.addTo(controller) 
	
var tween7 = TweenMax.to(".dia-3", 1 , {
		
		left:"0%",
	opacity:1,
		
	});
	
	var scene7 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 220,
	
	})
	
	
.setTween(tween7) 
.addTo(controller) 
	
	var tween8 = TweenMax.to(".dia-4", 1 , {
		
		left:"0%",
	opacity:1,
		
	});
	
	var scene8 = new ScrollMagic.Scene({
		triggerElement: ".section1",
     triggerHook:  0.5, //0~1 ,
      offset: 220,
	
	})
	
	
.setTween(tween8) 
.addTo(controller) 
	
/*section1 img ed*/		
	
/*section1 ed*/	
	
/*section2*/	
	var tween9 = TweenMax.to(".section2 > .section2-img-wrap > .woman-img-box", 1 , {
		
		
	    opacity:1,
		
	});
	
	var scene9 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 90,
	
	})
	
	
.setTween(tween9) 
.addTo(controller) 
	
	
	
	var tween10 = TweenMax.to(".section2 > .section2-img-wrap > .store-img-box", 1 , {
		
		left:"0%",
		top:"20%",
	    opacity:1,
		
	});
	
	var scene10 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 90,
	
	})
	
	
.setTween(tween10) 
.addTo(controller) 
	
	
var tween10_1 = TweenMax.to(".section2 > .section2-img-wrap > .store-img-box-2", 1 , {
		
		left:"9%",
		top:"17%",
	    opacity:1,
		
	});
	
	var scene10_1 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 90,
	
	})
	
	
.setTween(tween10_1) 
.addTo(controller) 

	
var tween10_2 = TweenMax.to(".section2 > .section2-img-wrap > .store-img-box-3", 1 , {
		
		left:"11%",
		top:"14%",
	    opacity:1,
		
	});
	
	var scene10_2 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 90,
	
	})
	
	
.setTween(tween10_2) 
.addTo(controller) 


	var tween11 = TweenMax.to(".section2 > .section2-img-wrap > .necklace-img-box", 1 , {
		
		
		top:"-7.8vw",
	    opacity:1,
		
	});
	
	var scene11 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 140,
	
	})
	
	
.setTween(tween11) 
.addTo(controller) 
	
	
	var tween11_1 = TweenMax.to(".section2 > .section2-img-wrap > .necklace-img-box-2", 1 , {
		
		
		top:"-1vw",
	    opacity:1,
		
	});
	
	var scene11_1 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 200,
	
	})
	
	
.setTween(tween11_1) 
.addTo(controller) 

	
	
	var tween11_2 = TweenMax.to(".section2 > .section2-img-wrap > .necklace-img-box-3", 1 , {
		
		
		top:"-17vw",
		left:"50%",
	    opacity:1,
		
	});
	
	var scene11_2 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 200,
	
	})
	
	
.setTween(tween11_2) 
.addTo(controller) 

	
var tween12 = TweenMax.to(".section2 > .section2-img-wrap > .text-box-wrap", 1 , {
		
		
		right:"0%",
	    opacity:1,
		
	});
	
	var scene12 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 170,
	
	})
	
	
.setTween(tween12) 
.addTo(controller) 

	
var tween12_1 = TweenMax.to(".section2 > .section2-img-wrap > .text-box-wrap-2 > .text-box-img-2", 1 , {
		
		
		top:"-36vw",
	    left:"43.2%",
	    opacity:1,
		
	});
	
	var scene12_1 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 170,
	
	})
	
	
.setTween(tween12_1) 
.addTo(controller) 

	
	
var tween12_2 = TweenMax.to(".section2 > .section2-img-wrap > .text-box-wrap-3", 1 , {
		
		
		top:"47%",
	   
	    opacity:1,
		
	});
	
	var scene12_2 = new ScrollMagic.Scene({
		triggerElement: ".section2",
     triggerHook:  0.5, //0~1 ,
      offset: 170,
	
	})
	
	
.setTween(tween12_2) 
.addTo(controller) 

/*section2 ed*/
	
/*section3 st*/

var tween13 = TweenMax.to(".section3 > .top-img-deco", 1 , {
		
		
		width:"76.5vw",
	    opacity:1,
		
	});
	
	var scene13 = new ScrollMagic.Scene({
		triggerElement: ".section3",
     triggerHook:  0.5, //0~1 ,
      offset: 200,
	
	})
	
	
.setTween(tween13) 
.addTo(controller) 

	
	
var tween14 = TweenMax.to(".section3 > .btm-img-deco", 1 , {
		
		
		width:"29vw",
	    opacity:1,
		
	});
	
	var scene14 = new ScrollMagic.Scene({
		triggerElement: ".section3",
     triggerHook:  0.5, //0~1 ,
      offset: 310,
	
	})
	
	
.setTween(tween14) 
.addTo(controller) 

	
var tween14_1 = TweenMax.to(".section3 > .btm-deco-2", 1 , {
		
		
		width:"34vw",
	    opacity:1,
		
	});
	
	var scene14_1 = new ScrollMagic.Scene({
		triggerElement: ".section3",
     triggerHook:  0.5, //0~1 ,
      offset: 490,
	
	})
	
	
.setTween(tween14_1) 
.addTo(controller) 

/*section3 ed*/	
	
var tween15 = TweenMax.to(".section4 > .section4-bg > .explain-box-img > .three-text-img > .service-text-wrap > .top-number", 1 , {
		
		
		top:"6%",
	opacity:1,
		
	});
	
	var scene15 = new ScrollMagic.Scene({
		triggerElement: ".section4",
     triggerHook:  0.5, //0~1 ,
      offset: 50,
	
	})
	
	
.setTween(tween15) 
.addTo(controller) 

	

var tween16 = TweenMax.to(".section4 > .section4-bg > .explain-box-img > .three-text-img > .service-text-wrap > .mid-title", 1 , {
		
		
		top:"2.8vw",
	opacity:1,
		
	});
	
	var scene16 = new ScrollMagic.Scene({
		triggerElement: ".section4",
     triggerHook:  0.5, //0~1 ,
      offset: 50,
	
	})
	
	
.setTween(tween16) 
.addTo(controller) 

var tween17 = TweenMax.to(".section4 > .section4-bg > .explain-box-img > .three-text-img > .service-text-wrap > .btm-ex-wrap", 1 , {
		
		
		top:"5.5vw",
	opacity:1,
		
	});
	
	var scene17 = new ScrollMagic.Scene({
		triggerElement: ".section4",
     triggerHook:  0.5, //0~1 ,
      offset: 50,
	
	})
	
	
.setTween(tween17) 
.addTo(controller) 


	


	

	
  var animate1 = new Vivus('Layer_1', {duration: 160});
var animate2 = new Vivus('Layer_2', {duration: 160});
	var animate3 = new Vivus('Layer_3', {duration: 160});
	var animate4 = new Vivus('Layer_4', {duration: 100});
	
	var animate5 = new Vivus('Layer_5', {duration: 100});
	
	
	
	
});









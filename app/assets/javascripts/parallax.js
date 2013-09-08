/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh   
 */


$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
}); // window scroll Ends

 });	

}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");

var addPic= function(){
		window.onscroll = function () {
		var scrollPosition=window.pageYOffset;
		var joynmePosition = document.getElementById("joynme-scroll").offsetTop + parseInt($("#joynme").css("margin-top").replace("px",""));
		var mindsnacksPosition = document.getElementById("mindsnacks-scroll").offsetTop + parseInt($("#mindsnacks").css("margin-top").replace("px",""));
		var ngmocoPosition = document.getElementById("ngmoco-scroll").offsetTop + parseInt($("#ngmoco").css("margin-top").replace("px",""));
		var headerHeight = $("#header").height();
		var topSpacing = 200;

			if(scrollPosition > joynmePosition - headerHeight - topSpacing){
				if (document.getElementById('joynme-image') == null){
					image = document.createElement("img");
					image.src = "assets/JoynMe-Logo-with-Pin-no-blue.300x100 (1).png";
					image.style.marginLeft = "1000px";
					image.id = "joynme-image";
					document.getElementById('joynme-logo').appendChild(image);
					$(image).animate({'margin-left':'0px'},1000);
				};
			};

			if(scrollPosition > mindsnacksPosition - headerHeight - topSpacing){
				if (document.getElementById('mindsnacks-image') == null){
					image = document.createElement("img");
					image.src = "assets/mindsnackslogo.png";
					image.id = "mindsnacks-image";
					image.style.marginLeft = "1000px";
					document.getElementById('mindsnacks-logo').appendChild(image);
					$(image).animate({'margin-left':'0px'},1000);
				};
			};
			
			if(scrollPosition > ngmocoPosition - headerHeight - topSpacing){
				if (document.getElementById('ngmoco-image') == null){
					image = document.createElement("img")
					image.src = "assets/logo.png"
					image.id = "ngmoco-image"
					image.style.marginLeft = "1000px";
					document.getElementById('ngmoco-logo').appendChild(image);
					$(image).animate({'margin-left':'0px'},1000);
				};
			};
		};
	};

	addPic();
	
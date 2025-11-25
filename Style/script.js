/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
	$(".mobnav").click(function(){
		$(".headerNavigationrow").slideToggle().slow;
	});
	$(".rocketInfo").click(function(){
		$(".headerToprow").slideToggle().slow;
	});
	
	if ($(window).width() <= 767) {
        $(".nav li").each(function(){
			//$(this).find("svg").css({"color": "red", "border": "2px solid red"});
			if($(this).children().length > 1){
				$(this).find("svg").css({"display": "none"});
				$(this).prepend('<svg class="icon icon-angle-down" aria-hidden="true" role="img"> <use href="#icon-angle-down" xlink:href="#icon-angle-down"></use> </svg>');
			}
		});
		$(document).on("click", ".nav li .icon-angle-down", function(){
			$(this).siblings("ul").slideToggle().slow;
			$(this).siblings("ul").css({"visibility": "visible"});
		});
    }
	
	$(".icon-angle-down").click(function(){
		$(this).next("ul").slideToggle();
	});
	
	
  
  $(document).on('click', '.livechat', function(e) {

    $(".olark-launch-button").trigger('click');
});
	
});

window.addEventListener('load', (event) => {	
  	$(document).find('#cta-viewer').remove();
});
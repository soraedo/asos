$(document).ready(function() {

	var h = window.innerHeight;
	var w = window.innerWidth;


	$("#filter").css({'width': h});
	$("#grid").css({'width': w*.75, 'height': w*.75});
	$("#wom").css({'height': w*.25});
	$("#man").css({'height': w*.25});
	$(".anim").css({'height': w/8});
	$("#video video").css({'height': w/3});

	$('li').on('click',function(event){
		$(this).addClass('bold');
		$(this).find('*').removeClass('bold');
		$(this).siblings().removeClass('bold');
		$(this).siblings().find('*').removeClass('bold');
		$(this).siblings().children().addClass('hidden');
		$(this).children().toggleClass('hidden');
		event.stopPropagation();
	});

});
$(document).ready(function() {

	var h = window.innerHeight;
	var w = window.innerWidth;


	$("#social").css({'width': h});
	$("#gallery").css({'width': h*.7*2, 'height': h*.7});

	$('#nav li').on('click',function(event){
		$(this).addClass('bold');
		$(this).find('*').removeClass('bold');
		$(this).siblings().removeClass('bold');
		$(this).siblings().find('*').removeClass('bold');
		$(this).siblings().children().addClass('hidden');
		$(this).children().toggleClass('hidden');
		event.stopPropagation();
	});

	$('.single').mouseenter(function(){
		var img = $(this).css('background-image');
		$('video').hide();
		$('#big').css({'background-image': img});
	});

	$('#video').mouseenter(function(){
		$('video')[0].currentTime = 0;
		$('video').show();
	});
});
$(document).ready(function() {

	var h = window.innerHeight;
	var w = window.innerWidth;


	$("#social").css({'width': h});
	$("#grid").css({'width': w*.75, 'height': w*.75});
	$("#wom").css({'height': w*.25});
	$("#man").css({'height': w*.25});
	$(".anim").css({'height': w/8});
	$("#video video").css({'height': w/3});


	//newin sync
	function left() {
		$("#wom")[0].currentTime = 0;
		$("#wom")[0].play();
		$('#wom').fadeIn(1000).delay(7000).fadeOut(1, right);
	}

	function right() {
		$("#man")[0].currentTime = 0;
		$("#man")[0].play();
		$("#man").fadeIn().delay(7000).fadeOut(500, left);
	}

	left();

	//modal stuff

	$('.btn').click(function() {
	    $('.modal').css({'display': "block"})
	});

	$('.close').click(function() {
	    $('.modal').css({'display': "none"})
	});

	$('.modal').click(function() {
	    $('.modal').css({'display': "none"})
	});

	$('.label').hover(function() {
		$('.label p').css({'text-decoration':'underline'})
	}, function() {
		$('.label p').css({'text-decoration':'none'})
	});

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
$(document).ready(function() {

var grfxController = new Object();
	grfxController.pareggioAltezze = function() {
		$(window).bind('resize', function() {
			setTimeout(function() {
				$('.slide1').height($('#img1').height());
				$('.slide1 > .clicker').height($('#img1').height() - 40);
				$('.slide2').height($('#img2').height());
				$('.slide2 > .clicker').height($('#img2').height() - 40);
				$('.slide3').height($('#img3').height());
				$('.slide3 > .clicker').height($('#img3').height() - 40);
			}, 100);
		}).trigger('resize');
	};

	grfxController.pareggioAltezze();
	var slidesController = new Object();
	slidesController.altezzaSlides = function() {
		$(window).bind('resize', function() {
			setTimeout(function() {                         
                var hAllSlides = $('.slide1').height() + $('.slide2').height() + $('.slide3').height();                           
                var ratio= 21.64634146341463;            
                var hSlide1= $('.slide1').height();                
                var scartohSlide1 = (hSlide1 / 100) * (ratio);     
                var spostamento1= (hSlide1 - scartohSlide1 ) + 'px';             
                var hSlide2= $('.slide1').height() + $('.slide2').height();
                var scartohSlide2 = (hSlide2 / 100) * (ratio);                   
                var spostamento2= (hSlide2 - scartohSlide2 ) + 'px';
				$('.pos2').css('top', spostamento1);
				$('.pos3').css('top',spostamento2);
				$('.slides').height(hAllSlides);
			}, 100);
		}).trigger('resize');
	};
	slidesController.altezzaSlides();

	$('.slide1 > .clicker, .slide2 > .clicker, .slide3 > .clicker').hover(function() {
		$(this).next('.sopra').fadeOut();
	}, function() {
		$(this).next('.sopra').fadeIn();
	});
	
	});

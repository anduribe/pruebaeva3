$(document).ready(function() {

	$(window).on('scroll', function() {
		if($(window).scrollTop() > 450) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});

	$('.btn-menu').click(function(){
		$('.menu-mobile').addClass('visible');
	});	
	$('.cerrar-menu').click(function(){
		$('.menu-mobile').removeClass('visible');
	});	

	$('.menu-top').click(function(){
		$('.menu-lateral').addClass('visible');
	});	
	$('.cerrar-menu-lateral').click(function(){
		$('.menu-lateral').removeClass('visible');
	});

    $('.pestanas-banner').on('click','.visible .ic-img',function(){
    	$(this).parent().removeClass('visible');
    	$(this).parent().addClass('oculto');
    });       
    $('.pestanas-banner').on('click','.oculto .ic-img',function(){
    	$(this).parent().addClass('visible');
    	$(this).parent().removeClass('oculto');
    });

	if($(window).width()<768){
		$('.pestanas-banner div').removeClass('visible');
		$('.pestanas-banner div').addClass('oculto');
	}
   

	if($(window).width()>991){
	   	var h1 = $('.wrap-resultados .wrap-postulacion').height();
	   	var h2 = $('.wrap-resultados .wrap-renovantes').height();
	   	if(h1 > h2){
	   		$('.wrap-resultados .wrap-postulacion').height(h1);
	   		$('.wrap-resultados .wrap-renovantes').height(h1);  		
	   	}
	   	else{
	   		$('.wrap-resultados .wrap-postulacion').height(h2);
	   		$('.wrap-resultados .wrap-renovantes').height(h2);
	   	}
   	}
});
$(window).load(function () {
	$('#cargando').fadeOut(1200);
});

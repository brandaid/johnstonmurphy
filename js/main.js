$(document).ready(function() {

	//GALERIA DE IMAGENES
	$(".lightgallery").lightGallery(); 

	$('.launchGallery').click(function(){
	    $(this).siblings('div.lightgallery').find("a").trigger('click');    
	});
	
});
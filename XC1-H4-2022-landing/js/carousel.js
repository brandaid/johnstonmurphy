// WIDGET CAROUSEL 

$(document).ready(function() {
  var sync1 = $(".carousel-mobile");
  sync1.owlCarousel({
    margin: 14,
    items: 5,
    autoWidth:true,
	loop: true,
	autoplay: true,
    nav: false,
    responsive : {
    // breakpoint from 768 up
    768 : {
		autoWidth:false,
    }
}
  });

});


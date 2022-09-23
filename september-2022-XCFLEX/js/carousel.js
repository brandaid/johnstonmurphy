// WIDGET CAROUSEL 

$(document).ready(function() {
  var sync1 = $(".carousel-mobile");
  sync1.owlCarousel({
    margin: 10,
    items: 4,
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


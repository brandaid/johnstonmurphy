// WIDGET CAROUSEL 

let owlInitialized = false;

function toggleCarousel() {
  const isMobile = window.innerWidth < 768;
  const $carousel = $('.carousel-mobile');

  if (isMobile && !owlInitialized) {
    $carousel.owlCarousel({
      margin: 14,
      items: 3,
      autoWidth:true,
      loop: false,
      autoplay: false,
      nav: false,
    });
    owlInitialized = true;
  } else if (!isMobile && owlInitialized) {
    $carousel.trigger('destroy.owl.carousel');
    $carousel.removeClass('owl-carousel owl-loaded');
    $carousel.find('.owl-stage-outer').children().unwrap(); 
    $carousel.find('.owl-stage').children().unwrap(); 
    $carousel.find('.owl-item').children().unwrap();
    owlInitialized = false;
  }
}

// Run on load and on resize
$(document).ready(toggleCarousel);
$(window).on('resize', function () {
  toggleCarousel();
});

// VIDEO ON ROLLOVER 

 document.querySelectorAll('.media-container').forEach(container => {
    const video = container.querySelector('.hover-video');
    
    // Para desktop (hover)
    container.addEventListener('mouseenter', () => {
      video.play();
      video.style.opacity = 1;  // Hacer visible el video
    });

    container.addEventListener('mouseleave', () => {
      video.pause();
      // No reseteamos el video, solo lo pausamos
      // El video seguirá en su último punto sin reiniciarse
      video.style.opacity = 0;  // Ocultar el video
    });

    // Para dispositivos táctiles
    let isPlaying = false;

    container.addEventListener('touchstart', (e) => {
      e.stopPropagation();

      // Si ya está reproduciendo, detenerlo
      if (isPlaying) {
        video.pause();
        video.style.opacity = 0;
        isPlaying = false;
      } else {
        video.play();
        video.style.opacity = 1;
        isPlaying = true;
      }
    });
  });
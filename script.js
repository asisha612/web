document.addEventListener('DOMContentLoaded', function() {
    // Lightbox initialization
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ScrollReveal animations
    ScrollReveal().reveal('.header h1', { delay: 200 });
    ScrollReveal().reveal('.header p', { delay: 400 });
    ScrollReveal().reveal('.section h2', { delay: 200 });
    ScrollReveal().reveal('.gallery-item, .video-gallery video, blockquote', { delay: 400, interval: 200 });
});
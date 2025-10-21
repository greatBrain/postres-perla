(function () {
   'use strict';
   document.addEventListener('DOMContentLoaded', function () {
      initSmoothScroll();
      initProductCarousel();
      initTestimonialCarousel();
   });
   function initSmoothScroll() {
      const anchors = document.querySelectorAll('a[href^="#"]');
      function scrollToElement(e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);

         if (targetElement) {
            targetElement.scrollIntoView({
               behavior: 'smooth'
            });
         }
      }
      anchors.forEach(anchor => {
         anchor.addEventListener('click', scrollToElement);
      });
   }
   function initTestimonialCarousel() {
      const elements = {
         carousel: document.getElementById('testimonial-carousel'),
         bullets: document.querySelectorAll('button[aria-label^="Ver testimonio"]')
      };
      if (!elements.carousel || !elements.bullets.length) {
         console.warn('Testimonial carousel elements not found');
         return;
      }
      const state = {
         currentSlide: 0,
         totalSlides: elements.bullets.length,
         autoplayInterval: null,
         autoplayDelay: 7000
      };

      function goToTestimonialSlide(slideIndex) {
         state.currentSlide = slideIndex;
         const offset = -slideIndex * 100;
         elements.carousel.style.transform = `translateX(${offset}%)`;
         elements.bullets.forEach((bullet, i) => {
            bullet.classList.toggle('bg-gray-400', i === slideIndex);
            bullet.classList.toggle('bg-gray-300', i !== slideIndex);
         });
      }
      function startAutoplay() {
         state.autoplayInterval = setInterval(() => {
            const nextSlide = (state.currentSlide + 1) % state.totalSlides;
            goToTestimonialSlide(nextSlide);
         }, state.autoplayDelay);
      }
      function stopAutoplay() {
         if (state.autoplayInterval) {
            clearInterval(state.autoplayInterval);
         }
      }
      function attachEventListeners() {
         elements.bullets.forEach((bullet, i) => {
            bullet.addEventListener('click', () => {
               goToTestimonialSlide(i);
               stopAutoplay();
               startAutoplay();
            });
         });
         elements.carousel.addEventListener('mouseenter', stopAutoplay);
         elements.carousel.addEventListener('mouseleave', startAutoplay);
      }
      function initialize() {
         attachEventListeners();
         goToTestimonialSlide(0);
         startAutoplay();
      }
      initialize();
   }
})();
function sendWhatsappMessage(productName){
    const PHONENUMBER = '8296469680';
    const BASEMESSAGE = `Hola Perla, me interesa hablar sobre este producto:\n${productName}\n`;
    const ENCODEDMESSAGE = encodeURIComponent(BASEMESSAGE);
    const WHATSAPPURL = `https://wa.me/${PHONENUMBER}?text=${ENCODEDMESSAGE}`;
    return WHATSAPPURL;
}
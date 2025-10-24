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
})();
function sendWhatsappMessage(productName){
    const PHONENUMBER = '8296469680';
    const BASEMESSAGE = `Hola Perla, me interesa hablar sobre este producto:\n${productName}\n`;
    const ENCODEDMESSAGE = encodeURIComponent(BASEMESSAGE);
    const WHATSAPPURL = `https://wa.me/${PHONENUMBER}?text=${ENCODEDMESSAGE}`;
    return WHATSAPPURL;
}
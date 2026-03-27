// Importar Datos
import { ALL_PRODUCTS } from '../data/products-data.js';
import { SLIDER_DATA } from '../data/slider-data.js';

// Importar Componentes
import '../components/site-navbar.js';
import '../components/site-hero.js';
import '../components/site-catalog.js';
import '../components/site-testimonials.js';
import '../components/site-contact.js';
import '../components/site-about.js';
import '../components/site-footer.js';
import '../components/floating-whatsapp.js';
import '../components/portion-calculator.js';

// Hacer los datos disponibles globalmente para Alpine.js (Light DOM)
window.ALL_PRODUCTS = ALL_PRODUCTS;
window.SLIDER_DATA = SLIDER_DATA;

// Lógica de Soporte contextual para WhatsApp (Centralizada)
export function sendWhatsappMessage(context = {}) {
   const PHONENUMBER = '8296469680';
   let message = "Hola Perla! ";

   if (typeof context === 'string') {
      // Retrocompatibilidad si se pasa solo un string
      message += `Quiero pedir un *${context}* que vi en el catálogo.`;
   } else if (context.type === 'product') {
      message += `Quiero pedir un *${context.productName}* que vi en el catálogo.`;
   } else if (context.type === 'prodductConfigurator') {
      message += `He usado la calculadora de prodcutos y necesito una cotización para un evento de *${context.portions} personas*. Estilo: *${context.style}*.`;
   } else {
      message += "Me gustaría recibir más información sobre sus productos y servicios especializados.";
   }

   const ENCODEDMESSAGE = encodeURIComponent(message);
   return `https://wa.me/${PHONENUMBER}?text=${ENCODEDMESSAGE}`;
}
window.sendWhatsappMessage = sendWhatsappMessage;

// Inicialización de Scripts (Swiper, AOS, etc.)
document.addEventListener('DOMContentLoaded', function () {
   initSmoothScroll();
   renderStars();
   initTestimonialCarousel();
});

function initSmoothScroll() {
   const anchors = document.querySelectorAll('a[href^="#"]');
   function scrollToElement(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
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

function renderStars() {
   const starContainers = document.querySelectorAll('.stars-container');
   const starSVG = `<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`;

   starContainers.forEach(container => {
      const slide = container.closest('.swiper-slide');
      if (slide) {
         const rating = parseInt(slide.dataset.rating) || 5;
         container.innerHTML = starSVG.repeat(rating);
      }
   });
}

function initTestimonialCarousel() {
   if (typeof Swiper !== 'undefined' && document.querySelector('.testimonialSwiper')) {
      new Swiper('.testimonialSwiper', {
         loop: true,
         loopAdditionalSlides: 2,
         slidesPerView: 1,
         spaceBetween: 20,
         autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
         },
         pagination: {
            el: '.testimonial-pagination',
            clickable: true,
            dynamicBullets: true,
         },
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         observer: true,
         observeParents: true,
         breakpoints: {
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            1024: {
               slidesPerView: 2,
               spaceBetween: 30,
            },
         }
      });
   }
}
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
   function initProductCarousel() {
      const elements = {
         slider: document.querySelector(".slider-container"),
         bullets: document.querySelectorAll(".carousel-bullet"),
         slides: document.querySelectorAll(".slide"),
         prevBtn: document.getElementById("prevBtn"),
         nextBtn: document.getElementById("nextBtn")
      };
      if (!elements.slider || !elements.slides.length) {
         console.warn('Product carousel elements not found');
         return;
      }
      const state = {
         currentIndex: 0,
         totalSlides: elements.slides.length,
         slideWidth: elements.slides[0].offsetWidth,
         touchStartX: 0
      };
      function goToSlide(index) {
         state.currentIndex = index;
         elements.slider.style.transform = `translateX(-${index * state.slideWidth}px)`;

         elements.bullets.forEach((bullet, i) => {
            bullet.classList.toggle("opacity-100", i === index);
         });
      }
      function goToPrevSlide() {
         const newIndex = (state.currentIndex - 1 + state.totalSlides) % state.totalSlides;
         goToSlide(newIndex);
      }
      function goToNextSlide() {
         const newIndex = (state.currentIndex + 1) % state.totalSlides;
         goToSlide(newIndex);
      }
      function handleTouchStart(e) {
         state.touchStartX = e.touches[0].clientX;
      }
      function handleTouchEnd(e) {
         const endX = e.changedTouches[0].clientX;
         const diffX = state.touchStartX - endX;
         if (diffX > 50) {
            goToNextSlide();
         } else if (diffX < -50) {
            goToPrevSlide();
         }
      }
      function handleResize() {
         state.slideWidth = elements.slides[0].offsetWidth;
         goToSlide(state.currentIndex);
      }
      function attachEventListeners() {
         elements.bullets.forEach((bullet, i) => {
            bullet.addEventListener("click", () => goToSlide(i));
         });
         if (elements.prevBtn) {
            elements.prevBtn.addEventListener("click", goToPrevSlide);
         }
         if (elements.nextBtn) {
            elements.nextBtn.addEventListener("click", goToNextSlide);
         }
         elements.slider.addEventListener("touchstart", handleTouchStart, {
            passive: true
         });
         elements.slider.addEventListener("touchend", handleTouchEnd, {
            passive: true
         });
         window.addEventListener("resize", handleResize);
      }
      function initialize() {
         attachEventListeners();
         goToSlide(0);
      }
      initialize();
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

//Toogle de las categorias de productos
(function(){
   document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.category-btn');
      const contentAreas = document.querySelectorAll('.category-content');      
      
      const defaultCategory = 'pasteles-bizcochos';
      /**
       * Función para alternar las clases de activo/inactivo y mostrar el contenido.
       * @param {string} targetCategory - El valor 'data-category' del botón clicado.
       */
      const toggleCategory = (targetCategory) => {
         // 1. Manejo de Botones (Clases de Estilo)
         buttons.forEach(btn => {
               if (btn.dataset.category === targetCategory) {
                  // Activar: Fondo amarillo, texto oscuro y sombra fuerte
                  btn.classList.add('bg-yellow-300', 'shadow-xl', 'text-gray-800');
                  btn.classList.remove('bg-white', 'hover:bg-gray-100', 'shadow-md', 'text-gray-700');
               } else {
                  // Desactivar: Fondo blanco, texto gris y sombra normal
                  btn.classList.add('bg-white', 'hover:bg-gray-100', 'shadow-md', 'text-gray-700');
                  btn.classList.remove('bg-yellow-300', 'shadow-xl', 'text-gray-800');
               }
         });
         // 2. Manejo de Contenido (Mostrar/Ocultar Divs)
         contentAreas.forEach(contentDiv => {
               const contentId = contentDiv.id.replace('-content', '');
               
               if (contentId === targetCategory) {
                  contentDiv.classList.remove('hidden');
                  // Opcional: Desplazar la vista al contenido
                  contentDiv.scrollIntoView({ behavior: 'smooth' }); 
               } else {
                  contentDiv.classList.add('hidden');
               }
         });
      };

      // 3. Establecer la categoría por defecto al cargar la página
      toggleCategory(defaultCategory);

      // 4. Añadir Listeners a los botones
      buttons.forEach(button => {
         button.addEventListener('click', () => {
               const category = button.dataset.category;
               toggleCategory(category);
         });
      });
   });
})();
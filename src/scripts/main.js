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
            if (diffX > 50) { goToNextSlide(); } else if (diffX < -50) { goToPrevSlide(); }
        }
        function handleResize() {
            state.slideWidth = elements.slides[0].offsetWidth;
            goToSlide(state.currentIndex);
        }
        function attachEventListeners() {
            elements.bullets.forEach((bullet, i) => {
                bullet.addEventListener("click", () => goToSlide(i));
            });
            if (elements.prevBtn) { elements.prevBtn.addEventListener("click", goToPrevSlide); }
            if (elements.nextBtn) { elements.nextBtn.addEventListener("click", goToNextSlide); }
            elements.slider.addEventListener("touchstart", handleTouchStart, { passive: true });
            elements.slider.addEventListener("touchend", handleTouchEnd, { passive: true });
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
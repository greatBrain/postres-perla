/*Smooth scroll behavior */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*Lazy load banner text */
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(element => {
        setTimeout(() => {
            element.classList.add('show');
        }, element.classList.contains('delay-1') ? 500 : element.classList.contains('delay-2') ? 1000 : element.classList.contains('delay-button') ? 1550 : 0);
    });
});

//Products cards
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-container");
    const bullets = document.querySelectorAll(".carousel-bullet");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const total = slides.length;
    let slideWidth = slides[0].offsetWidth;

    const goToSlide = (i) => {
        index = i;
        slider.style.transform = `translateX(-${i * slideWidth}px)`;
        bullets.forEach(b => b.classList.remove("opacity-100"));
        if (bullets[i]) bullets[i].classList.add("opacity-100");
    };

    bullets.forEach((bullet, i) => bullet.addEventListener("click", () => goToSlide(i)));

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + total) % total;
        goToSlide(index);
    });

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % total;
        goToSlide(index);
    });

    // Swipe mobile
    let startX = 0;
    slider.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
    slider.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) nextBtn.click();
        else if (endX - startX > 50) prevBtn.click();
    });

    // Init
    goToSlide(0);
    window.addEventListener("resize", () => {
        slideWidth = slides[0].offsetWidth;
        goToSlide(index);
    });
});
//End products

//Testimonials
document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.getElementById('carousel-items');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const items = carouselItems.children;
    let currentIndex = 0;
    let itemWidth = items[0].offsetWidth;
    let intervalId;

    function updateCarousel() {
        carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    startAutoSlide();

    // Responsividad
    function handleResize() {
        itemWidth = items[0].offsetWidth;
        updateCarousel();
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Inicializa el tamaño

    // Pausa el auto-slide al pasar el mouse sobre el carrusel
    carouselItems.addEventListener('mouseenter', stopAutoSlide);
    carouselItems.addEventListener('mouseleave', startAutoSlide);

});
//End Testimonials
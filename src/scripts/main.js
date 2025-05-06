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
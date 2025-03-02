/* Fade banner section on scroll*/
window.addEventListener('scroll', () => {
    const banner = document.querySelector('.banner');
    const scrollPosition = window.scrollY;
    const bannerHeight = banner.offsetHeight;
    const opacity = 1 - (scrollPosition / bannerHeight); // Calcula la opacidad

    if (opacity >= 0) { // Evita valores de opacidad negativos
        banner.style.opacity = opacity;
    } else {
        banner.style.opacity = 0; // Asegura que la opacidad no sea menor que 0
    }
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
    const sliderContainer = document.getElementById('slider-container');
    let slideIndex = 0;
    const slides = sliderContainer.children;
    const slideWidth = slides[0].offsetWidth;

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(nextSlide, 5000); // Cambia la imagen cada 3 segundos
});
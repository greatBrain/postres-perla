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
let currentSlide = 0;
    const carousel = document.getElementById('testimonial-carousel');
    const bullets = document.querySelectorAll('button[aria-label^="Ver testimonio"]');

    function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      const offset = -slideIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
      bullets.forEach((b, i) => {
        b.classList.toggle('bg-gray-400', i === slideIndex);
        b.classList.toggle('bg-gray-300', i !== slideIndex);
      });
    }
    setInterval(() => {
      currentSlide = (currentSlide + 1) % 3;
      goToSlide(currentSlide);
    }, 7000);
//End Testimonials
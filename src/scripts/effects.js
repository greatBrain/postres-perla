// Parallax Effect Logic (Maintained for layout behavior)
document.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    if (parallaxElements.length > 0) {
        parallaxElements.forEach(element => {
            element.style.backgroundPosition = `95% calc(50% + ${scrolled * 0.3}px)`;
        });
    }
});
function imageSlider() {
    return {
        currentIndex: 1, // Start at 1 because index 0 is the clone of the last slide
        slides: [],
        rawSlides: window.SLIDER_DATA || [],
        interval: null,
        autoplaySpeed: 3800,
        touchStartX: null,
        isTransitioning: false,

        init() {
            // Setup slides with clones for infinite loop: [Last, 0, 1, 2, First]
            if (this.rawSlides.length > 0) {
                const lastClone = { ...this.rawSlides[this.rawSlides.length - 1] };
                const firstClone = { ...this.rawSlides[0] };
                this.slides = [lastClone, ...this.rawSlides, firstClone];
            }
            this.startAutoplay();
        },

        startAutoplay() {
            this.stopAutoplay();
            this.interval = setInterval(() => {
                this.next();
            }, this.autoplaySpeed);
        },

        stopAutoplay() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        },

        next() {
            if (this.isTransitioning) return;
            this.isTransitioning = true;
            this.currentIndex++;

            // Check for jump after transition
            setTimeout(() => {
                if (this.currentIndex >= this.slides.length - 1) {
                    this.jumpToIndex(1);
                }
                this.isTransitioning = false;
            }, 500); // Match CSS duration
        },

        prev() {
            if (this.isTransitioning) return;
            this.isTransitioning = true;
            this.currentIndex--;

            setTimeout(() => {
                if (this.currentIndex <= 0) {
                    this.jumpToIndex(this.slides.length - 2);
                }
                this.isTransitioning = false;
            }, 500);
        },

        jumpToIndex(index) {
            // Disable transition temporarily
            const el = document.querySelector('.slider-flex-container');
            if (el) el.style.transition = 'none';
            this.currentIndex = index;
            // Force reflow
            if (el) el.offsetHeight;
            if (el) el.style.transition = 'transform 500ms ease-out';
        },

        goTo(index) {
            if (this.isTransitioning) return;
            this.currentIndex = index + 1; // +1 because of the clone at 0
            this.startAutoplay();
        }
    }
}

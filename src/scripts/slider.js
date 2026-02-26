function imageSlider() {
    return {
        currentIndex: 1, // Start at 1 because index 0 is the clone of the last slide
        slides: [],
        rawSlides: window.SLIDER_DATA || [],
        interval: null,
        autoplaySpeed: 3800,
        touchStartX: null,
        isTransitioning: false,
        hasTransition: true,

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
            }, 700); // Match CSS duration
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
            }, 700);
        },

        jumpToIndex(index) {
            this.hasTransition = false;
            this.currentIndex = index;
            // Re-enable transition after a small delay to allow DOM update
            setTimeout(() => {
                this.hasTransition = true;
            }, 50);
        },

        goTo(index) {
            if (this.isTransitioning) return;
            this.currentIndex = index + 1; // +1 because of the clone at 0
            this.startAutoplay();
        }
    }
}

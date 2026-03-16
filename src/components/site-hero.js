class SiteHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section class="banner parallax-bg relative w-full h-screen max-h-[700px] md:max-h-full lg:max-h-full
            bg-[url('public/images/cookie.webp')]
            lg:bg-[url('public/images/cookie.webp')]
            xl:bg-[url('public/images/cookie.webp')]
            md:bg-[url('public/images/cookie.webp')]
            sm:bg-[url('public/images/cookie.webp')]
            xs:bg-[url('public/images/cookie-mobile.webp')]
            bg-[95%_50%] bg-cover bg-no-repeat overflow-hidden">
        <div class="initial-snow snow-area" id="snow-container"></div>
        <div class="relative h-full transition-transform duration-500 ease-in-out" id="slider-container">
            <div class="absolute w-full h-full overflow-hidden">
                <div class="flex h-full items-center justify-center md:justify-start w-full px-4 md:px-20">
                    <div class="relative flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-2 py-6 px-4 sm:px-2 sm:p-2 max-w-6xl
                     lg:max-w-4xl md:max-w-6xl sm:max-w-6xl
                     lg:bg-[url('public/images/vectors/blob-bg.png')] md:bg-[url('public/images/vectors/blob-bg.png')] bg-no-repeat bg-contain bg-center
                     sm:scale-100 scale-95">
                        <img src="public/images/vectors/cupcake.svg"
                            class="animate-drop-bounce w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 mt-2 md:mt-0 shrink-0 drop-shadow-xl"
                            alt="Cupcake vector imagen" />
                        <div class="text-center sm:text-left bg-white/70 backdrop-blur-xs rounded-lg p-4
                                 lg:bg-transparent md:bg-transparent lg:backdrop-blur-none md:backdrop-blur-none lg:p-0 md:p-0"
                            data-aos="fade-up" data-aos-delay="200">
                            <h1
                                class="banner-slide-title text-gray-900 sm:text-shadow-xl lg:text-gray-800 md:text-gray-800 ubuntu-font-bold font-semibold text-shadow-2xs text-5xl sm:text-6xl md:text-6xl lg:text-7xl xs:text-8xl leading-tight">
                                ¿Se te antoja algo rico?
                            </h1>
                            <p
                                class="text-base text-gray-900 text-xl lg:text-gray-700 md:text-gray-700 lg:md:text-2xl md:text-2xl sm:text-xl md:text-xl mt-3 lato-regular mb-3">
                                Prueba ahora nuestros <strong class="text-gray-800 bg-yellow-200 px-1">productos 100%
                                    artesanales</strong>, con una variedad de opciones irresistibles y preparados con
                                ingredientes premium
                                que <strong class="text-gray-800">¡sentirás en cada bocado!</strong>
                            </p>
                            <a href="#catalog">
                                <button class="w-xs mt-5 lg:w-sm md:w-xs max-w-[250px] mt-5 overflow-hidden relative bg-pink-500 text-white font-bold py-2 px-5 sm:py-3 sm:px-8
                               rounded-full shadow-md shadow-2xl transition duration-500 ease-in-out
                               before:content-[''] before:absolute before:top-0 before:left-0
                               before:w-0 before:h-full before:bg-white/50 before:transition-all
                               before:duration-300 hover:scale-105 before:ease-in-out hover:before:w-full
                               hover:text-gray-900 hover:shadow-3xl">
                                    <svg class="w-4 h-4 inline-block ml-2 relative z-10" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                    <span class="relative z-10">Haz tu pedido aquí</span>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-hero', SiteHero);

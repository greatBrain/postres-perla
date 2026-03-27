class SiteHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="banner parallax-bg relative w-full  h-[55vh] md:h-[67vh] lg:h-[95vh] overflow-hidden
                 bg-[url('public/images/cookie-banner.webp')]
                 bg-cover bg-no-repeat"
             aria-label="Banner principal Postres Perla">

        <!-- Snow particles layer -->
        <div class="initial-snow snow-area absolute inset-0 z-10 pointer-events-none" id="snow-container"></div>

        <!-- Content layer:
             Mobile  → items-end + pb (texto en la zona baja, cookie arriba)
             md+     → items-center (texto centrado verticalmente, cookie a la derecha) -->
        <div class="relative h-full z-20 flex items-end md:items-center lg:items-center">
            <div class="w-full max-w-4xl px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32
                        pb-14 sm:pb-16 md:pb-0">

                <!-- Text block
                     Mobile: glassmorphism card para legibilidad sobre la imagen
                     md+: sin fondo (imagen no se superpone al texto) -->
                <div class="max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl
                            rounded-2xl p-5 sm:p-6 md:p-0
                            bg-white/65 backdrop-blur-sm
                            md:bg-transparent md:backdrop-blur-none
                            shadow-sm md:shadow-none"
                     data-aos="fade-up" data-aos-duration="600">
                    <h1 class="ubuntu-font-bold font-bold leading-tight text-gray-800
                               text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                        Hechos a mano, para disfrutar hoy mismo
                    </h1>
                    <p class="lato-regular mt-6 mb-6 text-gray-800  text-sm sm:text-base md:text-xl lg:text-2xl">
                        Prueba nuestros productos 100% artesanales, elaborados con ingredientes de calidad 
                        y una variedad pensada para cada antojo. <strong class="text-stone-900">¡Sabor que se nota en cada bocado!</strong>
                    </p>

                    <a href="#catalog"
                       class="inline-flex items-center gap-2
                              bg-pink-500 text-white font-bold
                              py-2.5 px-6 sm:py-3 sm:px-8
                              rounded-full shadow-lg
                              relative overflow-hidden
                              transition-all duration-300 ease-in-out
                              hover:scale-105 hover:shadow-2xl hover:text-gray-900
                              before:content-[''] before:absolute before:inset-0
                              before:bg-white/20 before:translate-x-[-100%]
                              hover:before:translate-x-0 before:transition-transform before:duration-300">
                        <svg class="w-4 h-4 relative z-10 shrink-0" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7"/>
                        </svg>
                        <span class="relative z-10 whitespace-nowrap">Haz tu pedido aquí</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-hero', SiteHero);

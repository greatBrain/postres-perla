class SiteHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="banner parallax-bg relative w-full  h-[70vh] md:h-[75vh] lg:h-[95vh] overflow-hidden
                 bg-[url('public/images/cookie-banner.webp')]
                 bg-cover bg-no-repeat"
             aria-label="Banner principal Postres Perla">

        <!-- Snow particles layer -->
        <div class="initial-snow snow-area absolute inset-0 z-10 pointer-events-none" id="snow-container"></div>

        <!-- Gradient Overlay Warm Pink -->
        <div class="absolute inset-0 bg-gradient-to-r from-pink-400/40 via-pink-300/20 to-transparent z-0 pointer-events-none mix-blend-multiply"></div>

        <!-- Content layer:
             Mobile  → items-end + pb (texto en la zona baja, cookie arriba)
             md+     → items-center (texto centrado verticalmente, cookie a la derecha) -->
        <div class="relative h-full z-20 flex items-end md:items-center lg:items-center">
            <div class="w-full max-w-4xl px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32
                        pb-14 sm:pb-16 md:pb-0">

                <!-- Text block con Glassmorphism en todas las resoluciones para máxima legibilidad -->
                <div class="relative max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl
                            rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12
                            bg-white/40 backdrop-blur-md border border-white/60
                            shadow-[0_8px_32px_rgba(236,72,153,0.15)]"
                     data-aos="fade-up" data-aos-duration="600">
                    
                    <!-- Decorative Cupcake Vector -->
                    <div class="absolute -top-6 -right-6 md:-top-16 md:-right-12 lg:-top-4 lg:-right-4 pointer-events-none drop-shadow-2xl animate-float">
                        <img src="public/images/vectors/cupcake.svg" alt="Decoración Cupcake" 
                             class="w-24 h-24 md:w-24 md:h-24 lg:w-26 lg:h-26 opacity-90 rotate-12 drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
                    </div>
                    <h1 class="ubuntu-font-bold font-extrabold leading-tight tracking-tight text-stone-900 drop-shadow-sm
                               text-4xl sm:text-5xl md:text-5xl lg:text-7xl pb-8">
                        Hechos a mano, para disfrutar hoy mismo
                    </h1>
                    <!--<p class="lato-regular mt-4 md:mt-6 mb-8 text-stone-800 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                        Prueba nuestros productos 100% artesanales, elaborados con ingredientes de calidad 
                        y una variedad pensada para cada antojo. <strong class="text-pink-700 font-bold drop-shadow-sm">¡Sabor que se nota en cada bocado!</strong>
                    </p>-->

                    <a href="#catalog"
                       class="inline-flex items-center gap-2
                              bg-pink-500 hover:bg-pink-600 text-white font-bold
                              py-2.5 px-6 sm:py-3 sm:px-8
                              rounded-full shadow-lg shadow-pink-500/40
                              relative overflow-hidden
                              transition-all duration-300 ease-in-out
                              hover:scale-105 hover:shadow-xl
                              before:content-[''] before:absolute before:inset-0
                              before:bg-white/20 before:translate-x-[-100%]
                              hover:before:translate-x-0 before:transition-transform before:duration-300">
                        <svg class="w-4 h-4 relative z-10 shrink-0" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7"/>
                        </svg>
                        <span class="relative z-10 whitespace-nowrap">Haz tu pedido aquí</span>
                    </a>

                    <a href="#calculadora-de-porciones"
                       class="inline-flex items-center gap-2
                              bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-bold
                              py-2.5 px-6 sm:py-3 sm:px-8
                              rounded-full shadow-lg shadow-pink-500/40
                              relative overflow-hidden
                              transition-all duration-300 ease-in-out
                              hover:scale-105 hover:shadow-xl
                              before:content-[''] before:absolute before:inset-0
                              before:bg-white/20 before:translate-x-[-100%]
                              hover:before:translate-x-0 before:transition-transform before:duration-300">
                        <svg class="w-4 h-4 relative z-10 shrink-0" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7"/>
                        </svg>
                        <span class="relative z-10 whitespace-nowrap">Calcula tus porciones</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-hero', SiteHero);

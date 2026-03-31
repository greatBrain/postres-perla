class SiteHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <section class="banner relative w-full h-[85vh] md:h-[85vh] lg:h-[95vh] overflow-hidden bg-[#fffbf4]" aria-label="Banner principal Postres Perla">
        <!-- Background layers for depth -->
        <div class="absolute inset-0 z-0 opacity-40">
            <div class="absolute top-[10%] left-[5%] w-32 h-32 bg-pink-200 rounded-full blur-3xl animate-float"></div>
            <div class="absolute bottom-[20%] right-[10%] w-48 h-48 bg-yellow-100 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
        </div>
        <!-- Floating Decorative Crumbs -->
        <div class="absolute inset-0 z-10 pointer-events-none hidden md:block">
             <div class="absolute top-1/4 right-[40%] w-3 h-3 bg-pink-400 rounded-full blur-[1px] opacity-60 animate-bounce" style="animation-duration: 3s;"></div>
             <div class="absolute bottom-1/3 right-[35%] w-2 h-2 bg-yellow-400 rounded-full blur-[1px] opacity-60 animate-bounce" style="animation-duration: 4s;"></div>
             <div class="absolute top-1/2 right-[45%] w-4 h-4 bg-pink-300 rounded-lg rotate-45 opacity-40 animate-pulse"></div>
        </div>
        <!-- Main Cookie Image -->
        <div class="absolute top-0 right-0 h-full w-full md:w-3/5 z-0 pointer-events-none overflow-hidden">
            <img src="public/images/cookie-banner.webp" alt="Cookie artesanal Postres Perla" 
                 class="w-full h-full object-contain md:object-cover object-right translate-x-20 md:translate-x-0 opacity-40 md:opacity-100 drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-1000">
        </div>
        <!-- Content layer -->
        <div class="relative h-full z-20 flex items-center">
            <div class="container mx-auto px-6 md:px-12 lg:px-24">
                <div class="max-w-2xl lg:max-w-3xl" data-aos="fade-right" data-aos-duration="1000">                    
                    <!-- Intro Eyebrow -->
                    <span class="inline-block py-1.5 px-4 rounded-full bg-white text-pink-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 border border-pink-100 shadow-sm">
                        ✨ Sabor en cada mordisco
                    </span>
                    
                    <!-- Main Text (H1) -->
                    <h1 class="font-bold leading-[1.1] tracking-tight text-[#2D1E1E]
                               text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
                        Dulzura que <span class="text-pink-500 italic relative">abraza<svg class="absolute -bottom-2 left-0 w-full h-2 md:h-3 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 2, 50 5 T 100 5" stroke="currentColor" stroke-width="3" fill="transparent"/></svg></span> el alma
                    </h1>

                    <!-- Paragraph -->
                    <p class="mt-4 mb-10 text-gray-600 text-base md:text-xl lg:text-2xl leading-relaxed max-w-xl font-light">
                        Descubre el arte de la <span class="font-bold text-gray-700 decoration-pink-100 italic">repostería artesanal</span>.
                        Horneamos con dedicación para convertir cada ocasión en una <span class="font-bold text-pink-600 underline decoration-pink-100">celebración única</span>.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        <a href="#catalog"
                           class="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto
                                  bg-pink-500 hover:bg-pink-600 text-white font-bold
                                  py-4 px-8 md:px-10 rounded-2xl shadow-2xl shadow-pink-500/30
                                  transition-all duration-500 ease-out hover:scale-105 active:scale-95">
                            <span class="relative z-10 text-base md:text-lg tracking-wider">Ver Catálogo</span>
                            <svg class="w-5 h-5 md:w-6 md:h-6 relative z-10 transform transition-transform group-hover:translate-x-1" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        </a>

                        <a href="#calculadora-de-porciones"
                           class="d-none inline-flex items-center justify-center gap-2 w-full sm:w-auto
                                  bg-yellow-100 hover:bg-yellow-200 text-stone-800 font-bold
                                  py-4 px-8 rounded-2xl border-2 border-yellow-200/50
                                  transition-all duration-300 hover:scale-105 group">
                            <img src="public/icons/cake-slice.svg" class="w-5 h-5 transition-transform group-hover:rotate-12" alt="Calcular">
                            <span class="text-base md:text-lg">Calcular porciones</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Wave -->
        <div class="absolute bottom-0 left-0 w-full z-10 pointer-events-none opacity-40">
            <svg viewBox="0 0 1440 120" fill="#f8f5f0" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
        </div>
    </section>
        `;
    }
}

customElements.define('site-hero', SiteHero);


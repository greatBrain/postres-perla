class SiteTestimonials extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section
        class="relative testimonials bg-[#fcfaf7] py-24 px-6 md:px-10"
        id="testimonials" aria-labelledby="testimonials-title">
        
        <!-- Decorative background elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-pink-50/50 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto flex flex-col justify-center items-center text-center space-y-10 pt-5 relative z-10">
            <div data-aos="fade-up" class="max-w-3xl">
                <span class="text-pink-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Experiencias Reales</span>
                <h2 id="testimonials-title" class="text-[#2D1E1E] text-4xl md:text-5xl lg:text-6xl ubuntu-font-bold title leading-tight">
                    Nuestros clientes <span class="text-pink-500 italic">opinan</span>
                </h2>
                <div class="w-24 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full opacity-60"></div>
                <p class="text-stone-800 mt-8 text-lg md:text-xl font-light leading-relaxed">
                    Testimonios auténticos que destacan el compromiso y la dulzura que ponemos en cada detalle.
                </p>
            </div>
            
            <div class="w-full relative mx-auto max-w-7xl overflow-hidden" role="region"
                aria-label="Contenedor de testimonios">
                <div class="swiper testimonialSwiper mx-auto py-8">
                    <div class="swiper-wrapper" id="testimonial-container">
                        <!-- Slide 1 -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-10 bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full text-left relative overflow-hidden"
                                role="group" aria-label="Testimonio de Ana Castillo">
                                <span class="absolute -top-8 -left-4 text-[12rem] text-pink-50/30 font-serif leading-none z-0">“</span>
                                <div class="relative z-10">
                                    <div class="stars-container mb-6 flex gap-1 text-yellow-400"></div>
                                    <p class="text-xl text-stone-700 italic mb-8 leading-relaxed font-medium">
                                        “Pedí un bizcocho para el cumpleaños de mi hijo y justo lo que esperaba recibir! Con muy buen sabor.”
                                    </p>
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">E</div>
                                        <div>
                                            <p class="text-[#2D1E1E] font-bold text-sm">Eliana</p>
                                            <p class="text-stone-400 text-[10px] uppercase tracking-widest">Cliente Verificado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Slide 2 -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-10 bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full text-left relative overflow-hidden"
                                role="group" aria-label="Testimonio de Carlos Mejía">
                                <span class="absolute -top-8 -left-4 text-[12rem] text-pink-50/30 font-serif leading-none z-0">“</span>
                                <div class="relative z-10">
                                    <div class="stars-container mb-6 flex gap-1 text-yellow-400"></div>
                                    <p class="text-xl text-stone-700 italic mb-8 leading-relaxed font-medium">
                                        “En Postres Perla encontré un lugar donde todavía se siente que las cosas se hacen a mano y con calma.”
                                    </p>
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xs">K</div>
                                        <div>
                                            <p class="text-[#2D1E1E] font-bold text-sm">Karina</p>
                                            <p class="text-stone-400 text-[10px] uppercase tracking-widest">Cliente Verificado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Slide 3 -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-10 bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full text-left relative overflow-hidden"
                                role="group" aria-label="Testimonio de Laura Sánchez">
                                <span class="absolute -top-8 -left-4 text-[12rem] text-pink-50/30 font-serif leading-none z-0">“</span>
                                <div class="relative z-10">
                                    <div class="stars-container mb-6 flex gap-1 text-yellow-400"></div>
                                    <p class="text-xl text-stone-700 italic mb-8 leading-relaxed font-medium">
                                        “Me gustó que no era empalagoso, se notaba la calidad de los ingredientes sin necesidad de exagerar.”
                                    </p>
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-bold text-xs">P</div>
                                        <div>
                                            <p class="text-[#2D1E1E] font-bold text-sm">Paola</p>
                                            <p class="text-stone-400 text-[10px] uppercase tracking-widest">Cliente Verificado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Pagination (Moved inside) -->
                    <div class="swiper-pagination testimonial-pagination !-bottom-2"></div>
                </div>
            </div>
        </div>
        <div class="text-center mt-10">
            <p class="text-gray-800 text-sm italic font-light max-w-2xl mx-auto">*Testimonios obtenidos en conversación directa con los clientes</p>            
        </div>
    </section>
        `;
    }
}

customElements.define('site-testimonials', SiteTestimonials);

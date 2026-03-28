class SiteTestimonials extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section
        class="relative testimonials bg-[#fffbf4] py-24 px-6 md:px-10"
        id="testimonials" aria-labelledby="testimonials-title">
        <div class="max-w-7xl mx-auto flex flex-col justify-center items-center text-center space-y-10 pt-5">
            <div data-aos="fade-up">
                <h2 id="testimonials-title" class="text-stone-800 text-5xl md:text-5xl ubuntu-font-bold">
                    Nuestros clientes opinan
                </h2>
                <p class="text-stone-800 mt-4 max-w-xl mx-auto text-lg sm:text-xl md:text-xl ubuntu-font-regular">
                    Testimonios auténticos que destacan el compromiso, la calidad y el impacto de nuestro trabajo en
                    nuestros clientes.
                </p>
            </div>
            <div class="w-full relative mx-auto max-w-7xl overflow-hidden" role="region"
                aria-label="Contenedor de testimonios">
                <div class="swiper testimonialSwiper mx-auto">
                    <div class="swiper-wrapper" id="testimonial-container">
                        <!-- Slide 1 -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(236,72,153,0.06)] ring-1 ring-pink-100 hover:shadow-[0_12px_40px_rgb(236,72,153,0.12)] hover:-translate-y-2 transition-all duration-300 h-full text-left relative overflow-hidden"
                                role="group" aria-label="Testimonio de Ana Castillo">
                                <span class="absolute -top-6 -left-2 text-9xl text-pink-50 font-sans leading-none z-0 rotate-12">"</span>
                                <div class="relative z-10">
                                    <div class="stars-container mb-4 flex gap-1 text-yellow-400"></div>
                                    <p class="text-xl text-stone-700 italic mb-6 leading-relaxed font-medium">
                                        “Pedí un bizcocho para el cumpleaños de mi hijo y justo lo que esperaba recibir! Con muy buen sabor.”
                                    </p>
                                    <p class="text-pink-500 font-bold uppercase tracking-widest text-sm">- Eliana</p>
                                </div>
                            </div>
                        </div>
                        <!-- Slide 2 -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(236,72,153,0.06)] ring-1 ring-pink-100 hover:shadow-[0_12px_40px_rgb(236,72,153,0.12)] hover:-translate-y-2 transition-all duration-300 h-full text-left relative overflow-hidden"
                                role="group" aria-label="Testimonio de Carlos Mejía">
                                <span class="absolute -top-6 -left-2 text-9xl text-pink-50 font-sans leading-none z-0 rotate-12">"</span>
                                <div class="relative z-10">
                                    <div class="stars-container mb-4 flex gap-1 text-yellow-400"></div>
                                    <p class="text-xl text-stone-700 italic mb-6 leading-relaxed font-medium">
                                        “En Postres Perla encontré un lugar donde todavía se siente que las cosas se hacen a mano y con calma.”
                                    </p>
                                    <p class="text-pink-500 font-bold uppercase tracking-widest text-sm">- Karina</p>
                                </div>
                            </div>
                        </div>
                        <!-- Slide 3 -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(236,72,153,0.06)] ring-1 ring-pink-100 hover:shadow-[0_12px_40px_rgb(236,72,153,0.12)] hover:-translate-y-2 transition-all duration-300 h-full text-left relative overflow-hidden"
                                role="group" aria-label="Testimonio de Laura Sánchez">
                                <span class="absolute -top-6 -left-2 text-9xl text-pink-50 font-sans leading-none z-0 rotate-12">"</span>
                                <div class="relative z-10">
                                    <div class="stars-container mb-4 flex gap-1 text-yellow-400"></div>
                                    <p class="text-xl text-stone-700 italic mb-6 leading-relaxed font-medium">
                                        “Me gustó que no era empalagoso, se notaba la calidad de los ingredientes sin necesidad de exagerar.”
                                    </p>
                                    <p class="text-pink-500 font-bold uppercase tracking-widest text-sm">- Paola</p>
                                </div>
                            </div>
                        </div>
                        <!-- Duplicate Slides for smoother infinite loop -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(236,72,153,0.06)] ring-1 ring-pink-100 hover:shadow-[0_12px_40px_rgb(236,72,153,0.12)] hover:-translate-y-2 transition-all duration-300 h-full text-left relative overflow-hidden">
                                <span class="absolute -top-6 -left-2 text-9xl text-pink-50 font-sans leading-none z-0 rotate-12">"</span>
                                <div class="relative z-10">
                                    <div class="stars-container mb-4 flex gap-1 text-yellow-400"></div>
                                    <p class="text-xl text-stone-700 italic mb-6 leading-relaxed font-medium">
                                        “¡Increíble atención y sabor único! Por alla vuelvo.”</p>
                                    <p class="text-pink-500 font-bold uppercase tracking-widest text-sm">- Elizabeth</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(236,72,153,0.06)] ring-1 ring-pink-100 hover:shadow-[0_12px_40px_rgb(236,72,153,0.12)] hover:-translate-y-2 transition-all duration-300 h-full text-left relative overflow-hidden">
                                <span class="absolute -top-6 -left-2 text-9xl text-pink-50 font-sans leading-none z-0 rotate-12">"</span>
                                <div class="relative z-10">
                                    <div class="stars-container mb-4 flex gap-1 text-yellow-400"></div>
                                    <p class="text-xl text-stone-700 italic mb-6 leading-relaxed font-medium">
                                        “Uy que ricura esos pudinessss, los mejores sin duda alguna.”</p>
                                    <p class="text-pink-500 font-bold uppercase tracking-widest text-sm">- Marcos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Pagination (Moved inside) -->
                    <div class="swiper-pagination testimonial-pagination !-bottom-2"></div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-testimonials', SiteTestimonials);

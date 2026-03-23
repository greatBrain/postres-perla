class SiteTestimonials extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section
        class="relative testimonials bg-top bg-no-repeat bg-[length:100%] bg-[url('public/images/soft-green-wave.svg')] py-20 px-6 md:px-10"
        id="testimonials" aria-labelledby="testimonials-title">
        <div class="max-w-7xl mx-auto flex flex-col justify-center items-center text-center space-y-10 pt-5">
            <div data-aos="fade-up">
                <h2 id="testimonials-title" class="text-gray-800 text-5xl md:text-5xl ubuntu-font-bold">
                    ¿Qué opinan nuestros clientes?
                </h2>
                <p class="text-gray-800 mt-4 max-w-xl mx-auto text-lg sm:text-xl md:text-xl ubuntu-font-regular">
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
                            <div class="p-6 bg-yellow-100/90 backdrop-blur-sm rounded-xl shadow-md border border-pink-200 hover:shadow-lg transition-all h-full text-left"
                                role="group" aria-label="Testimonio de Ana Castillo">
                                <div class="stars-container mb-3 flex gap-1"></div>
                                <p class="text-xl text-gray-800 italic mb-4">
                                    “Pedí un bizcocho para el cumpleaños de mi hijo y justo lo que esperaba recibir! Con
                                    muy buen sabor.”
                                </p>
                                <p class="text-pink-600 font-bold">- Eliana</p>
                            </div>
                        </div>
                        <!-- Slide 2 -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-6 bg-purple-100/80 backdrop-blur-sm rounded-xl shadow-md border border-purple-200 hover:shadow-lg transition-all h-full text-left"
                                role="group" aria-label="Testimonio de Carlos Mejía">
                                <div class="stars-container mb-3 flex gap-1"></div>
                                <p class="text-xl text-gray-800 italic mb-4">
                                    “En Postres Perla encontré un lugar donde todavía se siente que las cosas se hacen a
                                    mano y con calma.”
                                </p>
                                <p class="text-pink-600 font-bold">- Karina</p>
                            </div>
                        </div>
                        <!-- Slide 3 -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div class="p-6 bg-green-100/80 backdrop-blur-sm rounded-xl shadow-md border border-green-200 hover:shadow-lg transition-all h-full text-left"
                                role="group" aria-label="Testimonio de Laura Sánchez">
                                <div class="stars-container mb-3 flex gap-1"></div>
                                <p class="text-xl text-gray-800 italic mb-4">
                                    “Me gustó que no era empalagoso, se notaba la calidad de los ingredientes sin
                                    necesidad de exagerar.”
                                </p>
                                <p class="text-pink-600 font-bold">- Paola</p>
                            </div>
                        </div>
                        <!-- Duplicate Slides for smoother infinite loop -->
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div
                                class="p-6 bg-yellow-100/90 backdrop-blur-sm rounded-xl shadow-md border border-pink-200 hover:shadow-lg transition-all h-full text-left">
                                <div class="stars-container mb-3 flex gap-1"></div>
                                <p class="text-xl text-gray-800 italic mb-4">
                                    “¡Increíble atención y sabor único! Por alla vuelvo.”</p>
                                <p class="text-pink-600 font-bold">- Elizabeth</p>
                            </div>
                        </div>
                        <div class="swiper-slide h-auto" data-rating="5">
                            <div
                                class="p-6 bg-purple-100/80 backdrop-blur-sm rounded-xl shadow-md border border-purple-200 hover:shadow-lg transition-all h-full text-left">
                                <div class="stars-container mb-3 flex gap-1"></div>
                                <p class="text-xl text-gray-800 italic mb-4">
                                    “Uy que ricura esos pudinessss, los mejores sin duda alguna.”</p>
                                <p class="text-pink-600 font-bold">- Marcos</p>
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

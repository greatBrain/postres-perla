class SiteContact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section id="contact"
        class="relative py-18 md:py-30 bg-gradient-to-br from-yellow-50 via-white to-pink-50 overflow-hidden">
        
        <!-- Elementos decorativos (Blobs) para resaltar el glassmorfismo -->
        <div class="absolute top-0 left-10 md:left-1/4 w-72 h-72 md:w-96 md:h-96 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"></div>
        <div class="absolute bottom-0 right-10 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-yellow-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="text-left mb-12" data-aos="fade-up">
                <h2 class="text-center md:text-left text-4xl md:text-5xl text-gray-800 drop-shadow-md ubuntu-font-bold">
                    Contáctanos</h2>
                <p class="mt-4 text-gray-800 text-lg sm:text-xl md:text-2xl ubuntu-font-regular">
                    ¿Tienes un antojo, una consulta o una idea? ¡Estamos listos para escucharte!
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
                <a href="https://www.instagram.com/postres.perla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank" class="flex items-center w-full p-5 md:p-6 bg-white/70 backdrop-blur-md border border-pink-200/80 rounded-2xl shadow-[0_8px_30px_rgba(219,39,119,0.06)] space-x-4 hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(219,39,119,0.15)] hover:border-pink-300 transition-all duration-300 group cursor-pointer"
                    role="listitem" aria-label="Ir al perfil de Instagram de Postres Perla" data-aos="fade-right">
                    <div class="p-3 bg-white/70 rounded-full shadow-sm border border-white/80 group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <img class="w-6 h-6 md:w-7 md:h-7" src="public/icons/instagram.png" alt="Icono de Instagram" loading="lazy">
                    </div>
                    <div class="overflow-hidden w-full">
                        <h3 class="text-lg xl:text-xl font-semibold text-pink-600 drop-shadow-sm group-hover:text-pink-500 transition-colors truncate">Postres.perla</h3>
                    </div>
                </a>

                <a href="https://pin.it/2vLaI3PUB" target="_blank" 
                    class="flex items-center w-full p-5 md:p-6 bg-white/60 backdrop-blur-md border border-pink-200/80 rounded-2xl shadow-[0_8px_30px_rgba(219,39,119,0.06)] space-x-4 hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(219,39,119,0.15)] hover:border-pink-300 transition-all duration-300 group cursor-pointer"
                    role="listitem" aria-label="Ver ideas de Postres Perla en Pinterest" data-aos="fade-up" data-aos-delay="100">
                    <div class="p-3 bg-white/70 rounded-full shadow-sm border border-white/80 group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <img class="w-6 h-6 md:w-7 md:h-7" src="public/icons/pinterest.png" alt="Icono de Pinterest" loading="lazy">
                    </div>
                    <div class="overflow-hidden w-full">
                        <h3 class="text-lg xl:text-xl font-semibold text-pink-600 drop-shadow-sm group-hover:text-pink-500 transition-colors truncate">Postres Perla</h3>
                    </div>
                </a>

                <a href="https://www.facebook.com/perla.pascual.961" target="_blank" 
                    class="flex items-center w-full p-5 md:p-6 bg-white/60 backdrop-blur-md border border-pink-200/80 rounded-2xl shadow-[0_8px_30px_rgba(219,39,119,0.06)] space-x-4 hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(219,39,119,0.15)] hover:border-pink-300 transition-all duration-300 group cursor-pointer"
                    role="listitem" aria-label="Visita nuestro Facebook: Postres.perla" data-aos="fade-up" data-aos-delay="200">
                    <div class="p-3 bg-white/70 rounded-full shadow-sm border border-white/80 group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <img class="w-6 h-6 md:w-7 md:h-7" src="public/icons/facebook.png" alt="Icono de Facebook" loading="lazy">
                    </div>
                    <div class="overflow-hidden w-full">
                        <h3 class="text-lg xl:text-xl font-semibold text-pink-600 drop-shadow-sm group-hover:text-pink-500 transition-colors truncate">Postres.perla</h3>
                    </div>
                </a>

                <a href="mailto:pascualperla226@gmail.com" 
                    class="flex items-center w-full p-5 md:p-6 bg-white/60 backdrop-blur-md border border-pink-200/80 rounded-2xl shadow-[0_8px_30px_rgba(219,39,119,0.06)] space-x-4 hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(219,39,119,0.15)] hover:border-pink-300 transition-all duration-300 group cursor-pointer"
                    role="listitem" aria-label="Enviar correo a pascualperla226@gmail.com" data-aos="fade-left" data-aos-delay="300" title="pascualperla226@gmail.com">
                    <div class="p-3 bg-white/70 rounded-full shadow-sm border border-white/80 group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <img class="w-6 h-6 md:w-7 md:h-7" src="public/icons/email.png" alt="Icono de correo electrónico" loading="lazy">
                    </div>
                    <div class="overflow-hidden w-full">
                        <h3 class="text-base lg:text-sm xl:text-lg font-semibold text-pink-600 drop-shadow-sm group-hover:text-pink-500 transition-colors truncate">pascualperla226@gmail.com</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-contact', SiteContact);

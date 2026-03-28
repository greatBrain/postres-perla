class SiteContact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section id="contact"
        class="relative py-20 md:py-32 bg-stone-900 overflow-hidden">
        
        <!-- Elementos decorativos (Blobs) en modo oscuro -->
        <div class="absolute top-0 left-10 md:left-1/4 w-72 h-72 md:w-96 md:h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 z-0"></div>
        <div class="absolute bottom-0 right-10 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-yellow-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-60 z-0"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center md:text-left mb-12" data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl text-white ubuntu-font-bold tracking-tight">
                    Contáctanos</h2>
                <p class="mt-4 text-stone-300 text-lg sm:text-xl md:text-2xl ubuntu-font-regular font-light">
                    ¿Tienes un antojo, una consulta o una idea? ¡Estamos listos para escucharte!
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
                <a href="https://www.instagram.com/postres.perla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank" class="flex items-center w-full p-5 md:p-6 bg-stone-800/60 backdrop-blur-md border border-stone-700/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] space-x-4 hover:bg-stone-800 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:border-pink-500/50 transition-all duration-300 group cursor-pointer"
                    role="listitem" aria-label="Ir al perfil de Instagram de Postres Perla" data-aos="fade-right">
                    <div class="p-3 bg-stone-700/50 rounded-full shadow-inner border border-stone-600/50 group-hover:bg-pink-500/10 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <img class="w-6 h-6 md:w-7 md:h-7" src="public/icons/instagram.png" alt="Icono de Instagram" loading="lazy">
                    </div>
                    <div class="overflow-hidden w-full">
                        <h3 class="text-lg xl:text-xl font-medium text-stone-200 group-hover:text-pink-400 transition-colors truncate">Postres.perla</h3>
                    </div>
                </a>

                <a href="https://pin.it/2vLaI3PUB" target="_blank" 
                    class="flex items-center w-full p-5 md:p-6 bg-stone-800/60 backdrop-blur-md border border-stone-700/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] space-x-4 hover:bg-stone-800 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:border-pink-500/50 transition-all duration-300 group cursor-pointer"
                    role="listitem" aria-label="Ver ideas de Postres Perla en Pinterest" data-aos="fade-up" data-aos-delay="100">
                    <div class="p-3 bg-stone-700/50 rounded-full shadow-inner border border-stone-600/50 group-hover:bg-pink-500/10 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <img class="w-6 h-6 md:w-7 md:h-7" src="public/icons/pinterest.png" alt="Icono de Pinterest" loading="lazy">
                    </div>
                    <div class="overflow-hidden w-full">
                        <h3 class="text-lg xl:text-xl font-medium text-stone-200 group-hover:text-pink-400 transition-colors truncate">Postres Perla</h3>
                    </div>
                </a>

                <a href="https://www.facebook.com/perla.pascual.961" target="_blank" 
                    class="flex items-center w-full p-5 md:p-6 bg-stone-800/60 backdrop-blur-md border border-stone-700/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] space-x-4 hover:bg-stone-800 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:border-pink-500/50 transition-all duration-300 group cursor-pointer"
                    role="listitem" aria-label="Visita nuestro Facebook: Postres.perla" data-aos="fade-up" data-aos-delay="200">
                    <div class="p-3 bg-stone-700/50 rounded-full shadow-inner border border-stone-600/50 group-hover:bg-pink-500/10 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <img class="w-6 h-6 md:w-7 md:h-7" src="public/icons/facebook.png" alt="Icono de Facebook" loading="lazy">
                    </div>
                    <div class="overflow-hidden w-full">
                        <h3 class="text-lg xl:text-xl font-medium text-stone-200 group-hover:text-pink-400 transition-colors truncate">Postres.perla</h3>
                    </div>
                </a>

                <a href="mailto:pascualperla226@gmail.com" 
                    class="flex items-center w-full p-5 md:p-6 bg-stone-800/60 backdrop-blur-md border border-stone-700/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] space-x-4 hover:bg-stone-800 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:border-pink-500/50 transition-all duration-300 group cursor-pointer"
                    role="listitem" aria-label="Enviar correo a pascualperla226@gmail.com" data-aos="fade-left" data-aos-delay="300" title="pascualperla226@gmail.com">
                    <div class="p-3 bg-stone-700/50 rounded-full shadow-inner border border-stone-600/50 group-hover:bg-pink-500/10 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <img class="w-6 h-6 md:w-7 md:h-7" src="public/icons/email.png" alt="Icono de correo electrónico" loading="lazy">
                    </div>
                    <div class="overflow-hidden w-full">
                        <h3 class="text-base lg:text-sm xl:text-lg font-medium text-stone-200 group-hover:text-pink-400 transition-colors truncate">pascualperla226@gmail.com</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-contact', SiteContact);

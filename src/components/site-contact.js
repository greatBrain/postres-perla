class SiteContact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section id="contact"
        class="relative py-24 md:py-32 bg-[#2D1E1E] overflow-hidden">
        
        <!-- Elementos decorativos (Blobs) en modo oscuro -->
        <div class="absolute top-0 left-10 md:left-1/4 w-72 h-72 md:w-96 md:h-96 bg-pink-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-40 z-0"></div>
        <div class="absolute bottom-0 right-10 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-yellow-500/5 rounded-full mix-blend-screen filter blur-3xl opacity-40 z-0"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-pink-400 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Hablemos</span>
                <h2 class="text-4xl md:text-5xl lg:text-7xl text-white ubuntu-font-bold tracking-tight title leading-tight">
                    ¿Listo para darte <span class="text-pink-400 italic"> un toque de dulzura</span>?
                </h2>
                <p class="mt-8 text-stone-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
                    ¿Tienes un antojo, una consulta o una idea? Aquí estamos para escucharte y hacerlo realidad.
                </p>
                <div class="w-24 h-1 bg-yellow-400/30 mx-auto mt-10 rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
                <!-- Instagram -->
                <a href="https://www.instagram.com/postres.perla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank" class="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
                    role="listitem" aria-label="Instagram">
                    <div class="p-4 bg-white/5 rounded-2xl mb-6 group-hover:bg-pink-500 group-hover:scale-110 transition-all duration-500 shrink-0 border border-white/5">
                        <img class="w-8 h-8 brightness-0 invert" src="public/icons/instagram.png" alt="Instagram">
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Instagram</h3>
                    <p class="text-stone-400 text-sm">@postres.perla</p>
                </a>
                <!-- Pinterest -->
                <a href="https://pin.it/2vLaI3PUB" target="_blank" 
                    class="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
                    role="listitem" aria-label="Pinterest">
                    <div class="p-4 bg-white/5 rounded-2xl mb-6 group-hover:bg-pink-500 group-hover:scale-110 transition-all duration-500 shrink-0 border border-white/5">
                        <img class="w-8 h-8 brightness-0 invert" src="public/icons/pinterest.png" alt="Pinterest">
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Pinterest</h3>
                    <p class="text-stone-400 text-sm">Postres Perla</p>
                </a>

                <!-- Facebook -->
                <a href="https://www.facebook.com/perla.pascual.961" target="_blank" 
                    class="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
                    role="listitem" aria-label="Facebook">
                    <div class="p-4 bg-white/5 rounded-2xl mb-6 group-hover:bg-pink-500 group-hover:scale-110 transition-all duration-500 shrink-0 border border-white/5">
                        <img class="w-8 h-8 brightness-0 invert" src="public/icons/facebook.png" alt="Facebook">
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Facebook</h3>
                    <p class="text-stone-400 text-sm">Perla Pascual</p>
                </a>

                <!-- Email -->
                <a href="mailto:pascualperla226@gmail.com" 
                    class="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
                    role="listitem" aria-label="Email">
                    <div class="p-4 bg-white/5 rounded-2xl mb-6 group-hover:bg-pink-500 group-hover:scale-110 transition-all duration-500 shrink-0 border border-white/5">
                        <img class="w-8 h-8 brightness-0 invert" src="public/icons/email.png" alt="Email">
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">E-mail</h3>
                    <p class="text-stone-400 text-xs truncate w-full">pascualperla226@gmail.com</p>
                </a>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-contact', SiteContact);

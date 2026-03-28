class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const WHATSAPPURL = window.sendWhatsappMessage ? window.sendWhatsappMessage({ type: 'general' }) : 'https://wa.me/8296469680';
        this.innerHTML = `
    <footer
        class="bg-stone-900 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
        
        <!-- Subtle background glow to tie in with Contact section -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-pink-600/10 blur-3xl rounded-full pointer-events-none"></div>

        <div class="mx-auto max-w-screen-xl px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
                <!-- Columna 1: Marca y Mensaje Emocional -->
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div class="brand-logo flex items-center mb-4">
                        <img src="./public/icons/P-perla-logo.png" alt="Logo de la pastelería Postres Perla"
                            class="h-16 w-16 drop-shadow-xl rounded-full border-2 border-stone-800">
                        <span class="text-pink-500 pl-2 text-3xl font-bold tracking-tight">
                            Postres Perla
                        </span>
                    </div>
                    <p class="text-stone-300 text-lg leading-relaxed mb-4 italic font-light">
                        "Cada entrega que hacemos sale con dedicación y mucho amor. Gracias por permitirnos ser parte
                        de tus momentos!"
                    </p>
                </div>

                <!-- Columna 2: Contacto Accionable -->
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h3 class="text-white drop-shadow-sm text-xl font-bold mb-6">
                        ¿Quieres cotizar tu evento o hacer un pedido?
                    </h3>
                    <div class="space-y-4">
                        <a href="${WHATSAPPURL}" target="_blank"
                            class="group flex items-center gap-3 text-stone-300 hover:text-green-400 transition-colors">
                            <div class="p-2 bg-stone-800 border border-stone-700 rounded-full shadow-sm group-hover:border-green-500/50 transition-all">
                                <img src="./public/icons/whatsapp.png" alt="WhatsApp" class="w-5 h-5 opacity-90 group-hover:opacity-100">
                            </div>
                            <span class="font-semibold">WhatsApp: 829-646-9680</span>
                        </a>
                        <a href="mailto:pascualperla226@gmail.com"
                            class="group flex items-center gap-3 text-stone-300 hover:text-pink-400 transition-colors">
                            <div class="p-2 bg-stone-800 border border-stone-700 rounded-full shadow-sm group-hover:border-pink-500/50 transition-all">
                                <img src="./public/icons/email.png" alt="Email" class="w-5 h-5 opacity-90 group-hover:opacity-100">
                            </div>
                            <span class="font-semibold break-all">pascualperla226@gmail.com</span>
                        </a>
                    </div>
                </div>

                <!-- Columna 3: Navegación Secundaria -->
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h3 class="text-white drop-shadow-sm text-xl font-bold mb-6">Explora también</h3>
                    <ul class="space-y-3">
                        <li><a href="#catalog"
                                class="text-stone-400 hover:text-pink-400 transition-colors font-medium">Catálogo de
                                Productos</a></li>
                        <li><a href="#catalog"
                                class="text-stone-400 hover:text-pink-400 transition-colors font-medium">Eventos y
                                Celebraciones</a></li>
                        <li><a href="#about-me"
                                class="text-stone-400 hover:text-pink-400 transition-colors font-medium">Conócenos</a>
                        </li>
                        <li><a href="#testimonials"
                                class="text-stone-400 hover:text-pink-400 transition-colors font-medium">Testimonios</a>
                        </li>
                        <li><a href="#contact"
                                class="text-stone-400 hover:text-pink-400 transition-colors font-medium">Contáctanos</a>
                        </li>
                    </ul>
                </div>

                <!-- Columna 4: Comunidad y Redes -->
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h3 class="text-white drop-shadow-sm text-xl font-bold mb-4">
                        Síguenos para más novedades
                    </h3>
                    <div class="flex items-center gap-4">
                        <a href="https://www.instagram.com/postres.perla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            class="p-3 bg-stone-800 border border-stone-700 rounded-full hover:border-pink-500/50 hover:bg-stone-700 hover:scale-110 transition-all duration-300">
                            <img src="./public/icons/instagram.png" alt="Instagram logo" class="w-6 h-6 sm:w-8 sm:h-8 opacity-90">
                        </a>
                        <a href="https://www.facebook.com/perla.pascual.961" target="_blank"
                            class="p-3 bg-stone-800 border border-stone-700 rounded-full hover:border-pink-500/50 hover:bg-stone-700 hover:scale-110 transition-all duration-300">
                            <img src="./public/icons/facebook.png" alt="Facebook logo" class="w-6 h-6 sm:w-8 sm:h-8 opacity-90">
                        </a>
                        <a href="https://pin.it/2vLaI3PUB" target="_blank"
                            class="p-3 bg-stone-800 border border-stone-700 rounded-full hover:border-pink-500/50 hover:bg-stone-700 hover:scale-110 transition-all duration-300">
                            <img src="./public/icons/pinterest.png" alt="Pinterest logo" class="w-6 h-6 sm:w-8 sm:h-8 opacity-90">
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Footer: Legal y Micro-frase -->
            <div class="mt-16 border-t border-stone-800 pt-8 text-center flex flex-col items-center">
                <p class="text-stone-500 text-sm font-medium mb-2">
                    &copy; 2025 Postres Perla. Todos los derechos reservados.
                </p>
                <p class="text-pink-500/80 text-md font-bold italic tracking-wider">
                    "Un toque de dulzura."
                </p>
                <p class="text-yellow-400/80 text-md font-bold italic tracking-wider">
                    <a href="mailto:erickFania@gmail.com">Contactar al desarrollador de este sitio web: erickfania@gmail.com</a>
                </p>
            </div>
        </div>
    </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);

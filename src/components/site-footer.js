class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <footer
        class="bg-[#FFD9C4] bg-[url('public/images/desserts-patterns.png')] bg-cover bg-center bg-no-repeat pt-16 pb-8 bg-fixed">
        <div class="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
                <!-- Columna 1: Marca y Mensaje Emocional -->
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div class="brand-logo flex items-center mb-4">
                        <img src="./public/icons/P-perla-logo.png" alt="Logo de la pastelería Postres Perla"
                            class="h-16 w-16 drop-shadow-xl rounded-full border-2 border-white">
                        <span class="text-[#C84C7E] pl-2 text-3xl font-bold">
                            Postres Perla
                        </span>
                    </div>
                    <p class="text-gray-800 text-lg leading-relaxed mb-4 italic">
                        "Cada entrega que hacemos sale con dedicación y mucho amor. Gracias por permitirnos ser parte
                        de tus momentos!"
                    </p>
                </div>

                <!-- Columna 2: Contacto Accionable -->
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h3 class="text-[#C84C7E] text-xl font-bold mb-6">
                        ¿Quieres cotizar tu evento o hacer un pedido?
                    </h3>
                    <div class="space-y-4">
                        <a href="https://wa.me/8296469680" target="_blank"
                            class="group flex items-center gap-3 text-gray-800 hover:text-green-600 transition-colors">
                            <div class="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
                                <img src="./public/icons/whatsapp.png" alt="WhatsApp" class="w-5 h-5">
                            </div>
                            <span class="font-semibold">WhatsApp: 829-646-9680</span>
                        </a>
                        <a href="mailto:pascualperla226@gmail.com"
                            class="group flex items-center gap-3 text-gray-800 hover:text-pink-600 transition-colors">
                            <div class="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
                                <img src="./public/icons/email.png" alt="Email" class="w-5 h-5">
                            </div>
                            <span class="font-semibold break-all">pascualperla226@gmail.com</span>
                        </a>
                    </div>
                </div>

                <!-- Columna 3: Navegación Secundaria -->
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h3 class="text-[#C84C7E] text-xl font-bold mb-6">Explora también</h3>
                    <ul class="space-y-3">
                        <li><a href="#catalog"
                                class="text-gray-800 hover:text-pink-600 transition-colors font-medium">Catálogo de
                                Productos</a></li>
                        <li><a href="#catalog"
                                class="text-gray-800 hover:text-pink-600 transition-colors font-medium">Eventos y
                                Celebraciones</a></li>
                        <li><a href="#about-me"
                                class="text-gray-800 hover:text-pink-600 transition-colors font-medium">Conócenos</a>
                        </li>
                        <li><a href="#testimonials"
                                class="text-gray-800 hover:text-pink-600 transition-colors font-medium">Testimonios</a>
                        </li>
                        <li><a href="#contact"
                                class="text-gray-800 hover:text-pink-600 transition-colors font-medium">Contáctanos</a>
                        </li>
                    </ul>
                </div>

                <!-- Columna 4: Comunidad y Redes -->
                <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h3 class="text-[#C84C7E] text-xl font-bold mb-4">
                        Síguenos para más novedades y ofertas
                    </h3>
                    <div class="flex items-center gap-4">
                        <a href="https://www.instagram.com/postres.perla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            class="p-3 bg-white rounded-full shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-200">
                            <img src="./public/icons/instagram.png" alt="Instagram logo" class="w-8 h-8">
                        </a>
                        <a href="https://www.facebook.com/perla.pascual.961" target="_blank"
                            class="p-3 bg-white rounded-full shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-200">
                            <img src="./public/icons/facebook.png" alt="Facebook logo" class="w-8 h-8">
                        </a>
                        <a href="https://pin.it/2vLaI3PUB" target="_blank"
                            class="p-3 bg-white rounded-full shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-200">
                            <img src="./public/icons/pinterest.png" alt="Pinterest logo" class="w-8 h-8">
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Footer: Legal y Micro-frase -->
            <div class="mt-16 border-t border-black/10 pt-8 text-center">
                <p class="text-gray-800 text-sm font-medium mb-2">
                    &copy; 2025 Postres Perla. Todos los derechos reservados.
                </p>
                <p class="text-[#C84C7E] text-md font-bold italic tracking-wide">
                    "Un toque de dulzura."
                </p>
            </div>
        </div>
    </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);

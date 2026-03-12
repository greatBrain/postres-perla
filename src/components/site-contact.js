class SiteContact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section id="contact"
        class="parallax-bg py-18 md:py-30 bg-yellow-200 bg-[url('public/images/many-sweets.png')] bg-contain">
        <div class="container mx-auto px-6">
            <div class="text-left mb-12" data-aos="fade-up">
                <h2 class="text-center md:text-left text-3xl md:text-4xl text-gray-700 drop-shadow-md ubuntu-font-bold">
                    Contáctanos</h2>
                <p class="mt-4 text-gray-700 text-lg sm:text-xl md:text-2xl ubuntu-font-regular">
                    ¿Tienes un antojo, una consulta o una idea? ¡Estamos listos para escucharte!
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" role="list">
                <div class="flex items-center p-6 bg-white rounded-2xl shadow-md space-x-3 hover:shadow-xl transition duration-400"
                    role="listitem" aria-label="Instagram" data-aos="fade-right">
                    <div class="p-3 bg-yellow-100 rounded-full border-2 border-pink-400">
                        <img class="w-10 h-10" src="public/icons/instagram.png" alt="Icono de Instagram" loading="lazy">
                    </div>
                    <div>
                        <a href="https://www.instagram.com/postres.perla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank" class="hover:underline"
                            aria-label="Ir al perfil de Instagram de Postres Perla">
                            <h3 class="text-xl font-semibold text-pink-600">Postres.perla</h3>
                        </a>
                    </div>
                </div>
                <div class="flex items-center p-6 bg-white rounded-2xl shadow-md space-x-3 hover:shadow-xl transition duration-400"
                    role="listitem" aria-label="Pinterest" data-aos="fade-left">
                    <div class="p-3 bg-yellow-100 rounded-full border-2 border-pink-400">
                        <img class="w-10 h-10" src="public/icons/pinterest.png" alt="Icono de Pinterest" loading="lazy">
                    </div>
                    <div>
                        <a href="https://pin.it/2vLaI3PUB" target="_blank" class="hover:underline"
                            aria-label="Ver ideas de Postres Perla en Pinterest">
                            <h3 class="text-xl font-semibold text-pink-600">Postres Perla</h3>
                        </a>
                    </div>
                </div>
                <div class="flex items-center p-6 bg-white rounded-2xl shadow-md space-x-3 hover:shadow-xl transition duration-400"
                    role="listitem" aria-label="Facebook" data-aos="fade-right" data-aos-delay="100">
                    <div class="p-3 bg-yellow-100 rounded-full border-2 border-pink-400">
                        <img class="w-10 h-10" src="public/icons/facebook.png" alt="Icono de Facebook" loading="lazy">
                    </div>
                    <div>
                        <a href="https://www.facebook.com/perla.pascual.961" target="_blank" class="hover:underline"
                            aria-label="Visita nuestro Facebook: Postres.perla">
                            <h3 class="text-xl font-semibold text-pink-600">Postres.perla</h3>
                        </a>
                    </div>
                </div>
                <div class="flex items-center p-6 bg-white rounded-2xl shadow-md space-x-3 hover:shadow-xl transition duration-400"
                    role="listitem" aria-label="Correo electrónico" data-aos="fade-left" data-aos-delay="100">
                    <div class="p-3 bg-yellow-100 rounded-full border-2 border-pink-400 flex-shrink-0">
                        <img class="w-10 h-10" src="public/icons/email.png" alt="Icono de correo electrónico"
                            loading="lazy">
                    </div>
                    <div class="overflow-hidden">
                        <h3 class="text-xl font-semibold text-pink-600 whitespace-nowrap overflow-hidden text-ellipsis">
                            <a href="mailto:pascualperla226@gmail.com" class="hover:underline"
                                aria-label="Enviar correo a posperla@gmail.com">pascualperla226@gmail.com</a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-contact', SiteContact);

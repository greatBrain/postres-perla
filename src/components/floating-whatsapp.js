class FloatingWhatsapp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const WHATSAPPURL = window.sendWhatsappMessage ? window.sendWhatsappMessage({ type: 'general' }) : 'https://wa.me/8296469680';
        this.innerHTML = `
    <div id="floating-btn" class="fixed z-50 flex flex-col items-center justify-center
         bottom-0 md:bottom-4 ls:bottom-4 right-4
         w-full left-1/2 -translate-x-1/2 p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/20
         sm:w-auto sm:left-auto sm:translate-x-0 sm:p-0 sm:bg-transparent sm:backdrop-blur-none sm:border-none
         sm:bottom-6 sm:right-6
         md:bottom-8 md:right-8
         lg:bottom-10 lg:right-10">
        <p class="block sm:hidden text-gray-900 font-semibold mb-2 text-center">
            ¡Hablemos! <span class="text-xl">😊</span>
        </p>
        <div class="relative bg-white rounded-full text-center shadow-2xl border-2 border-pink-400
            hidden md:block lg:block after:absolute after:content-[''] after:-bottom-2 after:left-1/2
            after:-translate-x-1/2 after:border-8 after:border-t-white after:border-x-transparent
            after:border-b-0">
            <p class="px-4 py-2 text-gray-700 text-base font-semibold leading-tight">
                ¡Hablemos! <span class="text-xl">😊</span>
            </p>
        </div>
        <!-- Botón flotante WhatsApp -->
        <div class="relative group w-full sm:w-18 h-18 cursor-pointer transition-transform duration-300">
            <a href="${WHATSAPPURL}" target="_blank" rel="noopener noreferrer"
                aria-label="Chatea conmigo por WhatsApp" class="relative sm:absolute bottom-0 sm:bottom-1 left-1/2 -translate-x-1/2 bg-green-600 w-full sm:w-14 h-14 rounded-full
               flex items-center justify-center shadow-lg ring-2 ring-white
               transition-all duration-300 group-hover:scale-95 hover:sm:w-40">
                <img src="./public/icons/whatsapp-white.png" alt="Logo de WhatsApp" class="w-8 h-8" loading="lazy">
                <span class="ml-2 block sm:hidden text-white font-bold">Chatea conmigo</span>
            </a>
        </div>
    </div>
        `;
    }
}

customElements.define('floating-whatsapp', FloatingWhatsapp);

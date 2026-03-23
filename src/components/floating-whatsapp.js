class FloatingWhatsapp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const WHATSAPPURL = window.sendWhatsappMessage ? window.sendWhatsappMessage({ type: 'general' }) : 'https://wa.me/8296469680';
        this.innerHTML = `
    <div id="floating-btn" class="fixed z-[90] flex flex-col items-end
         bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 pointer-events-auto">
        
        <!-- Globo de invitación adaptado para CRO (visible en Móvil y Escritorio) -->
        <div class="relative bg-white rounded-full shadow-lg border-2 border-pink-400 mb-2 
            after:absolute after:content-[''] after:-bottom-2 after:right-[22px]
            after:border-8 after:border-t-white after:border-x-transparent after:border-b-0
            animate-bounce sm:animate-none">
            <p class="px-3 py-1 text-gray-800 text-sm sm:text-base font-semibold whitespace-nowrap">
                ¡Hablame😊!
            </p>
        </div>

        <!-- Botón flotante WhatsApp (FAB circular 60x60 en móvil e igual en desktop) -->
        <div class="relative group cursor-pointer transition-transform duration-300 drop-shadow-xl hover:scale-105">
            <a href="${WHATSAPPURL}" target="_blank" rel="noopener noreferrer"
                aria-label="Chatea conmigo por WhatsApp" 
                class="bg-green-600 w-[60px] h-[60px] sm:w-[56px] sm:h-[56px] rounded-full
               flex items-center justify-center ring-4 ring-white/50 hover:ring-white transition-all duration-300">
                <img src="./public/icons/whatsapp-white.png" alt="Logo de WhatsApp" class="w-8 h-8 sm:w-8 sm:h-8" loading="lazy">
            </a>
        </div>
    </div>
        `;
    }
}

customElements.define('floating-whatsapp', FloatingWhatsapp);

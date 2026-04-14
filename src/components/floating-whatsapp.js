class FloatingWhatsapp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const WHATSAPPURL = window.sendWhatsappMessage ? window.sendWhatsappMessage({ type: 'general' }) : 'https://wa.me/8296469680';
        this.innerHTML = `
    <div id="floating-btn" class="hidden fixed z-[90] flex flex-col items-end
         bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 pointer-events-auto">
        
        <!-- Globo de invitación Premium -->
        <div class="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-pink-100 mb-4 px-4 py-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300
                    hidden sm:block">
            <p class="text-stone-800 text-sm font-bold whitespace-nowrap flex items-center gap-2">
                ¿Tienes dudas? <span class="text-pink-600">¡Escríbeme!</span> 🧁
            </p>
            <div class="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-pink-100 rotate-45"></div>
        </div>

        <!-- Botón flotante WhatsApp -->
        <div class="group relative cursor-pointer outline-none">
            <!-- Pulsating Glow -->
            <div class="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
            
            <a href="${WHATSAPPURL}" target="_blank" rel="noopener noreferrer"
                aria-label="Chatea conmigo por WhatsApp" 
                class="relative bg-green-500 w-[64px] h-[64px] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_35px_rgba(34,197,94,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 border-4 border-white">
                <img src="./public/icons/whatsapp-white.png" alt="WhatsApp" class="w-8 h-8" loading="lazy">
            </a>
        </div>
    </div>
        `;
    }
}

customElements.define('floating-whatsapp', FloatingWhatsapp);

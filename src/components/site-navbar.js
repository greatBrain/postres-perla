class SiteNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Eliminar código duplicado de los links usando un array
        const links = [
            { href: '#catalog', text: 'Productos', extraClass: '' },
            { href: '#contact', text: 'Contáctanos', extraClass: '' },
            { href: '#about-me', text: 'Conócenos', extraClass: '' },
            { href: '#testimonials', text: 'Testimonios', extraClass: 'hidden md:block lg:block' }
        ];

        // Se elimina la clase 'nav-btn' causante del estilo por defecto. 
        // Estilo 'píldora' solo en hover (hover:bg-pink-500 hover:text-white).
        const linksHTML = links.map(link => `
            <a href="${link.href}" class="whitespace-nowrap px-4 py-2 transition-all duration-300 text-sm sm:text-lg hover:bg-pink-500 hover:text-white rounded-full ${link.extraClass}">
                ${link.text}
            </a>
        `).join('');

        this.innerHTML = `
    <nav id="smart-navbar" class="fixed z-50 bg-white shadow-md h-14 lg:h-16 
     flex items-center justify-between px-3 md:px-6 lg:px-6 transition-transform duration-300 transform-gpu
     rounded-full mt-[4px] md:mt-4 w-[96%] max-w-6xl left-1/2 -translate-x-1/2">
        
        <a href="#" class="flex brand-logo flex-nowrap items-center shrink-0 py-2 lg:py-5">
            <img src="./public/icons/P-perla-logo.png" alt="Logo de la pastelería Postres Perla" class="h-10 w-10 md:h-10 md:w-10
            lg:h-12 lg:w-12 drop-shadow-xl rounded-full border-[3px] lg:border-4 border-pink-100" />
            <span class="hidden md:block text-pink-600 pl-2 text-2xl lg:text-3xl font-bold md:font-normal">Postres Perla</span>
        </a>
        
        <div class="flex justify-start items-center space-x-2 md:space-x-4 text-pink-500 capitalize font-semibold ubuntu-font scrollbar-hide overflow-x-auto
        md:overflow-x-hidden py-1 w-full pl-3 lg:pl-0 lg:w-auto lg:justify-end">
            ${linksHTML}
        </div>
    </nav>
        `;

        // Lógica de Smart Sticky Header unificada para móviles, tablets y desktop
        const nav = this.querySelector('#smart-navbar');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            // Ocultar al hacer scroll hacia abajo y mostrar al subir en todos los dispositivos
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                nav.classList.add('-translate-y-[150%]');
            } else {
                nav.classList.remove('-translate-y-[150%]');
            }

            lastScrollY = currentScrollY;
        }, { passive: true });
    }
}

customElements.define('site-navbar', SiteNavbar);

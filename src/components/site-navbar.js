class SiteNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <nav class="fixed z-50 bg-pink-500 backdrop-blur-xs md:backdrop-blur-none lg:backdrop-blur-none shadow dark:bg-pink-500 h-14 lg:h-16 
     flex items-center justify-between px-5 md:px-6 lg:px-6
     rounded-full mt-[4px] w-[94%] left-1/2 -translate-x-1/2 md:justify-center lg:justify-between
     lg:rounded-none lg:mt-0 lg:max-w-full lg:mx-0 lg:w-full lg:left-0 lg:translate-x-0">
        <a href="#" class="hidden lg:flex brand-logo flex-nowrap items-center py-5">
            <img src="./public/icons/P-perla-logo.png" alt="Logo de la pastelería Postres Perla" class="h-12 w-12 md:h-10 md:w-10
            lg:h-12 lg:w-12 drop-shadow-xl rounded-full border-4" />
            <span class="text-white pl-2 text-2xl lg:text-3xl font-bold md:font-normal">Postres Perla</span>
        </a>
        <div class="flex justify-start items-center space-x-2 md:space-x-4 text-white capitalize font-semibold ubuntu-font scrollbar-hide overflow-x-auto
        sm:overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden py-1">
            <a href="#portion-calculator"
                class="whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-200 hover:bg-yellow-300 text-gray-800 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-lg font-bold flex items-center border border-yellow-200">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Calcular porciones
            </a>
            <a href="#catalog"
                class="nav-btn whitespace-nowrap px-4 py-2 transition-all text-sm sm:text-lg">Productos</a>
            <a href="#contact"
                class="nav-btn whitespace-nowrap px-4 py-2 transition-all text-sm sm:text-lg">Contáctanos</a>
            <a href="#about-me" class="nav-btn whitespace-nowrap px-4 py-2 transition-all text-sm sm:text-lg">
                Conócenos
            </a>
            <a href="#testimonials"
                class="nav-btn whitespace-nowrap px-4 py-2 transition-all text-sm sm:text-lg hidden md:block lg:block">
                Testimonios
            </a>
        </div>
    </nav>
        `;
    }
}

customElements.define('site-navbar', SiteNavbar);

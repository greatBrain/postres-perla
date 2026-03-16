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

class CalculatorBanner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Calculator Promo Banner -->
        <div class="w-full bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-300/30">
            <div class="max-w-6xl mx-auto px-6 py-8 md:py-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
                <!-- Decorative glow -->
                <!--<div class="absolute -top-14 -left-10 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none"></div>
                <div class="absolute -bottom-14 -right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none"></div>-->
                <img src="public/images/vectors/cake-slice.svg" class="w-20 h-20">
                <div class="relative z-10 text-center md:text-left flex flex-col justify-center">
                    <!--<h4 class="text-white text-4xl md:text-5xl font-bold mb-2 ubuntu-font-bold tracking-tight">¿Tienes dudas con el tamaño del pastel?</h4>-->
                    <h4 class="text-white text-4xl md:text-5xl font-bold mb-2 ubuntu-font-bold tracking-tight italic">Próximamente:<span class="text-gray-900 italic"> Calculadora de porciones</span></h4>
                    <!--<p class="text-pink-50 text-base md:text-lg opacity-90 md:max-w-full">Usa nuestra herramienta y calcula las porciones exactas para tu evento.</p>-->
                    <p class="text-white text-base md:text-lg opacity-95 md:max-w-full">Herramienta para obtener recomendaciones del pastel ideal para tu evento.</p>
                </div>
                <div class="d-none relative z-10 shrink-0 mt-2 md:mt-0">
                    <a href="#calculadora-de-porciones" 
                       class="inline-flex items-center gap-3 bg-yellow-300 hover:bg-yellow-400 text-stone-900 font-bold py-3.5 px-8 rounded-2xl shadow-lg shadow-pink-900/20 transition-all hover:-translate-y-1 active:scale-95 text-[15px]">
                        <img src="public/icons/cake-slice.svg" class="w-5 h-5 opacity-90" alt="">
                        Probar calculadora
                    </a>
                </div>                
            </div>             
        </div>
        `;
    }
}

customElements.define('calculator-banner', CalculatorBanner);

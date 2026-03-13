class SiteAbout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section id="about-me" class="relative py-25 bg-pink-50 overflow-hidden">
        <div class="absolute top-10 left-10 w-72 h-72 bg-pink-200 opacity-30 rounded-full blur-3xl z-0"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-pink-100 opacity-30 rounded-full blur-2xl z-0"></div>
        <div class="relative z-10 max-w-6xl mx-auto px-6">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl font-bold text-pink-600 mb-4 ubuntu-font-bold tracking-tight">
                    Tu confianza es nuestro motor
                </h2>
                <div class="flex items-center justify-center gap-4">
                    <div class="w-24 h-1 bg-pink-300 rounded-full"></div>
                    <span class="text-pink-400">✧</span>
                    <div class="w-24 h-1 bg-pink-300 rounded-full"></div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <!-- Imagen con Sello de Confianza -->
                <div class="relative shrink-0" data-aos="zoom-in">
                    <img src="public/images/chef.webp" alt="Perla Pascual, repostera fundadora" loading="lazy"
                        class="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-2xl object-contain bg-pink-100" />

                    <!-- SVG Sello de Confianza (Garantía de Sabor) -->
                    <div class="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 animate-slow-spin">
                        <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-lg">
                            <defs>
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0">
                                </path>
                            </defs>
                            <circle cx="50" cy="50" r="45" fill="white" class="fill-white" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#db2777" stroke-width="0.5"
                                stroke-dasharray="2,2" />
                            <text class="text-[9.5px] font-bold uppercase fill-pink-600 tracking-wider">
                                <textPath xlink:href="#circlePath" startOffset="0%">✧ 100% ARTESANAL ✧ GARANTÍA DE SABOR
                                    ✧</textPath>
                            </text>
                            <g transform="translate(32, 32) scale(0.15)">
                                <path fill="#db2777"
                                    d="M119.5 240.2l-21.7-12.2-21.7 12.2c-5.7 3.2-12.7-1.8-11.4-8.2l4.8-23.9-17.7-16.7c-4.6-4.3-2-12 4.4-12.7l24.4-2.8 10.2-22.3c2.7-5.9 11.2-5.9 13.9 0l10.2 22.3 24.4 2.8c6.4.7 9 8.4 4.4 12.7L126.1 208l4.8 23.9c1.3 6.4-5.7 11.4-11.4 8.3z" />
                            </g>
                            <text x="50" y="55" text-anchor="middle"
                                class="text-[7px] font-black fill-pink-500 ubuntu-font">POSTRES PERLA</text>
                        </svg>
                    </div>
                </div>

                <!-- Text Area - Brand Promise -->
                <div class="flex-1 text-center md:text-left space-y-6" data-aos="fade-left">
                    <h3 class="text-2xl md:text-2xl font-bold text-gray-800 leading-tight">
                        <!-- <br class="hidden md:block"> -->
                        Brindamos <span class="text-pink-500">excelencia</span> en cada entrega
                    </h3>

                    <div class="space-y-4 text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                        <p>
                           Hola, <strong>soy Perla</strong>, soy pastelera profesional y fundadora de este hermoso proyecto. 
                           Desde mi cocina preparo lo mejor para tí, con mucha dedicación.
                        </p>
                        <p>
                            Aquí, en <span class="text-pink-600 font-bold italic">Postres Perla</span> nuestra prioridad
                            es transformar simples ingredientes en momentos inolvidables!
                        </p>
                        <p class="text-[16px] text-gray-800 border-l-4 border-pink-400 pl-6 italic bg-white/50 py-4 rounded-r-xl shadow-sm">
                            "No solo horneamos; creamos arte comestible bajo el compromiso de entregar calidad absoluta
                            en cada pedido."
                        </p>
                    </div>

                    <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                        <div
                            class="flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-700 font-bold text-sm">
                            <span class="text-xl">✓</span> Hecho a mano
                        </div>
                        <div
                            class="flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-bold text-sm">
                            <span class="text-xl">✓</span> Ingredientes premium
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="signature flex justify-center px-4">
        </div>
    </section>
        `;
    }
}

customElements.define('site-about', SiteAbout);

class SiteAbout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section id="about-me" class="relative py-24 bg-white overflow-hidden">
        <div class="absolute top-10 left-10 w-72 h-72 bg-pink-100 opacity-40 rounded-full blur-3xl z-0"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-yellow-50 opacity-40 rounded-full blur-3xl z-0"></div>
        <div class="relative z-10 max-w-6xl mx-auto px-6">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl md:text-6xl text-pink-500 mb-6 ubuntu-font-bold tracking-tight">
                    Tu confianza es nuestro motor
                </h2>
                <div class="flex items-center justify-center gap-6">
                    <div class="w-16 h-1 bg-pink-200 rounded-full"></div>
                    <span class="text-pink-500 text-2xl">✧</span>
                    <div class="w-16 h-1 bg-pink-200 rounded-full"></div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <!-- Imagen con Sello de Confianza -->
                <div class="relative shrink-0" data-aos="zoom-in">
                    <div class="relative p-3 bg-white rounded-full shadow-2xl border border-stone-100 ring-4 ring-pink-50">
                        <img src="public/images/chef.webp" alt="Perla Pascual, repostera fundadora" loading="lazy"
                            class="w-64 h-64 md:w-80 md:h-80 rounded-full object-contain bg-pink-50 transition-transform duration-500 hover:scale-105" />
                    </div>

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
                                class="text-[7.5px] font-black fill-pink-600 ubuntu-font tracking-tighter">POSTRES PERLA</text>
                        </svg>
                    </div>
                </div>

                <!-- Text Area - Brand Promise -->
                <div class="flex-1 text-center md:text-left space-y-8" data-aos="fade-left">
                    <h3 class="text-3xl md:text-4xl font-bold text-stone-800 leading-tight ubuntu-font-bold">
                        Brindamos <span class="text-pink-600 relative inline-block">excelencia<span class="absolute bottom-1 left-0 w-full h-2 bg-pink-100 -z-10 rounded-full"></span></span> en cada entrega
                    </h3>

                    <div class="space-y-6 text-lg md:text-xl text-stone-700 leading-relaxed font-medium">
                        <p>
                           Hola, <strong class="text-stone-900 font-black underline decoration-pink-200 decoration-4 underline-offset-4">soy Perla</strong>, pastelera profesional y fundadora de este proyecto dedicado a la alta repostería artesanal. 
                        </p>
                        <p>
                            En <span class="text-pink-600 font-bold italic">Postres Perla</span> mi prioridad es transformar ingredientes seleccionados en experiencias que recordarás toda la vida.
                        </p>
                        <blockquote class="text-lg text-stone-800 border-l-4 border-pink-500 pl-6 italic bg-pink-50/50 py-6 rounded-r-2xl shadow-sm border-dashed">
                            "No solo horneamos; creamos arte comestible bajo el compromiso de entregar calidad absoluta en cada pedido."
                        </blockquote>
                    </div>

                    <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
                        <div
                            class="flex items-center gap-3 px-6 py-3 bg-pink-50 border border-pink-100 rounded-full text-pink-700 font-bold text-sm shadow-sm transition-transform hover:-translate-y-1">
                            <span class="flex items-center justify-center w-5 h-5 bg-white rounded-full text-[10px] text-pink-600 shadow-inner">✓</span> Hecho a mano
                        </div>
                        <div
                            class="flex items-center gap-3 px-6 py-3 bg-yellow-50 border border-yellow-100 rounded-full text-yellow-700 font-bold text-sm shadow-sm transition-transform hover:-translate-y-1">
                            <span class="flex items-center justify-center w-5 h-5 bg-white rounded-full text-[10px] text-yellow-600 shadow-inner">✓</span> Ingredientes premium
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

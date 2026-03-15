class PortionCalculator extends HTMLElement {
    constructor() {
        super();
        this.guests = 0;
        this.step = 1;
        this.recommendation = {
            lbs: 0,
            minMsg: 0,
            maxMsg: 0
        };
    }

    connectedCallback() {
        this.render();
        this.attachEventListeners();
    }

    getHtml() {
        return `
        <section id="portion-calculator" class="py-16 lg:py-24 px-4 md:px-8 bg-white/50 overflow-hidden relative">
            <div class="container mx-auto relative z-10">
                <!-- Two Column Layout -->
                <div class="grid lg:grid-cols-[1fr_1.25fr] gap-16 lg:gap-20 items-start">                    
                    <!-- Left Column: Context -->
                    <div class="flex flex-col justify-start space-y-6 lg:pt-10" data-aos="fade-right">
                        <div>
                            <span class="inline-block bg-yellow-200 text-pink-600 font-bold px-3 py-1 rounded-full text-sm mb-4 uppercase tracking-wider">
                                Herramienta gratuita
                            </span>
                            <h3 class="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
                                Planifica el pastel perfecto
                            </h3>
                            <p class="text-gray-600 text-lg leading-relaxed">
                                ¿No estás seguro del tamaño ideal para tu evento?                                
                            </p>
                            <p class="text-gray-600 text-lg leading-relaxed my-2">                                
                                Usa nuestra <strong class="font-bold text-gray-800">calculadora de porciones</strong> para descubrir el tamaño que necesitas.
                            </p>
                        </div>
                        
                        <ul class="space-y-4 text-gray-800 font-medium font-semibold">
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Ideal para cumpleaños.
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Ideal para bodas y todo tipo de eventos formales.
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Evita que falte pastel.
                            </li>
                        </ul>
                    </div>

                    <!-- Right Column: Calculator Card -->
                    <div data-aos="fade-left" class="relative">
                        <!-- Sutil halo decorativo trasero -->
                        <div class="absolute -top-10 -right-10 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply opacity-50 blur-3xl z-0 pointer-events-none"></div>
                        <div class="absolute -bottom-10 -left-10 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 blur-3xl z-0 pointer-events-none"></div>

                        <div class="relative max-w-[380px] mx-auto md:max-w-full z-10 bg-white/40 backdrop-blur-xl rounded-3xl rounded-tr-[2rem] rounded-bl-[2rem] shadow-2xl shadow-pink-500/10 border border-pink-300 border-[3px] p-2 sm:p-4 overflow-hidden">                        
                            <!-- Step 1: Input Form -->
                            <div id="calc-step-1" class="p-6 md:p-8 transition-all duration-500 ease-in-out">
                                <div class="mb-8 flex flex-col items-center text-center">
                                    <div class="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                                        <img src="public/images/vectors/cupcake.svg" class="w-12 h-12 drop-shadow-sm" alt="Calculator Icon" />
                                    </div>
                                    <h3 class="text-2xl text-gray-800 font-bold mb-1">Calculadora de porciones</h3>
                                    <p class="text-gray-500">Indica cuántas personas asistirán.</p>
                                </div>

                                <!-- Guest Count -->
                                <div class="mb-8">
                                    <label class="block text-gray-700 font-semibold mb-3 text-lg">Ingresa el número de invitados</label>
                                    <input type="number" id="guest-count" placeholder="Ejemplo: 25" min="1"
                                        class="w-full text-center text-xl font-bold text-gray-800 bg-pink-50 border-2 border-pink-200 rounded-2xl py-4 px-4 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all shadow-inner mb-4">
                                    
                                    <!-- Quick Buttons -->
                                    <div class="flex flex-row overflow-x-auto scrollbar-hide flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3">
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-pink-200 text-pink-600 rounded-full font-semibold hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-all transform active:scale-105 shadow-sm" data-val="10">10 invitados</button>
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-pink-200 text-pink-600 rounded-full font-semibold hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-all transform active:scale-105 shadow-sm" data-val="20">20 invitados</button>
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-pink-200 text-pink-600 rounded-full font-semibold hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-all transform active:scale-105 shadow-sm" data-val="30">30 invitados</button>
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-pink-200 text-pink-600 rounded-full font-semibold hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-all transform active:scale-105 shadow-sm" data-val="50">50 invitados</button>
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-pink-200 text-pink-600 rounded-full font-semibold hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-all transform active:scale-105 shadow-sm" data-val="100">100+ invitados</button>
                                    </div>
                                </div>

                                <!-- Options Grid -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 w-full max-w-full">
                                    <!-- Event Type -->
                                    <div class="w-full min-w-0">
                                        <label class="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm md:text-base">Tipo de evento (opcional)</label>
                                        <div class="flex flex-col gap-2 w-full">
                                            <label class="flex items-center w-full p-2.5 md:p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-pink-50 hover:border-pink-200 transition-all">
                                                <input type="radio" name="event_type" value="cumpleanos" checked class="text-pink-500 focus:ring-pink-500 w-4 h-4 md:w-5 md:h-5 shrink-0">
                                                <span class="ml-2 md:ml-3 text-gray-700 text-xs md:text-sm flex-1 break-words leading-tight">Cumpleaños / Celebración</span>
                                            </label>
                                            <label class="flex items-center w-full p-2.5 md:p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-pink-50 hover:border-pink-200 transition-all">
                                                <input type="radio" name="event_type" value="boda" class="text-pink-500 focus:ring-pink-500 w-4 h-4 md:w-5 md:h-5 shrink-0">
                                                <span class="ml-2 md:ml-3 text-gray-700 text-xs md:text-sm flex-1 break-words leading-tight">Boda / Evento corporativo</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <!-- Portion Style -->
                                    <div class="w-full min-w-0">
                                        <label class="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm md:text-base">Estilo de porción</label>
                                        <div class="flex flex-col gap-2 w-full">
                                            <label class="flex items-center w-full p-2.5 md:p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-pink-50 hover:border-pink-200 transition-all">
                                                <input type="radio" name="portion_style" value="normal" checked class="text-pink-500 focus:ring-pink-500 w-4 h-4 md:w-5 md:h-5 shrink-0">
                                                <span class="ml-2 md:ml-3 text-gray-700 text-xs md:text-sm flex-1 break-words leading-tight">Normal (Recomendada)</span>
                                            </label>
                                            <label class="flex items-center w-full p-2.5 md:p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-pink-50 hover:border-pink-200 transition-all">
                                                <input type="radio" name="portion_style" value="generosa" class="text-pink-500 focus:ring-pink-500 w-4 h-4 md:w-5 md:h-5 shrink-0">
                                                <span class="ml-2 md:ml-3 text-gray-700 text-xs md:text-sm flex-1 break-words leading-tight">Generosa (Porciones grandes)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Button -->
                                <button id="btn-calculate" class="cursor-pointer w-full max-w-sm mx-auto bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] text-lg flex justify-center items-center shrink-0 text-nowrap">
                                    Ver recomendación
                                    <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                                
                                <div id="calc-error" class="text-red-500 text-center mt-4 hidden font-medium">Por favor ingresa el número de invitados.</div>
                            </div>

                            <!-- Step 2: Results -->
                            <div id="calc-step-2" class="p-6 md:p-8 hidden opacity-0 transition-opacity duration-500 ease-in-out">
                                <div class="text-center">
                                    <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 shadow-sm">
                                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 class="text-2xl text-gray-800 font-bold mb-2">Recomendación para tu evento</h3>
                                    <p class="text-gray-600 text-lg mb-8">Personas: <span id="res-guests" class="font-bold text-pink-500 text-xl"></span></p>
                                    
                                    <div class="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-2xl p-4 md:p-6 shadow-sm mb-6 relative overflow-hidden flex flex-col items-center w-full">
                                        <img src="public/images/vectors/cupcake.svg" class="w-10 h-10 md:w-12 md:h-12 mb-3 drop-shadow-sm opacity-90" alt="Cake Icon" />
                                        <p class="text-gray-500 font-semibold uppercase tracking-wide text-[10px] md:text-xs mb-2">Bizcocho Recomendado</p>
                                        <p id="res-lbs" class="text-2xl min-[375px]:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center leading-tight"></p>
                                        <p id="res-range" class="text-gray-600 text-xs md:text-sm bg-white/80 inline-block px-3 md:px-4 py-1.5 rounded-full border border-gray-100 shadow-sm text-center leading-tight mx-auto max-w-[95%]"></p>
                                    </div>

                                    <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 text-left flex items-start shadow-sm">
                                        <svg class="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <p class="text-gray-700 text-sm leading-relaxed">
                                            <strong class="font-bold text-gray-800">Sugerencia:</strong> si deseas variedad para tus invitados, puedes complementar con cupcakes o mini postres.
                                        </p>
                                    </div>

                                    <div class="flex flex-col gap-3 justify-center w-full">
                                        <a href="#catalog" class="btn-catalog bg-white border border-pink-300 text-pink-600 hover:bg-pink-50 font-bold py-3 px-4 sm:px-6 rounded-full shadow-sm hover:shadow transition-all text-center flex-1 text-sm md:text-base whitespace-nowrap">
                                            Ver bizcochos
                                        </a>
                                        <button id="btn-whatsapp" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 sm:px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-center flex-1 flex items-center justify-center text-sm md:text-base whitespace-nowrap">
                                            <svg class="w-4 h-4 md:w-5 md:h-5 mr-2 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.252.38 2.404 1.01 3.385l-.837 3.054 3.125-.82c.943.582 2.052.923 3.238.923 3.181 0 5.767-2.585 5.767-5.766S15.212 6.172 12.031 6.172zm3.176 8.35c-.156.44-.816.843-1.157.904-.34.062-.782.124-1.993-.346-1.503-.585-2.548-2.128-2.627-2.232-.078-.103-.627-.835-.627-1.593 0-.757.391-1.13.535-1.282.146-.153.314-.191.419-.191.104 0 .208.001.294.005.093.003.218-.035.342.261.129.311.439 1.066.478 1.144.039.078.059.169.019.273-.039.103-.059.168-.137.26-.078.092-.167.208-.235.286-.078.093-.162.196-.059.375.103.179.462.766 1.037 1.28 1.488 1.334 2.146 1.547 2.333 1.624.187.078.297.065.406-.052.11-.117.478-.558.608-.75.129-.192.259-.16.429-.098.169.063 1.077.509 1.261.6.185.093.308.14.354.218.046.078.046.452-.11.892zM12.031 2C6.496 2 2 6.496 2 12.031c0 1.77.461 3.435 1.259 4.887L2 22l5.228-1.205C8.618 21.548 10.279 22 12.031 22 17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2z"/></svg>
                                            Consultar por WhatsApp
                                        </button>
                                    </div>
                                    
                                    <button id="btn-back" class="mt-6 text-gray-400 hover:text-pink-500 font-semibold underline transition-colors">Volver a calcular</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    render() {
        this.innerHTML = this.getHtml();
    }

    attachEventListeners() {
        // Quick buttons
        const quickBtns = this.querySelectorAll('.quick-guest-btn');
        const countInput = this.querySelector('#guest-count');
        const calcBtn = this.querySelector('#btn-calculate');
        const errorMsg = this.querySelector('#calc-error');

        quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                countInput.value = btn.dataset.val;
                // Add tiny visual feedback to the button
                btn.classList.add('bg-pink-100', 'ring-2', 'ring-pink-300');
                setTimeout(() => {
                    btn.classList.remove('bg-pink-100', 'ring-2', 'ring-pink-300');
                }, 200);
                errorMsg.classList.add('hidden');
            });
        });

        countInput.addEventListener('input', () => {
            if (countInput.value > 0) {
                errorMsg.classList.add('hidden');
            }
        });

        // Calculate Action
        calcBtn.addEventListener('click', () => {
            const guests = parseInt(countInput.value);
            if (!guests || guests <= 0) {
                errorMsg.classList.remove('hidden');
                return;
            }

            this.guests = guests;
            this.calculatePortions();
            this.showStep2();
        });

        // WhatsApp Action
        const waBtn = this.querySelector('#btn-whatsapp');
        waBtn.addEventListener('click', () => {
            this.sendToWhatsApp();
        });

        // Back Action
        const backBtn = this.querySelector('#btn-back');
        backBtn.addEventListener('click', () => {
            this.showStep1();
        });

        // Catalog Action (smooth scroll via anchor, handled globally or simple listener here)
        const catalogBtn = this.querySelector('.btn-catalog');
        catalogBtn.addEventListener('click', (e) => {
            const target = document.querySelector('#catalog');
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    calculatePortions() {
        const eventType = this.querySelector('input[name="event_type"]:checked')?.value || 'cumpleanos';
        const portionStyle = this.querySelector('input[name="portion_style"]:checked')?.value || 'normal';

        // Base logic: 1 lb = ~25 normal portions
        let baseLbs = this.guests / 25; // Normal

        // Modifiers based on form style
        if (portionStyle === 'generosa') baseLbs *= 1.25; // e.g. 1 lb yields less (20 portions), so you need more cake

        // Real world business adjustment:
        // Weddings usually offer a lot of other food, cake pieces can be smaller
        if (eventType === 'boda') {
            baseLbs *= 0.8;
        }

        // Round up to nearest 0.5 lb
        let recommendedLbs = Math.ceil(baseLbs * 2) / 2;

        // Minimum order size 0.5 lb
        if (recommendedLbs < 0.5) {
            recommendedLbs = 0.5;
        }

        // Capping to realistic bizcocho max sizes usually 5+ lbs, 
        // we just output what math says.

        const formatLbs = (lbs) => {
            if (lbs === 0.5) return '1/2 libra';
            if (lbs === 1) return '1 libra';
            if (lbs % 1 === 0.5) return `${Math.floor(lbs)} y 1/2 libras`;
            return `${lbs} libras`;
        };

        // Portions range estimation
        // For standard 1lb: 20 - 30 portions.
        const minMsg = Math.floor(recommendedLbs * 20);
        const maxMsg = Math.floor(recommendedLbs * 28);

        this.recommendation = {
            lbsText: formatLbs(recommendedLbs),
            minMsg: minMsg,
            maxMsg: maxMsg
        };

        // Update UI
        this.querySelector('#res-guests').textContent = this.guests;
        this.querySelector('#res-lbs').textContent = this.recommendation.lbsText;
        this.querySelector('#res-range').textContent = `Rinde aproximadamente entre ${minMsg} y ${maxMsg} porciones`;
    }

    showStep2() {
        const step1 = this.querySelector('#calc-step-1');
        const step2 = this.querySelector('#calc-step-2');

        step1.classList.add('opacity-0');
        setTimeout(() => {
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            // small delay to allow display block to take effect before opacity transition
            setTimeout(() => {
                step2.classList.remove('opacity-0');
                step2.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 50);
        }, 300); // Wait for fade out
    }

    showStep1() {
        const step1 = this.querySelector('#calc-step-1');
        const step2 = this.querySelector('#calc-step-2');

        step2.classList.add('opacity-0');
        setTimeout(() => {
            step2.classList.add('hidden');
            step1.classList.remove('hidden');
            setTimeout(() => {
                step1.classList.remove('opacity-0');
                step1.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 50);
        }, 300);
    }

    sendToWhatsApp() {
        const phoneNumber = '8296469680'; // Obtained from main.js implementation
        const message = `Hola! Usé la calculadora del sitio.\nEl evento es para ${this.guests} personas y el sistema recomienda un bizcocho de ${this.recommendation.lbsText}.\nQuisiera ver opciones disponibles.`;
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    }
}

customElements.define('portion-calculator', PortionCalculator);

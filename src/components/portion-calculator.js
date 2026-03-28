class PortionCalculator extends HTMLElement {
    constructor() {
        super();
        this.guests = null;
        this.eventType = null;
        this.portionStyle = null;
        this.recommendation = {
            lbsText: '',
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
        <section id="calculadora-de-porciones" class="py-16 lg:py-24 px-4 md:px-8 bg-pink-50 overflow-hidden relative font-sans">
            <div class="container mx-auto relative z-10">
                <!-- Two Column Layout -->
                <div class="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">                    
                    <!-- Left Column: Context -->
                    <div class="flex flex-col justify-start space-y-6 lg:pt-10" data-aos="fade-right">
                        <div>
                            <span class="inline-block bg-yellow-200 text-gray-900 font-bold italic px-3 py-1.5 rounded-full text-xs mb-2 uppercase tracking-widest shadow-sm">
                                Herramienta gratuita
                            </span>
                            <div class="flex items-center portion-title-container mb-6">
                                <h3 class="text-5xl lg:text-6xl font-bold text-gray-800 leading-[1.1] tracking-tighter">
                                    Calcula el tamaño <br> de tu pastel                                 
                                </h3>
                                <!-- Minimalist Arrow Icon -->
                                <svg class="w-12 h-12 text-pink-500 hidden md:block opacity-80 ml-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                            <h4 class="text-gray-800 font-bold text-2xl lg:text-3xl leading-snug mt-10">
                                ¿No estás seguro si alcanzará para todos tus invitados?
                            </h4>
                            <p class="text-gray-600 text-lg lg:text-xl leading-relaxed mt-6 max-w-xl">      
                                Usa nuestra <strong class="font-extrabold text-gray-900 border-b-2 border-pink-100">calculadora inteligente</strong> para saber cuántas porciones necesitas y asegúrate de que nadie se quede sin probarlo.                                                                                       
                            </p>
                        </div>

                        <div class="pt-4">
                            <p class="text-gray-900 font-bold text-lg mb-4">Ideal para planificar:</p>
                            <ul class="space-y-4 text-gray-700 font-medium">
                                <li class="flex items-center group">
                                    <div class="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-4 shrink-0 transition-colors group-hover:bg-yellow-200">
                                        <svg class="w-3.5 h-3.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span class="text-lg text-gray-700">Cumpleaños inolvidables</span>
                                </li>
                                <li class="flex items-center group">
                                    <div class="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-4 shrink-0 transition-colors group-hover:bg-yellow-200">
                                        <svg class="w-3.5 h-3.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span class="text-lg text-gray-700">Reuniones y momentos especiales</span>
                                </li>
                                <li class="flex items-center group">
                                    <div class="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-4 shrink-0 transition-colors group-hover:bg-yellow-200">
                                        <svg class="w-3.5 h-3.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span class="text-lg text-gray-700">Bodas y eventos de etiqueta</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Right Column: Calculator Card -->
                    <div data-aos="fade-left" class="relative max-w-full z-10 bg-white/95 
                    rounded-[3rem] border border-gray-500 shadow-[0_24px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-4 md:p-8 overflow-hidden backdrop-blur-xl" 
                    style="-webkit-backdrop-filter: blur(20px);">                        
                        <!-- Step 1: Input Form -->
                        <div id="calc-step-1" class="p-6 md:p-8 transition-all duration-500 ease-in-out">                                
                            <!-- Unified Guest Selection (Segmented Pills) -->
                            <div class="mb-12">
                                <label class="flex items-center gap-3 mb-6">
                                    <img src="public/icons/person-team-icon.svg" class="w-8 h-8" alt="Invitados">
                                    <span class="text-stone-900 font-[700] text-2xl tracking-tight">¿Cuántos invitados tienes?</span>
                                </label>
                                
                                <div class="grid grid-cols-4 gap-3 md:gap-4 p-3 bg-stone-50 rounded-lg border border-pink-200">
                                    <button type="button" class="guest-pill cursor-pointer py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1" data-val="10">10</button>
                                    <button type="button" class="guest-pill cursor-pointer py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1" data-val="15">15</button>
                                    <button type="button" class="guest-pill cursor-pointer py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1" data-val="20">20</button>
                                    <button type="button" class="guest-pill cursor-pointer py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1" data-val="25">25</button>
                                    <button type="button" class="guest-pill cursor-pointer py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1" data-val="30">30</button>
                                    <button type="button" class="guest-pill cursor-pointer py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1" data-val="40">40</button>
                                    <button type="button" class="guest-pill cursor-pointer py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1" data-val="50">50</button>
                                    <button type="button" class="guest-pill cursor-pointer py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1" data-val="100">100+</button>                                    
                                </div>
                            </div>
                            <!-- Options Grid -->
                            <div class="space-y-10 mb-12">
                                <!-- Event Type -->
                                <div>
                                    <label class="flex items-center gap-2 text-stone-800 font-bold mb-4 text-lg">
                                        <img src="public/icons/celebration-icon.svg" class="w-7 h-7" alt="Evento"> Tipo de evento
                                    </label>
                                    <div class="flex gap-3 md:gap-4 p-1">
                                        <button type="button" class="event-type-pill cursor-pointer flex-1 py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex items-center justify-center" data-val="cumpleanos">Cumpleaños</button>
                                        <button type="button" class="event-type-pill cursor-pointer flex-1 py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex items-center justify-center" data-val="boda">Boda / Formal</button>
                                    </div>
                                </div>                                    

                                <!-- Portion Style -->
                                <div>
                                    <label class="flex items-center gap-2 text-stone-800 font-bold mb-4 text-lg">
                                        <img src="public/icons/cake-slice.svg" class="w-6 h-6" alt="Porción"> Tamaño de porciones
                                    </label>
                                    <div class="flex gap-3 md:gap-4 p-1">
                                        <button type="button" class="portion-style-pill cursor-pointer flex-1 py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex items-center justify-center" data-val="normal">Normal</button>
                                        <button type="button" class="portion-style-pill cursor-pointer flex-1 py-3.5 px-2 rounded-2xl text-base font-bold transition-all duration-300 bg-white border border-pink-200 text-stone-800 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex items-center justify-center" data-val="generosa">Generoso</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Action Button -->
                            <div class="pt-3">
                                <button id="btn-calculate" disabled class="group relative w-full max-w-md mx-auto font-semibold py-3 px-6 rounded-3xl transition-all duration-300 text-base md:text-lg flex justify-center items-center gap-3 tracking-wider overflow-hidden bg-stone-100 text-stone-400 cursor-not-allowed">
                                    <span class="relative z-10 flex items-center justify-center">
                                        Ver resultados recomendados
                                        <svg class="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                </button>                                
                            </div>
                        </div>

                        <!-- Step 2: Results -->
                        <div id="calc-step-2" class="p-6 md:p-10 hidden opacity-0 transition-all duration-500 ease-in-out translate-y-4">
                            <div class="text-center">
                                <div class="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-6 shadow-sm border border-green-100">
                                    <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 class="text-3xl text-gray-900 font-black mb-4">¡Listo! 🎉</h3>
                                <p class="text-gray-600 text-lg mb-8">Según tus preferencias para <span id="res-guests" class="font-black text-pink-500 underline decoration-pink-100"></span> personas:</p>
                                
                                <div class="bg-gradient-to-br from-pink-400/5 to-pink-300/10 border-2 border-pink-100 rounded-[2rem] p-8 lg:p-12 mb-8 relative overflow-hidden group shadow-sm transition-all hover:shadow-md">
                                    <img src="public/images/vectors/cupcake.svg" class="w-16 h-16 absolute -right-4 -top-4 opacity-10 rotate-12 transition-transform group-hover:scale-125" alt="Cupcake" />
                                    <span class="text-pink-400 font-black text-sm uppercase tracking-[0.2em] block mb-4">Recomendación Perla</span>
                                    <p id="res-lbs" class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"></p>
                                    <div class="inline-block bg-white/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-pink-50 shadow-sm">
                                        <p id="res-range" class="text-pink-500 font-bold text-sm md:text-base"></p>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 w-full">
                                    <a href="#catalog" class="btn-catalog cursor-pointer border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 font-black py-4 px-6 rounded-2xl transition-all text-center flex items-center justify-center">
                                        Explorar Sabores
                                    </a>
                                    <button id="btn-whatsapp" class="bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/40 font-black py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-3">
                                        <svg class="w-6 h-6 fill-[#25D366]" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.252.38 2.404 1.01 3.385l-.837 3.054 3.125-.82c.943.582 2.052.923 3.238.923 3.181 0 5.767-2.585 5.767-5.766S15.212 6.172 12.031 6.172zm3.176 8.35c-.156.44-.816.843-1.157.904-.34.062-.782.124-1.993-.346-1.503-.585-2.548-2.128-2.627-2.232-.078-.103-.627-.835-.627-1.593 0-.757.391-1.13.535-1.282.146-.153.314-.191.419-.191.104 0 .208.001.294.005.093.003.218-.035.342.261.129.311.439 1.066.478 1.144.039.078.059.169.019.273-.039.103-.059.168-.137.26-.078.092-.167.208-.235.286-.078.093-.162.196-.059.375.103.179.462.766 1.037 1.28 1.488 1.334 2.146 1.547 2.333 1.624.187.078.297.065.406-.052.11-.117.478-.558.608-.75.129-.192.259-.16.429-.098.169.063 1.077.509 1.261.6.185.093.308.14.354.218.046.078.046.452-.11.892zM12.031 2C6.496 2 2 6.496 2 12.031c0 1.77.461 3.435 1.259 4.887L2 22l5.228-1.205C8.618 21.548 10.279 22 12.031 22 17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2z"/></svg>
                                        Pedir por WhatsApp
                                    </button>
                                </div>
                                
                                <button id="btn-back" class="text-gray-400 hover:text-pink-400 font-bold cursor-pointer uppercase text-xs tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto">
                                    <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    Ajustar Datos
                                </button>
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
        const guestPills = this.querySelectorAll('.guest-pill');
        const eventPills = this.querySelectorAll('.event-type-pill');
        const portionPills = this.querySelectorAll('.portion-style-pill');
        const calcBtn = this.querySelector('#btn-calculate');

        const validateForm = () => {
            const isReady = this.guests && this.eventType && this.portionStyle;
            if (isReady) {
                calcBtn.disabled = false;
                calcBtn.classList.remove('bg-stone-100', 'text-stone-400', 'cursor-not-allowed');
                calcBtn.classList.add('bg-pink-500', 'text-white', 'cursor-pointer', 'shadow-lg', 'shadow-pink-500/40', 'hover:bg-pink-600', 'hover:-translate-y-1');
            } else {
                calcBtn.disabled = true;
                calcBtn.classList.add('bg-stone-100', 'text-stone-400', 'cursor-not-allowed');
                calcBtn.classList.remove('bg-pink-500', 'text-white', 'cursor-pointer', 'shadow-lg', 'shadow-pink-500/40', 'hover:bg-pink-600', 'hover:-translate-y-1');
            }
        };

        const updatePillStyles = (pills, activeVal) => {
            pills.forEach(pill => {
                const isActive = pill.dataset.val === String(activeVal);
                if (isActive) {
                    pill.classList.remove('bg-white', 'text-stone-800', 'border-pink-200', 'shadow-[0_4px_10px_rgba(0,0,0,0.03)]', 'hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]', 'hover:-translate-y-1');
                    pill.classList.add('bg-yellow-400', 'text-stone-900', 'shadow-md');
                } else {
                    pill.classList.add('bg-white', 'text-stone-800', 'border-pink-200', 'shadow-[0_4px_10px_rgba(0,0,0,0.03)]', 'hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]', 'hover:-translate-y-1');
                    pill.classList.remove('bg-yellow-400', 'text-stone-900', 'shadow-md', '-translate-y-1');
                }
            });
            validateForm();
        };

        guestPills.forEach(pill => {
            pill.addEventListener('click', () => {
                this.guests = parseInt(pill.dataset.val);
                updatePillStyles(guestPills, pill.dataset.val);
            });
        });

        eventPills.forEach(pill => {
            pill.addEventListener('click', () => {
                this.eventType = pill.dataset.val;
                updatePillStyles(eventPills, pill.dataset.val);
            });
        });

        portionPills.forEach(pill => {
            pill.addEventListener('click', () => {
                this.portionStyle = pill.dataset.val;
                updatePillStyles(portionPills, pill.dataset.val);
            });
        });

        // Calculate Action
        calcBtn.addEventListener('click', () => {
            if (calcBtn.disabled) return;
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

        // Catalog Action
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
        // Base logic: 1 lb = ~25 normal portions
        let baseLbs = this.guests / 25;

        // Modifiers based on form style
        if (this.portionStyle === 'generosa') baseLbs *= 1.25;

        // Event type modifiers
        if (this.eventType === 'boda') {
            baseLbs *= 0.8;
        }

        // Round up to nearest 0.5 lb
        let recommendedLbs = Math.ceil(baseLbs * 2) / 2;

        // Minimum order size 0.5 lb
        if (recommendedLbs < 0.5) {
            recommendedLbs = 0.5;
        }

        const formatLbs = (lbs) => {
            if (lbs === 0.5) return '1/2 libra';
            if (lbs === 1) return '1 libra';
            if (lbs % 1 === 0.5) return `${Math.floor(lbs)} y 1/2 libras`;
            return `${lbs} libras`;
        };

        // Portions range estimation
        const minMsg = Math.floor(recommendedLbs * 20);
        const maxMsg = Math.floor(recommendedLbs * 28);

        this.recommendation = {
            lbsText: formatLbs(recommendedLbs),
            minMsg: minMsg,
            maxMsg: maxMsg
        };

        // Update UI Results
        this.querySelector('#res-guests').textContent = this.guests === 150 ? '150+' : this.guests;
        this.querySelector('#res-lbs').textContent = this.recommendation.lbsText;
        this.querySelector('#res-range').textContent = `Ideal para servir entre ${minMsg} y ${maxMsg} porciones`;
    }

    showStep2() {
        const step1 = this.querySelector('#calc-step-1');
        const step2 = this.querySelector('#calc-step-2');

        step1.classList.add('opacity-0', '-translate-y-4');
        setTimeout(() => {
            step1.classList.add('hidden');
            step2.classList.remove('hidden', 'opacity-0', 'translate-y-4');
            step2.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 400);
    }

    showStep1() {
        const step1 = this.querySelector('#calc-step-1');
        const step2 = this.querySelector('#calc-step-2');

        step2.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => {
            step2.classList.add('hidden');
            step1.classList.remove('hidden', 'opacity-0', '-translate-y-4');
            step1.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 400);
    }

    sendToWhatsApp() {
        const phoneNumber = '8296469680';
        const message = `¡Hola! Usé la calculadora de porciones en su web.\n\n📊 Resultados:\n- Invitados: ${this.guests === 150 ? '150+' : this.guests}\n- Tipo de evento: ${this.eventType === 'cumpleanos' ? 'Cumpleaños' : 'Boda / Formal'}\n- Tamaño de porción: ${this.portionStyle === 'normal' ? 'Normal' : 'Generoso'}\n- Recomendación: ${this.recommendation.lbsText}\n\nQuisiera consultar disponibilidad y sabores.`;
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    }
}

customElements.define('portion-calculator', PortionCalculator);

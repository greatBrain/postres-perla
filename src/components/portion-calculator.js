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
        <section id="portion-calculator" class="py-16 lg:py-24 px-4 md:px-8 bg-gradient-to-r from-white via-white to-[#FFF7D9] overflow-hidden relative">
            <div class="container mx-auto relative z-10">
                <!-- Two Column Layout -->
                <div class="grid lg:grid-cols-[1fr_1.25fr] gap-16 lg:gap-20 items-start">                    
                    <!-- Left Column: Context -->
                    <div class="flex flex-col justify-start space-y-4 lg:pt-10" data-aos="fade-right">
                        <div>
                            <span class="inline-block bg-yellow-200 text-gray-800 font-semibold px-3 py-1 rounded-full text-sm mb-4 tracking-wider">
                                Herramienta gratuita
                            </span>
                            <div class="flex flex-wrap portion-title-container">
                                <h3 class="flex text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
                                    Calcula el tamaño <br> de tu pastel                                 
                                </h3>
                                <img src="public/icons/icon-arrow.gif" class="h-full max-h-md ml-8 hidden md:block opacity-80 mix-blend-multiply">
                            </div>
                            <h4 class="text-gray-700 font-medium text-xl md:text-2xl leading-relaxed">
                                ¿No estás seguro si alcanzará para todos tus invitados?
                            </h4>
                            <p class="text-gray-600 text-lg leading-relaxed my-2">      
                                Usa nuestra <strong class="font-bold text-gray-800">calculadora</strong> para saber cuántas porciones necesitas y evita que falte pastel.                                                                                       
                            </p>
                        </div>

                        <p class="text-gray-600 text-lg leading-relaxed my-2">
                            Ideal para:
                        </p>
                        
                        <ul class="space-y-4 text-gray-800 font-medium font-semibold">
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"></path></svg>
                                 Cumpleaños
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"></path></svg>
                                Reuniones casuales
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"></path></svg>
                                Bodas y todo tipo de eventos formales
                            </li>
                        </ul>
                    </div>
                    <!-- Right Column: Calculator Card -->
                    <div data-aos="fade-left" class="relative max-w-[380px] mx-auto md:max-w-full z-10 bg-white/85 
                    max-w-full rounded-4xl shadow-[0_8px_32px_rgba(236,72,153,0.12)] border border-l-4 border-l-pink-600/40 border-pink-500/30 p-0 sm:p-2 overflow-hidden backdrop-blur-md" 
                    style="-webkit-backdrop-filter: blur(10px);">                        
                            <!-- Step 1: Input Form -->
                            <div id="calc-step-1" class="p-6 md:p-8 transition-all duration-500 ease-in-out">                                
                                <!-- Guest Count -->
                                <div class="mb-10 bg-gray-200/50 px-3 py-3 rounded-3xl">
                                    <label class="flex flex-row flex-nowrap items-center gap-2 mt-5 mb-2">
                                        <img src="public/icons/person-team-icon.svg" class="max-w-[35px]"> 
                                        <span class="text-gray-700 font-semibold text-2xl">¿Cuántas personas asistirán al evento?</span>
                                    </label>
                                    <!-- Quick Buttons -->
                                    <div class="flex flex-row overflow-x-auto scrollbar-hide flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 mb-3 mt-6 pb-2">
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.04)] text-gray-600 rounded-full font-semibold hover:border-pink-200 hover:shadow-[0_4px_12px_rgba(236,72,153,0.15)] hover:text-pink-600 transition-all duration-300 transform active:scale-95" data-val="10">10 personas</button>
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.04)] text-gray-600 rounded-full font-semibold hover:border-pink-200 hover:shadow-[0_4px_12px_rgba(236,72,153,0.15)] hover:text-pink-600 transition-all duration-300 transform active:scale-95" data-val="20">20 personas</button>
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.04)] text-gray-600 rounded-full font-semibold hover:border-pink-200 hover:shadow-[0_4px_12px_rgba(236,72,153,0.15)] hover:text-pink-600 transition-all duration-300 transform active:scale-95" data-val="30">30 personas</button>
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.04)] text-gray-600 rounded-full font-semibold hover:border-pink-200 hover:shadow-[0_4px_12px_rgba(236,72,153,0.15)] hover:text-pink-600 transition-all duration-300 transform active:scale-95" data-val="50">50 personas</button>
                                        <button type="button" class="shrink-0 cursor-pointer quick-guest-btn px-4 py-2 bg-white border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.04)] text-gray-600 rounded-full font-semibold hover:border-pink-200 hover:shadow-[0_4px_12px_rgba(236,72,153,0.15)] hover:text-pink-600 transition-all duration-300 transform active:scale-95" data-val="100">100+ personas</button>
                                    </div>
                                    <input type="number" id="guest-count" placeholder="Ej: 25 invitados" min="1"
                                        class="w-full min-h-[120px] text-center text-xl font-semibold 
                                        text-gray-700 bg-white/90 border border-gray-400/50
                                        rounded-2xl py-4 px-4 focus:outline-none focus:border-gray-400  focus:ring-2 focus:ring-gray-200 
                                        transition-all shadow-inner backdrop-blur-sm">
                                </div>
                                <!-- Options Grid -->
                                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6 mb-10 mt-14 w-full max-w-full
                                    bg-gray-200/50 px-2 py-3 rounded-3xl">
                                    <!-- Event Type -->
                                    <div class="w-full min-w-0">
                                        <label class="flex flex-row flex-nowrap items-center gap-1 text-gray-700 font-semibold mb-2 md:mb-2 text-sm md:text-base">
                                        <img src="public/icons/celebration-icon.svg" class="max-w-[28px]"> Tipo de evento (opcional)
                                        </label>
                                        <div class="flex p-1.5 bg-white rounded-full shadow-inner border border-gray-400/50 relative w-full h-12 md:h-14">
                                            <label class="flex-1 cursor-pointer relative z-10 group">
                                                <input type="radio" name="event_type" value="cumpleanos" checked class="sr-only peer">
                                                <div class="w-full max-w-[295px] h-full flex items-center justify-center text-xs md:text-sm font-semibold text-gray-500 rounded-full peer-checked:bg-pink-500 peer-checked:text-white peer-checked:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),_0_2px_4px_rgba(236,72,153,0.3)] transition-all duration-300 ease-in-out px-2 text-center leading-tight group-hover:text-pink-500 peer-checked:group-hover:text-white">
                                                    Cumpleaños
                                                </div>
                                            </label>
                                            <label class="flex-1 cursor-pointer relative z-10 group">
                                                <input type="radio" name="event_type" value="boda" class="sr-only peer">
                                                <div class="w-full max-w-[295px] h-full flex items-center justify-center text-xs md:text-sm font-semibold text-gray-500 rounded-full peer-checked:bg-pink-500 peer-checked:text-white peer-checked:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),_0_2px_4px_rgba(236,72,153,0.3)] transition-all duration-300 ease-in-out px-2 text-center leading-tight group-hover:text-pink-500 peer-checked:group-hover:text-white">Boda / evento formal</div>
                                            </label>
                                        </div>
                                    </div>                                    
                                    <!-- Portion Style -->
                                    <div class="w-full min-w-0">
                                        <label class="flex flex-row flex-nowrap items-center gap-1 text-gray-700 font-semibold mb-2 md:mb-2 text-sm md:text-base">
                                            <img src="public/icons/cake-slice.svg" class="max-w-[25px]"> Tamaño de porciones
                                        </label>
                                        <div class="flex p-1.5 bg-white rounded-full shadow-inner border border-gray-400/50 relative w-full h-12 md:h-14">
                                            <label class="flex-1 cursor-pointer relative z-10 group">
                                                <input type="radio" name="portion_style" value="normal" checked class="sr-only peer">
                                                <div class="w-full max-w-[295px] h-full flex items-center justify-center text-xs md:text-sm font-semibold text-gray-500 rounded-full peer-checked:bg-pink-500 peer-checked:text-white peer-checked:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),_0_2px_4px_rgba(236,72,153,0.3)] transition-all duration-300 ease-in-out px-2 text-center leading-tight group-hover:text-pink-500 peer-checked:group-hover:text-white">Normal</div>
                                            </label>
                                            <label class="flex-1 cursor-pointer relative z-10 group">
                                                <input type="radio" name="portion_style" value="generosa" class="sr-only peer">
                                                <div class="w-full max-w-[295px] h-full flex items-center justify-center text-xs md:text-sm font-semibold text-gray-500 rounded-full peer-checked:bg-pink-500 peer-checked:text-white peer-checked:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),_0_2px_4px_rgba(236,72,153,0.3)] transition-all duration-300 ease-in-out px-2 text-center leading-tight group-hover:text-pink-500 peer-checked:group-hover:text-white">Generoso</div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Button -->
                                <div class="bg-gray-200/50 px-2 py-3 rounded-3xl">
                                    <p class="font-semibold text-md text-gray-700 text-center pb-3">Obtén recomendaciones aquí</p>
                                    <button id="btn-calculate" class="relative group cursor-pointer w-full max-w-xl max-h-[50px] mx-auto bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-400 hover:to-pink-300
                                    text-white font-bold py-4 px-6 rounded-full shadow-[0_8px_20px_rgba(236,72,153,0.3)] 
                                    hover:shadow-[0_12px_25px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105 hover:brightness-110
                                    active:scale-95 text-lg flex justify-center items-center shrink-0 text-nowrap border border-pink-300/50">
                                        <span class="relative z-10 flex items-center justify-center">
                                            Ver resultados
                                            <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                    </button>                                
                                    <div id="calc-error" class="text-red-500 text-center mt-4 hidden font-medium">Por favor ingresa el número de invitados.</div>
                                </div>
                            </div>

                            <!-- Step 2: Results -->
                            <div id="calc-step-2" class="p-6 md:p-8 hidden opacity-0 transition-opacity duration-500 ease-in-out">
                                <div class="text-center">
                                    <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 shadow-sm">
                                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 class="text-2xl text-gray-800 font-bold mb-2">
                                        Opción recomendada para <span id="res-guests" class="font-bold text-pink-500 text-xl"></span> personas:
                                    </h3>
                                    <div class="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-2xl p-4 md:p-6 shadow-sm mb-6 relative overflow-hidden flex flex-col items-center w-full">
                                        <img src="public/images/vectors/cupcake.svg" class="w-10 h-10 md:w-12 md:h-12 mb-3 drop-shadow-sm opacity-90" alt="Cake Icon" />
                                        <p class="text-gray-500 font-semibold uppercase tracking-wide text-[10px] md:text-xs mb-2">Pastel de</p>
                                        <p id="res-lbs" class="text-2xl min-[375px]:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center leading-tight"></p>
                                        <p id="res-range" class="text-gray-600 text-xs md:text-sm bg-white/80 inline-block px-3 md:px-4 py-1.5 rounded-full border border-gray-100 shadow-sm text-center leading-tight mx-auto max-w-[95%]"></p>
                                    </div>
                                    <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 text-left flex items-start shadow-sm">
                                        <svg class="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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

        const updateChips = (val) => {
            quickBtns.forEach(b => {
                if (b.dataset.val === val) {
                    b.classList.remove('bg-white', 'text-gray-600', 'shadow-[0_4px_10px_rgba(0,0,0,0.04)]', 'border-gray-100');
                    b.classList.add('bg-pink-50', 'text-pink-600', 'border-pink-300', 'shadow-[inset_0_3px_6px_rgba(236,72,153,0.15)]');
                } else {
                    b.classList.remove('bg-pink-50', 'text-pink-600', 'border-pink-300', 'shadow-[inset_0_3px_6px_rgba(236,72,153,0.15)]');
                    b.classList.add('bg-white', 'text-gray-600', 'shadow-[0_4px_10px_rgba(0,0,0,0.04)]', 'border-gray-100');
                }
            });
        };

        quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                countInput.value = btn.dataset.val;
                updateChips(btn.dataset.val);
                errorMsg.classList.add('hidden');
            });
        });

        countInput.addEventListener('input', () => {
            if (countInput.value > 0) {
                errorMsg.classList.add('hidden');
            }
            updateChips(countInput.value);
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

class SiteCatalog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section class="catalog flex justify-center items-center bg-[#f2eee8] relative"
        id="catalog">
        
        <!-- Decorative background elements -->
        <div class="absolute top-0 right-0 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-20 left-0 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="container py-16 md:py-24 relative z-10">
            <div class="catalog-text mb-12 md:mb-20 text-center max-w-3xl mx-auto px-4">
                <span class="text-pink-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Nuestra Selección</span>
                <h2 data-aos="fade-up"
                    class="text-[#2D1E1E] text-4xl md:text-5xl lg:text-7xl ubuntu-font-bold title leading-tight">
                    Postres que crean <span class="text-pink-500 italic">historias</span> inolvidables
                </h2>
                <div class="w-24 h-1.5 bg-yellow-400 mx-auto mt-8 rounded-full opacity-60"></div>
            </div>

            <div class="w-full mx-auto py-4 px-4 sm:px-0" x-data="{
                      activeCategory: 'pasteles',
                      products: ALL_PRODUCTS,
                      modalData: {},
                      isModalOpen: false,
                      get filteredProducts() {
                          return this.products ? this.products.filter(product => product.category === this.activeCategory) : [];
                      },
                      isContentVisible: false,
                      initContent() {
                         setTimeout(() => {
                            this.isContentVisible = true;
                         }, 80);
                      },
                      showProductModal(product) {
                          this.modalData = product;
                          const WHATSAPPURL = window.sendWhatsappMessage ? window.sendWhatsappMessage({ type: 'product', productName: product.title }) : '#';
                          document.getElementById('whatsapp-link').href = WHATSAPPURL;
                          this.isModalOpen = true;
                          this.$refs.productsModal.showModal();
                          document.body.classList.add('no-scroll');
                          document.documentElement.classList.add('no-scroll');
                      },
                      closeModal() {
                          this.$refs.productsModal.close();
                          this.isModalOpen = false;
                          document.body.classList.remove('no-scroll');
                          document.documentElement.classList.remove('no-scroll');
                      }
                }" x-init="initContent()">
                    
                <!-- Category Selector (Horizontal scroll for mobile) -->
                <div id="category-selector" data-aos="fade-up" class="flex flex-row items-center gap-4 justify-start
                                     lg:justify-center md:justify-center
                                     overflow-x-auto p-4 md:p-2
                                     scrollbar-hide
                                     w-full max-w-full md:max-w-fit mx-auto
                                     mb-10 md:mb-20 snap-x snap-mandatory perspective-1000">
                    
                    <template x-for="cat in [
                        {id: 'pasteles', label: 'Pasteles', icon: 'cake-for-filter.svg'},
                        {id: 'postres', label: 'Postres', icon: 'dessert-for-filter.svg'},
                        {id: 'mesa-dulces', label: 'Mesa Dulce', icon: 'birdthday-for-filter.svg'},
                        {id: 'temporada', label: 'Ponches', icon: 'tree-season.svg'}
                    ]">
                        <button @click="activeCategory = cat.id" 
                                :class="activeCategory === cat.id ? 'bg-pink-500 text-white shadow-xl scale-105' : 'bg-white text-stone-600 hover:bg-pink-50 border-stone-100'"
                                class="category-btn flex items-center gap-3 px-8 py-4 md:px-6 md:py-3 rounded-[1.25rem] whitespace-nowrap transition-all duration-500 font-bold border shadow-sm snap-center">
                            <img :src="'public/icons/' + cat.icon" class="w-6 h-6 transition-all" :class="activeCategory === cat.id ? 'brightness-0 invert' : ''" alt="">
                            <span x-text="cat.label" class="text-base"></span>
                        </button>
                    </template>
                </div>

                <!-- Products Grid -->
                <div id="product-slider-container"
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-2"
                    x-show="isContentVisible" 
                    x-transition:enter="transition ease-out duration-700"
                    x-transition:enter-start="opacity-0 translate-y-10"
                    x-transition:enter-end="opacity-100 translate-y-0">
                    
                    <template x-for="product in filteredProducts" :key="product.title">
                        <div @click="showProductModal(product)" 
                             class="group cursor-pointer bg-white rounded-[2.5rem] p-5 border border-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 transform-gpu bg-blend-normal">
                            
                            <!-- Image Container -->
                            <div class="relative aspect-square overflow-hidden rounded-[2rem] mb-6">
                                <img :src="product.image" :alt="product.title" 
                                     class="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110">
                                <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-stone-50">
                                    <span class="text-pink-600 font-bold text-xs" x-text="'RD$' + product.price_from"></span>
                                </div>
                            </div>

                            <div class="px-2">
                                <h3 class="text-[#2D1E1E] font-bold text-xl mb-2 ubuntu-font-bold tracking-tight group-hover:text-pink-500 transition-colors duration-300" x-text="product.title"></h3>
                                <p class="text-stone-500 text-sm mb-6 line-clamp-2 leading-relaxed" x-text="product.comments || 'Un toque único de sabor artesanal.'"></p>
                                
                                <div class="flex items-center justify-between">
                                    <span class="text-pink-600 font-bold text-[10px] uppercase tracking-[0.2em]">Ver detalles</span>
                                    <div class="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                        <svg class="w-5 h-5 transition-transform duration-500 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <!-- Calculator Promo Banner (Fluent Connection) -->
                <div data-aos="zoom-in" class="mt-20 md:mt-32 max-w-5xl mx-auto">
                    <div class="bg-gradient-to-r from-[#2D1E1E] to-[#3d2929] rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-white/10">
                        <!-- Decorative glow -->
                        <div class="absolute -top-24 -left-24 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
                        <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
                        
                        <div class="relative z-10 flex-grow text-center md:text-left">
                            <h4 class="text-white text-3xl md:text-4xl font-bold mb-4 ubuntu-font-bold">¿Dudas con el tamaño?</h4>
                            <p class="text-stone-300 text-lg md:text-xl">Usa nuestra herramienta inteligente y calcula las porciones exactas para tu evento.</p>
                        </div>
                        
                        <div class="relative z-10 shrink-0">
                            <a href="#calculadora-de-porciones" 
                               class="inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-500 text-stone-900 font-bold py-4 px-10 rounded-2xl shadow-xl shadow-yellow-400/20 transition-all hover:scale-105 active:scale-95 text-lg">
                                <img src="public/icons/cake-slice.svg" class="w-6 h-6" alt="">
                                Probar Calculadora
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Product Modal -->
                <dialog id="products-modal" x-ref="productsModal"
                    class="scrollbar-hide p-0 m-0 rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] backdrop:bg-black/80 w-full max-w-full h-[98vh] mt-auto overflow-hidden border-none"
                    @click.outside="closeModal()" x-show="isModalOpen" 
                    x-transition:enter="transition ease-out duration-500"
                    x-transition:enter-start="translate-y-full" 
                    x-transition:enter-end="translate-y-0"
                    x-transition:leave="transition ease-in duration-400" 
                    x-transition:leave-start="translate-y-0"
                    x-transition:leave-end="translate-y-full">
                    
                    <div class="flex flex-col h-full bg-white relative w-full" @click.stop>
                        <button @click="closeModal()"
                            class="absolute top-6 right-6 text-stone-500 hover:text-stone-900 transition-all z-50 bg-white/90 backdrop-blur-md shadow-md rounded-full w-12 h-12 flex items-center justify-center border border-stone-200">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                        <div class="w-16 h-1.5 bg-stone-200 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>

                        <div class="flex flex-col md:flex-row h-full overflow-hidden w-full">
                            <div class="w-full md:w-[38%] bg-stone-50 flex items-center justify-center p-6 md:p-10 shrink-0 h-[38vh] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-stone-200">
                                <div class="w-full h-full relative rounded-3xl overflow-hidden shadow-sm border border-stone-200 bg-white flex items-center justify-center group">
                                    <img id="modal-product-image" :src="modalData.image || ''"
                                        :alt="modalData.title"
                                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                                </div>
                            </div>

                            <div class="w-full md:flex-grow flex flex-col h-full overflow-hidden relative bg-white">
                                <div class="flex-grow overflow-y-auto p-6 md:p-14 lg:p-20 scrollbar-hide pb-40">
                                    <h2 class="text-3xl md:text-5xl font-bold text-[#2D1E1E] mb-5 leading-[1.1] tracking-tight ubuntu-font-bold" x-text="modalData.title"></h2>
                                    <div class="price mb-8">
                                        <p class="text-xl font-bold text-stone-600 mb-4 tracking-tight">Variantes y Precios:</p>
                                        <ul class="flex justify-start items-center flex-wrap gap-3">
                                            <template x-for="price in modalData.prices">
                                                <li x-text="price"
                                                    class="px-5 py-2.5 bg-pink-50 font-bold text-pink-700 rounded-full text-xs md:text-sm border border-pink-200 shadow-sm transition-transform hover:-translate-y-1 hover:bg-pink-100">
                                                </li>
                                            </template>
                                        </ul>

                                        <div x-show="modalData.comments" class="mt-6">
                                            <div class="bg-yellow-50 py-3 px-6 rounded-2xl border border-yellow-200 shadow-sm inline-flex items-center gap-3 w-full">
                                                <svg class="w-6 h-6 text-yellow-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                </svg>
                                                <p class="text-sm font-semibold italic text-stone-700 leading-relaxed" x-text="modalData.comments"></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full h-px bg-stone-100 my-8"></div>

                                    <div class="mb-4">
                                        <h3 class="text-2xl font-bold text-[#2D1E1E] mb-6 ubuntu-font-bold">Personaliza tu orden</h3>
                                        
                                        <template x-if="modalData.fillingFlavors && modalData.fillingFlavors.included && modalData.fillingFlavors.included.length > 0">
                                            <div class="mb-10">
                                                <p class="text-[11px] font-bold text-stone-500 uppercase mb-4 tracking-widest leading-none">Rellenos incluidos</p>
                                                <div class="flex flex-wrap gap-3">
                                                    <template x-for="flavor in modalData.fillingFlavors.included">
                                                        <span class="px-5 py-2.5 bg-stone-50 border border-stone-200 font-semibold text-stone-700 rounded-xl text-[11px] md:text-sm"
                                                            x-text="flavor"></span>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>

                                        <template x-if="modalData.fillingFlavors && modalData.fillingFlavors.additional && modalData.fillingFlavors.additional.length > 0">
                                            <div>
                                                <p class="text-[11px] font-bold text-stone-500 uppercase mb-4 tracking-widest leading-none">Opciones adicionales</p>
                                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <template x-for="item in modalData.fillingFlavors.additional">
                                                        <div class="flex justify-between items-center p-4 bg-white border border-stone-200 rounded-2xl transition-all hover:border-pink-300 group hover:shadow-md">
                                                            <span class="text-stone-800 font-bold text-sm" x-text="item.flavor"></span>
                                                            <span class="bg-stone-50 px-3 py-1.5 rounded-xl font-bold text-stone-600 text-xs border border-stone-200 group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors"
                                                                x-text="'+RD$' + item.price"></span>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>

                                <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-white border-t border-stone-50 flex justify-center z-10 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]">
                                    <a id="whatsapp-link" target="_blank" @click.stop 
                                        class="flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white shadow-xl shadow-pink-500/30 font-bold py-4 px-10 rounded-2xl transition-all duration-300 w-full max-w-2xl transform hover:-translate-y-1">
                                        <img src="./public/icons/whatsapp-white.png" alt="WhatsApp" class="w-7 h-7 mr-4">
                                        <span class="text-lg md:text-xl uppercase tracking-wider">Hacer Pedido</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-catalog', SiteCatalog);


class SiteCatalog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section class="catalog flex justify-center items-center"
        id="catalog">
        <div class="container py-4">
            <div class="catalog-text mb-10 text-center">
                <h2 data-aos="fade-up"
                    class="text-gray-800 text-4xl md:text-4xl sm:text-3xl xs:text-3xl lg:text-5xl xl:text-5xl ubuntu-font-bold title">
                    Nuestros productos <span class="text-yellow-500">100% artesanales</span>
                </h2>
            </div>
            <div class="w-full mx-auto py-4" x-data="{
                      activeCategory: 'pasteles',
                      products: ALL_PRODUCTS,
                      modalData: {},
                      isModalOpen: false,
                      // Si el array de productos aún no está cargado, devuelve un array vacío
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
                <div id="category-selector" data-aos="fade-up" data-aos-delay="100" class="flex flex-row gap-2 md:gap-0 justify-start
                                     lg:justify-center md:justify-center
                                     sm:overflow-x-visible overflow-x-auto p-3
                                     scrollbar-hide
                                     w-full md:max-w-fit mx-auto
                                     rounded-none shadow-none mb-6 md:mb-10
                                     lg:bg-white lg:rounded-full lg:shadow-lg
                                     md:bg-white md:rounded-full md:shadow-lg
                                     sm:bg-white sm:rounded-full sm:shadow-lg">
                    <button data-category="pasteles" @click="activeCategory = 'pasteles'" :class="{
                                   'bg-yellow-200 text-gray-800 border-transparent shadow-md md:ring-2 md:ring-yellow-400 md:ring-opacity-80 md:bg-white md:text-gray-800 md:shadow-lg': activeCategory === 'pasteles',
                                   'bg-white text-gray-700 border-white shadow-sm md:bg-transparent md:text-gray-600 md:border-transparent md:shadow-none': activeCategory !== 'pasteles'
                               }" class="category-btn flex flex-row justify-center items-center md:flex-row lg:flex-row px-4 py-1.5 
                                      md:px-6 md:py-2 lg:px-6 lg:py-2 rounded-full whitespace-nowrap border-2
                                      transition duration-200">
                        <img src="public/icons/cake-for-filter.svg" class="w-5 h-5 md:w-6 md:h-6 md:pr-1" alt="">
                        <span class="text-[14px] md:text-base font-bold">Pasteles</span>
                    </button>
                    <button data-category="postres" @click="activeCategory = 'postres'" :class="{
                                   'bg-yellow-200 text-gray-800 border-transparent shadow-md md:ring-2 md:ring-yellow-400 md:ring-opacity-80 md:bg-white md:text-gray-800 md:shadow-lg': activeCategory === 'postres',
                                   'bg-white text-gray-700 border-white shadow-sm md:bg-transparent md:text-gray-600 md:border-transparent md:shadow-none': activeCategory !== 'postres'
                               }" class="category-btn flex flex-row justify-center items-center md:flex-row lg:flex-row px-4 py-1.5 
                                      md:px-6 md:py-2 lg:px-6 lg:py-2 rounded-full whitespace-nowrap border-2
                                      transition duration-200">
                        <img src="public/icons/dessert-for-filter.svg" class="w-5 h-5 md:w-6 md:h-6 pr-1" alt="">
                        <span class="text-[14px] md:text-base font-bold">Postres</span>
                    </button>
                    <button data-category="mesa-dulces" @click="activeCategory = 'mesa-dulces'" :class="{
                                   'bg-yellow-200 text-gray-800 border-transparent shadow-md md:ring-2 md:ring-yellow-400 md:ring-opacity-80 md:bg-white md:text-gray-800 md:shadow-lg': activeCategory === 'mesa-dulces',
                                   'bg-white text-gray-700 border-white shadow-sm md:bg-transparent md:text-gray-600 md:border-transparent md:shadow-none': activeCategory !== 'mesa-dulces'
                               }" class="category-btn flex flex-row justify-center items-center md:flex-row lg:flex-row px-4 py-1.5 
                                      md:px-6 md:py-2 lg:px-6 lg:py-2 rounded-full whitespace-nowrap border-2
                                      transition duration-200">
                        <img src="public/icons/birdthday-for-filter.svg" class="w-5 h-5 md:w-6 md:h-6 pr-1" alt="">
                        <span class="text-[14px] md:text-base font-bold">Mesa de dulces</span>
                    </button>
                    <button data-category="temporada" @click="activeCategory = 'temporada'" :class="{
                                   'bg-yellow-200 text-gray-800 border-transparent shadow-md md:ring-2 md:ring-yellow-400 md:ring-opacity-80 md:bg-white md:text-gray-800 md:shadow-lg': activeCategory === 'temporada',
                                   'bg-white text-gray-700 border-white shadow-sm md:bg-transparent md:text-gray-600 md:border-transparent md:shadow-none': activeCategory !== 'temporada'
                               }" class="category-btn flex flex-row justify-center items-center md:flex-row lg:flex-row px-4 py-1.5 
                                      md:px-6 md:py-2 lg:px-6 lg:py-2 rounded-full whitespace-nowrap border-2
                                      transition duration-200">
                        <img src="public/icons/tree-season.svg" class="w-5 h-5 md:w-6 md:h-6 pr-2" alt="">
                        <span class="text-[14px] md:text-base font-bold">Ponches</span>
                    </button>
                </div>
                <!-- Línea separadora solo en móviles -->
                <div class="block sm:hidden w-[92%] mx-auto border-t border-gray-400 my-6 opacity-30"></div>
                <div id="product-slider-container"
                    class="slider-container ransition-transform slide-in flex lg:flex-wrap md:flex-wrap w-full overflow-x-auto scrollbar-hide"
                    x-show="isContentVisible" x-transition:enter="transition ease-in-out duration-500"
                    x-transition:enter-start="opacity-0 translate-y-10"
                    x-transition:enter-end="opacity-100 translate-y-0" style="display: none !important;">
                    <template x-for="product in filteredProducts" :key="product.title">
                        <div @click="showProductModal(product)" class="cursor-pointer w-full mt-3 mb-3 sm:w-1/2 md:w-1/2 lg:w-1/4 px-3 flex justify-center"
                            data-aos="fade-up">
                            <div class="img-box bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500
                                overflow-hidden max-w-[310px] flex flex-col border border-gray-300">
                                
                                <!-- Contenedor de Imagen (Like Concept #1) -->
                                <div class="img-container overflow-hidden p-3 pb-0">
                                    <img :src="product.image" :alt="product.alt || product.title" 
                                        class="object-cover w-full h-56 rounded-[1.5rem] transition-transform duration-500 hover:scale-110">
                                </div>

                                <!-- Contenido de la Card -->
                                <div class="p-5 pt-4 flex flex-col flex-grow">
                                    <h3 class="lower-case text-gray-800 font-bold text-xl leading-tight mb-2 ubuntu-font-bold tracking-tight"
                                        x-text="product.title">
                                    </h3>
                                    
                                    <!-- Descripción secundaria (Comments) -->
                                    <p class="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow" x-text="product.comments || 'Un toque único de sabor artesanal.'"></p>

                                    <!-- Footer de la Card (Segmentado: Precio a la izquierda, Botón a la derecha) -->
                                    <div class="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                                        <div class="flex flex-col">
                                            <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Desde</span>
                                            <span x-show="product.price_from" class="text-gray-900 font-bold text-lg leading-none">
                                                RD$<span x-text="product.price_from.toLocaleString('es-DO')"></span>
                                            </span>
                                        </div>

                                        <button @click.stop="showProductModal(product)"
                                            class="cursor-pointer w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-2xl hover:bg-pink-600 hover:shadow-lg transition-all duration-300">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div x-show="filteredProducts.length === 0" class="w-full text-center py-10 text-gray-700 text-2xl">
                        No hay productos en esta categoría.
                    </div>
                </div>
                <!-- Modal Rediseñado: Pantalla Semi-Completa Real (Sin márgenes laterales) -->
                <dialog id="products-modal" x-ref="productsModal"
                    class="scrollbar-hide p-0 m-0 rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] backdrop:bg-black/80 w-full max-w-full h-[98vh] mt-auto overflow-hidden border-none"
                    @click.outside="closeModal()" x-show="isModalOpen" 
                    x-transition:enter="transition ease-out duration-500"
                    x-transition:enter-start="translate-y-full" 
                    x-transition:enter-end="translate-y-0"
                    x-transition:leave="transition ease-in duration-400" 
                    x-transition:leave-start="translate-y-0"
                    x-transition:leave-end="translate-y-full" 
                    style="display: none !important;">
                    
                    <div class="flex flex-col h-full bg-white relative w-full" @click.stop>
                        <!-- Botón de cierre (Refinado) -->
                        <button @click="closeModal()"
                            class="absolute top-6 right-6 text-gray-500 hover:text-gray-900 transition-all z-50 bg-white/80 backdrop-blur-md shadow-lg rounded-full w-12 h-12 flex items-center justify-center border border-gray-100/50">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                        <!-- Pull handle (Móvil) -->
                        <div class="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>

                        <div class="flex flex-col md:flex-row h-full overflow-hidden w-full">
                            <!-- LADO IZQUIERDO: Imagen (Respetando proporciones con bordes redondeados) -->
                            <div class="w-full md:w-[38%] bg-gray-50 flex items-center justify-center p-6 md:p-10 shrink-0 h-[38vh] md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">
                                <img id="modal-product-image" :src="modalData.image || ''"
                                    :alt="modalData.alt || modalData.title || 'Imagen del producto'"
                                    class="w-full h-full object-contain drop-shadow-xl transition-transform duration-700 rounded-3xl">
                            </div>

                            <!-- LADO DERECHO: Información -->
                            <div class="w-full md:flex-grow flex flex-col h-full overflow-hidden relative bg-white">
                                <div class="flex-grow overflow-y-auto p-6 md:p-14 lg:p-20 scrollbar-hide pb-40">
                                    <h2 id="modal-product-title" class="text-3xl md:text-5xl font-bold text-gray-800 mb-7 leading-[1.1] tracking-tight"
                                        x-text="modalData.title || 'Información no disponible'"></h2>

                                    <div class="price mb-10">
                                        <p class="text-2xl font-bold text-gray-700 mb-8 tracking-tighter">Variantes y Precios:</p>
                                        <ul id="modal-product-price" class="flex justify-start items-center flex-wrap gap-3">
                                            <template x-for="(price, index) in modalData.prices">
                                                <li x-text="price"
                                                    class="px-5 py-2.5 bg-green-200 font-bold text-gray-900 rounded-full text-xs md:text-base border border-green-300 shadow-sm transition-transform hover:translate-y-[-2px]">
                                                </li>
                                            </template>
                                        </ul>

                                        <!-- Nota del Chef -->
                                        <div x-show="modalData.comments" class="mt-8">
                                            <div class="bg-yellow-400 py-4 px-6 rounded-2xl shadow-sm inline-flex items-center gap-3 max-w-full">
                                                <svg class="w-5 h-5 text-gray-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                </svg>
                                                <p id="product-comment" class="text-xs md:text-base font-bold italic text-gray-900" 
                                                    x-text="modalData.comments"></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-full h-px bg-gray-100 my-10"></div>

                                    <!-- Personalización -->
                                    <div class="mb-4">
                                        <h3 class="text-2xl font-bold text-gray-700 mb-6">Personaliza tu orden</h3>
                                        
                                        <!-- Incluidos (Desplazamiento horizontal en móvil/tablet) -->
                                        <template x-if="modalData.fillingFlavors && modalData.fillingFlavors.included && modalData.fillingFlavors.included.length > 0">
                                            <div class="mb-10">
                                                <p class="text-sm font-black text-gray-700 mb-3 tracking-widest leading-none">Rellenos incluidos</p>
                                                <div class="flex flex-nowrap lg:flex-wrap overflow-x-scroll lg:overflow-x-visible gap-3 pb-3 scrollbar-hide snap-x snap-mandatory lg:snap-none -mx-2 px-2">
                                                    <template x-for="flavor in modalData.fillingFlavors.included">
                                                        <span class="px-5 py-2.5 bg-yellow-300 border border-yellow-400 font-bold text-gray-900 rounded-full text-[11px] md:text-sm whitespace-nowrap snap-start shadow-sm"
                                                            x-text="flavor"></span>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>

                                        <!-- Adicionales (Desplazamiento horizontal en móvil/tablet) -->
                                        <template x-if="modalData.fillingFlavors && modalData.fillingFlavors.additional && modalData.fillingFlavors.additional.length > 0">
                                            <div>
                                                <p class="text-sm font-black text-gray-700 mb-5 tracking-widest leading-none">Opciones adicionales</p>
                                                <div class="flex lg:grid lg:grid-cols-2 overflow-x-scroll lg:overflow-x-visible flex-nowrap lg:flex-wrap gap-4 pb-6 scrollbar-hide snap-x snap-mandatory lg:snap-none -mx-2 px-2">
                                                    <template x-for="item in modalData.fillingFlavors.additional">
                                                        <div class="flex-none w-[80%] md:w-[45%] lg:w-full snap-start flex justify-between items-center p-5 bg-gray-50 border border-gray-100 rounded-[1.25rem] transition-colors hover:border-pink-200 group shadow-sm">
                                                            <span class="text-gray-900 font-bold text-sm" x-text="item.flavor"></span>
                                                            <span class="bg-white px-3 py-1.5 rounded-xl shadow-sm font-black text-gray-900 text-[10px] md:text-xs border border-gray-100 group-hover:text-pink-600 transition-colors"
                                                                x-text="'+RD$' + item.price"></span>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>

                                <!-- Footer Sticky -->
                                <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-white border-t border-gray-50 flex justify-center z-10">
                                    <a id="whatsapp-link" target="_blank" @click.stop 
                                        class="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-[1.5rem] transition-all duration-300 w-full max-w-2xl text-center shadow-2xl hover:shadow-green-200/50 transform hover:-translate-y-1">
                                        <img src="./public/icons/whatsapp-white.png" alt="WhatsApp" class="w-7 h-7 mr-4">
                                        <span class="text-lg md:text-xl">Pídelo aquí</span>
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

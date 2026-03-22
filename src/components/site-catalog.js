class SiteCatalog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section class="catalog flex justify-center items-center bg-[url('public/images/desserts-patterns.png')] bg-repeat"
        id="catalog">
        <div class="container py-4">
            <div class="catalog-text mb-10 text-center">
                <h2 data-aos="fade-up"
                    class="text-gray-700 text-4xl md:text-4xl sm:text-3xl xs:text-3xl lg:text-5xl xl:text-5xl ubuntu-font-bold title">
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
                            <div class="img-box bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
                                overflow-hidden max-w-[295px] bg-gradient-to-r from-pink-50 to-white">
                                <div class="img-container overflow-hidden rounded-t-2xl">
                                    <img :src="product.image" :alt="product.alt || product.title"
                                        class="object-cover w-full h-48 transition-transform duration-300 hover:scale-105">
                                </div>
                                <div class="p-6 text-left min-h-[150px]">
                                    <p class="lower-case text-gray-700 font-bold text-xl transition duration-300 block mb-1 ubuntu-font-bold text"
                                        x-text="product.title">
                                    </p>
                                    <span x-show="product.price_from"
                                        class="inline-flex items-center gap-1 mt-1 mb-2 px-2 py-1 bg-pink-50 text-pink-600 text-sm font-bold rounded-full">
                                        <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-4-6h8"/>
                                        </svg>
                                        Desde RD$<span x-text="product.price_from ? product.price_from.toLocaleString('es-DO') : ''"></span>
                                    </span>
                                    <button @click="showProductModal(product)"
                                        class="cursor-pointer w-full max-w-[250px] mx-auto items-center justify-center shadow-2xl mt-3 bg-yellow-300 hover:bg-yellow-400 text-sm text-black-800 
                                        font-semibold px-4 py-2 rounded-full transition duration-200 flex items-center gap-1">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M5 15a1 1 0 001.707.707L15 7.414V13a1 1 0 102 0V5a1 1 0 00-1-1h-8a1 1 0 100 2h5.586L5.707 14.293A1 1 0 005 15z">
                                            </path>
                                        </svg>
                                        Cotizar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div x-show="filteredProducts.length === 0" class="w-full text-center py-10 text-gray-700 text-2xl">
                        No hay productos en esta categoría.
                    </div>
                </div>
                <dialog id="products-modal" x-ref="productsModal"
                    class="scrollbar-hide p-0 rounded-2xl shadow-3xl backdrop:bg-black/80 w-11/12 md:max-w-3xl !m-auto overflow-hidden"
                    @click.outside="closeModal()" x-show="isModalOpen" x-transition:enter="ease-in-out duration-200"
                    x-transition:enter-start="opacity-0 scale-90" x-transition:enter-end="opacity-100 scale-100"
                    x-transition:leave="ease-in-out duration-200" x-transition:leave-start="opacity-100 scale-100"
                    x-transition:leave-end="opacity-0 scale-90" style="display: none !important;">
                    <button @click="closeModal()"
                        class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-light leading-none z-50 bg-white/50 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm">
                        &times;
                    </button>
                    <div class="flex flex-col bg-white rounded-2xl overflow-hidden max-h-[95vh] w-full relative"
                        @click.stop>
                        <div
                            class="w-full relative bg-pink-400/40 flex items-center justify-center border-b border-gray-100 shrink-0">
                            <img id="modal-product-image" :src="modalData.image || ''"
                                :alt="modalData.alt || modalData.title || 'Imagen del producto'"
                                class="w-full h-auto max-h-[350px] object-contain">
                        </div>
                        <div class="w-full p-6 md:p-10 relative overflow-y-auto flex flex-col scrollbar-hide">
                            <h2 id="modal-product-title" class="text-2xl font-bold text-pink-600 mb-3"
                                x-text="modalData.title || 'Información no disponible'"></h2>
                            <div class="price mb-3">
                                <p class="text-md font-bold text-gray-800 mb-1">Precios:</p>
                                <ul id="modal-product-price"
                                    class="flex justify-start items-center flex-wrap gap-x-6 space-y-1 mb-3">
                                    <template x-for="(price, index) in modalData.prices">
                                        <li x-text="price || 'Precios no disponibles'"
                                            class="px-2 py-1 bg-green-200 font-semibold text-gray-800 rounded-full text-sm">
                                            <!--:class="{ 'col-span-1': index === (modalData.prices.length - 1) }"-->
                                        </li>
                                    </template>
                                    <li x-show="!modalData.prices || modalData.prices.length === 0"
                                        class="italic col-span-2">
                                        Precios no disponibles para este producto.
                                    </li>
                                </ul>
                                <p id="product-comment" class="text-sm font-semibold italic bg-yellow-400 mt-4 py-2 px-2 w-[90%] md:[65%] lg:w-[70%] 
                                rounded-xl" x-text="modalData.comments"></p>
                            </div>
                            <span class="block w-full h-[2px] bg-pink-400 mx-auto my-5"></span>
                            <div class="mb-2">
                                <h3 class="text-lg font-bold text-gray-800 mb-3">
                                    Sabores de relleno
                                </h3>
                                <template
                                    x-if="modalData.fillingFlavors && modalData.fillingFlavors.included && modalData.fillingFlavors.included.length > 0">
                                    <div class="mb-5">
                                        <p class="text-sm font-bold text-gray-700 mb-2">Incluidos sin costo
                                            adicional:</p>
                                        <div class="flex flex-nowrap overflow-x-auto md:flex-wrap gap-2 scrollbar-hide">
                                            <template x-for="flavor in modalData.fillingFlavors.included">
                                                <span
                                                    class="px-3 py-1 bg-yellow-300 border border-yellow-500/50 font-bold text-gray-900 rounded-full text-sm transition-transform hover:scale-105 cursor-default whitespace-nowrap"
                                                    x-text="flavor"></span>
                                            </template>
                                        </div>
                                    </div>
                                </template>
                                <template
                                    x-if="modalData.fillingFlavors && modalData.fillingFlavors.additional && modalData.fillingFlavors.additional.length > 0">
                                    <div class="mb-5">
                                        <p class="text-sm font-bold text-gray-700 mb-2">Adicionales (costo extra):
                                        </p>
                                        <div
                                            class="grid grid-rows-1 grid-flow-col md:grid-rows-none md:grid-cols-2 md:grid-flow-row gap-3 text-sm overflow-x-auto md:overflow-x-visible pb-2 scrollbar-hide snap-x snap-mandatory">
                                            <template x-for="item in modalData.fillingFlavors.additional">
                                                <div
                                                    class="flex justify-between items-center p-3 mb-3 bg-gray-50/50 border border-gray-200 rounded-xl transition-colors hover:border-pink-300 min-w-[240px] md:min-w-0 snap-start">
                                                    <span class="text-gray-900 font-bold" x-text="item.flavor"></span>
                                                    <span
                                                        class="bg-white px-2 py-1 rounded-lg shadow-sm font-bold text-gray-800 text-xs border border-gray-200"
                                                        x-text="'+RD$' + item.price"></span>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </template>
                                <div x-show="!modalData.fillingFlavors || (!modalData.fillingFlavors.included || modalData.fillingFlavors.included.length === 0) && (!modalData.fillingFlavors.additional || modalData.fillingFlavors.additional.length === 0)"
                                    class="italic text-gray-500 text-sm">
                                    Sin sabores de relleno específicos.
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Whatsapp modal button -->
                    <div class="whatsapp-modal-btn-container sticky bottom-0 bg-white/95 backdrop-blur-sm pt-2 pb-2 mt-auto z-10
                        max-w-full flex justify-center">
                        <a id="whatsapp-link" target="_blank" @click.stop class="flex justify-center items-center bg-green-600 
                        hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full transition duration-300 w-full max-w-[85%] md:max-w-[55%] 
                        text-center block">
                            <img src="./public/icons/whatsapp-white.png"
                                alt="Icono de WhatsApp que abre un chat para realizar un pedido. Texto visible: Cotiza ahora. Tono amigable y cercano."
                                class="w-6 h-6 mr-2" loading="lazy">
                            Cotiza aquí
                        </a>
                    </div>
                    <!-- End Whatsapp modal button -->
                </dialog>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('site-catalog', SiteCatalog);

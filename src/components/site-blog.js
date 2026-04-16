class SiteBlog extends HTMLElement {
    constructor() {
        super();
        // Headless CMS Mock Data Structure
        this.articles = [
            {
                id: 1,
                isFeatured: true,
                title: "Cómo mantener la suavidad de tus pasteles por más tiempo",
                summary: "El calor puede ser el enemigo de tus pasteles, pero con nuestros consejos podrás mantenerlos suaves y deliciosos por más tiempo.",
                image: "https://images.pexels.com/photos/34227787/pexels-photo-34227787.jpeg",
                category: "Tips & Trucos",
                date: "Nov 12, 2026",
                readTime: "5 minutos"
            },
            {
                id: 2,
                isFeatured: false,
                title: "5 sabores de bizcocho dominicano que marcan tendencia en bodas",
                summary: "Olvídate de la vainilla tradicional. Las bodas de este año demandan rellenos exóticos como crema de chinola, dulce de leche con nueces y más...",
                image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Bodas",
                date: "Oct 28, 2026",
                readTime: "3 minutos",
                badge: "Popular"
            },
            {
                id: 3,
                isFeatured: false,
                title: "Galletas con trozos de chocolate: El equilibrio entre crujiente y suave",
                summary: "No todas las galletas son iguales. Descubre por qué dejar reposar tu masa durante 24 horas en la nevera lo cambia absolutamente todo.",
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Recetas",
                date: "Oct 15, 2026",
                readTime: "6 minutos",
                badge: "Súper fácil"
            },
            {
                id: 4,
                isFeatured: false,
                title: "El arte del empaque: Cómo presentar dulces como regalos premium",
                summary: "De la caja al listón, la experiencia de regalar un postre comienza antes del primer bocado. Conoce nuestras combinaciones favoritas para enamorar.",
                image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                category: "Empaque",
                date: "Sep 30, 2026",
                readTime: "4 minutos"
            },
            {
                id: 5,
                isFeatured: false,
                title: "Tips para elegir el bizcocho perfecto para tu boda",
                summary: "Te enseñamos como elegir el bizcocho perfecto para tu boda.",
                image: "https://images.pexels.com/photos/30350268/pexels-photo-30350268.jpeg",
                category: "Bodas",
                date: "Sep 30, 2026",
                readTime: "4 minutos"
            }
        ];
    }

    connectedCallback() {
        const featured = this.articles.find(a => a.isFeatured);
        const gridArticles = this.articles.filter(a => !a.isFeatured);

        this.innerHTML = `
        <div class="bg-stone-50 min-h-screen pb-16 ubuntu-font-medium text-stone-800">
            <!-- Full Width Hero -->
            <div class="w-full relative bg-[#FFF] mt-0 mb-12 min-h-[500px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
                 <div class="absolute inset-0 w-full h-full flex flex-col md:flex-row">                      
                      <div class="w-full h-full relative z-0">
                           <img src="public/images/blog/dess-blog.webp" 
                           class="w-full h-full object-cover object-center lg:object-right bg-fixed" alt="Ingredientes de pastelería">
                      </div>
                 </div>                 
                 <!-- Content -->
                 <div class="relative z-20 max-w-6xl w-full mx-auto px-6 lg:px-8 pt-32 pb-16 md:py-24 flex flex-col md:flex-row items-center">
                     <div class="md:w-1/2 md:pr-12 lg:pr-20">
                         <!--<div class="flex items-center gap-4 mb-2">
                             <span class="text-xs font-bold uppercase tracking-widest text-pink-500">Blog oficial</span>                             
                         </div>-->
                         <h1 class="text-5xl lg:text-7xl font-semibold text-gray-900 mb-6 tracking-tight leading-[1.1]">El blog de Postres Perla</span></h1>
                         <p class="text-stone-600 text-lg md:text-xl max-w-md md:mb-10 leading-relaxed font-light">Inspiración, tips y recomendaciones.</p>
                     </div>
                 </div>
            </div>

            <!-- Filters -->
            <!--<div class="max-w-6xl mx-auto px-4 flex flex-wrap justify-start gap-3 mb-10 overflow-x-auto scrollbar-hide py-2 lg:px-8">
                  <span class="px-6 py-2.5 rounded-full cursor-pointer text-sm font-semibold transition-colors bg-[#4A6458] text-white shadow-md">Todos</span>
                  <span class="px-6 py-2.5 rounded-full cursor-pointer text-sm font-medium transition-colors bg-white text-stone-600 hover:bg-[#EFECE5] hover:text-[#4A6458] border-none shadow-sm">Tips & Trucos</span>
                  <span class="px-6 py-2.5 rounded-full cursor-pointer text-sm font-medium transition-colors bg-white text-stone-600 hover:bg-[#EFECE5] hover:text-[#4A6458] border-none shadow-sm">Recetas</span>
            </div>-->
            <!--End Filters -->
            <!-- Newsletter CTA Banner at the top -->
            <!--<div class="bg-stone-900 text-stone-100 py-3 px-6 t-0 z-40 w-full flex flex-col md:flex-row items-center justify-between text-sm shadow-md mt-4 lg:mt-0 max-w-6xl mx-auto rounded-3xl md:rounded-full md:px-10 overflow-hidden relative">
                 <div class="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-800 to-pink-900 opacity-50"></div>
                 <div class="relative z-10 flex items-center mb-3 md:mb-0">
                     <span class="text-yellow-400 mr-2">✨</span>
                     <span class="font-semibold mr-1 text-pink-200">Suscríbete</span> para recibir ofertas exclusivas y nuestro top 10 de tips reposteros gratis.
                 </div>
                 <div class="relative z-10 flex items-center w-full md:w-auto">
                     <input type="email" placeholder="Tu Email*" class="px-4 py-2 rounded-l-full bg-stone-700/50 border border-stone-600 focus:outline-none focus:border-pink-400 placeholder-stone-400 flex-grow md:w-48 text-stone-100 placeholder:text-xs">
                     <button class="bg-pink-500 hover:bg-pink-400 text-white px-5 py-2 rounded-r-full font-bold transition-colors shadow-inner flex-shrink-0 text-xs tracking-wider uppercase">Unirme</button>
                 </div>
            </div>-->

            <div class="max-w-6xl mx-auto px-4 lg:px-8 pt-12">
                <!-- Section Header -->
                <div class="mb-8 md:mb-10 mt-4 md:mt-2">
                    <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-3 tracking-tight">Lectura más reciente</h2>
                    <p class="text-gray-800/85 md:text-lg max-w-2xl leading-relaxed">
                        Nuestra recomendación especial de la semana. Sumérgete en estos consejos y dale un toque extraordinario a tus próximas creaciones.
                    </p>
                </div>

                <!-- Featured Article -->
                <div class="mb-16 relative bg-white border border-pink-200 rounded-[0.8rem] md:rounded-[0.8rem] overflow-hidden shadow-sm group cursor-pointer flex flex-col" onclick="window.location.href='#article-${featured.id}'">
                    <!-- Image -->
                    <div class="w-full h-[350px] md:h-[500px] relative overflow-hidden bg-stone-100 flex-shrink-0">
                        <img src="${featured.image}" alt="${featured.title}" class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105">
                    </div>                    
                    <!-- Text Footer Sheet (Material Design style) -->
                    <div class="w-full bg-white rounded-t-[0.9rem] md:rounded-t-[0.9rem] relative -mt-6 p-6 pt-8 md:p-6 z-10 flex flex-col transition-colors duration-300">
                         <div class="flex items-center text-[11px] md:text-xs font-bold text-stone-500 tracking-wider mb-4 uppercase">
                            <span class="text-pink-600">${featured.category}</span>
                            <span class="mx-3 text-stone-300">•</span>
                            <span class="flex items-center gap-1.5">
                                <svg class="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                ${featured.readTime}
                            </span>
                         </div>
                         <h2 class="text-2xl md:text-2xl lg:text-2xl font-bold text-stone-800 mb-4 leading-tight group-hover:text-pink-600 transition-colors">${featured.title}</h2>
                         <p class="text-gray-800/85 md:text-md mb-6 leading-relaxed line-clamp-2 md:line-clamp-3">${featured.summary}</p>
                         
                         <div class="flex items-center justify-between border-t border-stone-100 pt-6 mt-auto">
                            <div class="flex items-center gap-3">
                                <p class="text-xs font-medium text-stone-400 tracking-widest uppercase">${featured.date}</p>
                            </div>
                            
                            <!-- Social Icons -->
                            <div class="flex gap-2" onclick="event.preventDefault(); /* Prevent anchor click */">
                                <button onclick="window.open('https://www.instagram.com/', '_blank')" class="w-9 h-9 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all shadow-sm" title="Instagram">
                                    <svg class="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                </button>
                                <button onclick="window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent('${featured.title} ' + window.location.href), '_blank')" class="w-9 h-9 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all shadow-sm" title="WhatsApp">
                                    <svg class="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 .002 5.385.002 12.031c0 2.126.549 4.195 1.593 6.015L.002 24l6.103-1.597c1.761.944 3.754 1.443 5.926 1.443 6.643 0 12.026-5.385 12.026-12.029C24.057 5.385 18.674 0 12.031 0zm3.582 17.585c-.534.896c-1.42 1.393-2.73 1.385-3.351 1.332-2.222-.249-4.717-1.442-6.666-3.39-1.948-1.949-3.14-4.444-3.39-6.666-.054-.62-.062-1.931 1.332-3.352.896-.534 1.392-.534 1.637-.514.282.023.633.205.894.887.41 1.077.942 2.38 1.066 2.637.123.256.241.673.085 1.014-.156.341-.453.642-.803.992-.351.351-.31.579.083 1.258.986 1.7 2.052 2.502 2.766 2.915.65.378.895.32 1.24-.047.346-.367.653-.668.995-.806.34-.139.757-.038 1.014.084.256.124 1.56.656 2.637 1.066.683.26 .865.611.888.894.019.245.02.74-.514 1.637z"/></svg>
                                </button>
                                <button onclick="window.open('https://www.tiktok.com/', '_blank')" class="w-9 h-9 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 hover:text-white hover:bg-black hover:border-black transition-all shadow-sm" title="TikTok">
                                    <svg class="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.06-1.74 1.83-4.32 2.87-6.85 2.6-2.58-.28-4.99-1.73-6.26-3.95-1.27-2.22-1.37-5.06-.27-7.39 1.1-2.34 3.09-4.14 5.56-4.94 1.12-.36 2.31-.49 3.49-.41v4.06c-1.22-.05-2.45.2-3.48.81-1.03.62-1.78 1.63-2.06 2.78-.3 1.22-.04 2.54.67 3.53.71 1 1.91 1.54 3.1 1.57 1.19.03 2.37-.47 3.19-1.36.81-.88 1.24-2.12 1.2-3.32V.02z"/></svg>
                                </button>
                            </div>
                         </div>
                    </div>
                </div>

                <div class="w-full flex flex-col justify-start items-start mt-10 mb-6">
                    <div class="w-full h-px bg-gray-300 mb-6"></div>
                    <h3 class="text-xl lg:text-[24px] font-bold text-gray-700 mb-1">Más artículos</h3>
                </div>

                <!-- Articles Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                    ${gridArticles.map(article => `
                        <a href="#article-${article.id}" class="bg-transparent group transition-transform duration-200 flex flex-col cursor-pointer block">
                            <!-- Image container -->
                            <div class="w-full h-64 md:h-72 relative overflow-hidden bg-stone-200 rounded-t-lg mb-5 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                                ${article.badge ? `<span class="absolute top-4 left-4 bg-yellow-300/85 backdrop-blur-md text-stone-800 text-[10px] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-widest flex items-center gap-1">${article.badge}</span>` : ''}
                                <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
                            </div>
                            
                            <!-- Content (Transparent wrapper) -->
                            <div class="flex flex-col flex-grow bg-transparent">
                                <div class="flex items-center text-xs font-bold text-stone-400 tracking-wider mb-3 uppercase">
                                <!--<span class="text-pink-500">${article.category}</span>
                                    <!--<span class="mx-2 text-stone-300">•</span>-->
                                    <span class="flex items-center gap-1">
                                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        ${article.readTime} de lectura
                                    </span>
                                </div>
                                <h3 class="text-xl lg:text-[20px] font-bold text-gray-700 mb-1 leading-snug group-hover:text-pink-600 transition-colors">${article.title}</h3>
                                
                                <div class="flex items-center justify-between pt-2 mt-auto">
                                    <div class="flex items-center gap-2">                                        
                                        <div class="leading-tight">                                            
                                            <p class="text-[12px] text-gray-600 m-0">${article.date}</p>
                                        </div>
                                    </div>
                                    <!-- Social Icons -->
                                    <div class="flex gap-1" onclick="event.preventDefault();">
                                        <button onclick="window.open('https://www.instagram.com/', '_blank')" class="text-[#E1306C] transition-colors p-1.5 hover:bg-[#E1306C]/10 rounded-full" title="Instagram">
                                            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                        </button>
                                        <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank')" class="text-[#1877F2] transition-colors p-1.5 hover:bg-[#1877F2]/10 rounded-full" title="Facebook">
                                            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                        </button>
                                        <button onclick="window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent('${article.title} ' + window.location.href), '_blank')" class="text-[#25D366] transition-colors p-1.5 hover:bg-[#25D366]/10 rounded-full" title="WhatsApp">
                                            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 .002 5.385.002 12.031c0 2.126.549 4.195 1.593 6.015L.002 24l6.103-1.597c1.761.944 3.754 1.443 5.926 1.443 6.643 0 12.026-5.385 12.026-12.029C24.057 5.385 18.674 0 12.031 0zm3.582 17.585c-.534.896c-1.42 1.393-2.73 1.385-3.351 1.332-2.222-.249-4.717-1.442-6.666-3.39-1.948-1.949-3.14-4.444-3.39-6.666-.054-.62-.062-1.931 1.332-3.352.896-.534 1.392-.534 1.637-.514.282.023.633.205.894.887.41 1.077.942 2.38 1.066 2.637.123.256.241.673.085 1.014-.156.341-.453.642-.803.992-.351.351-.31.579.083 1.258.986 1.7 2.052 2.502 2.766 2.915.65.378.895.32 1.24-.047.346-.367.653-.668.995-.806.34-.139.757-.038 1.014.084.256.124 1.56.656 2.637 1.066.683.26 .865.611.888.894.019.245.02.74-.514 1.637z"/></svg>
                                        </button>
                                        <button onclick="window.open('https://www.tiktok.com/', '_blank')" class="text-black transition-colors p-1.5 bg-black/5 rounded-full" title="TikTok">
                                            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.06-1.74 1.83-4.32 2.87-6.85 2.6-2.58-.28-4.99-1.73-6.26-3.95-1.27-2.22-1.37-5.06-.27-7.39 1.1-2.34 3.09-4.14 5.56-4.94 1.12-.36 2.31-.49 3.49-.41v4.06c-1.22-.05-2.45.2-3.48.81-1.03.62-1.78 1.63-2.06 2.78-.3 1.22-.04 2.54.67 3.53.71 1 1.91 1.54 3.1 1.57 1.19.03 2.37-.47 3.19-1.36.81-.88 1.24-2.12 1.2-3.32V.02z"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
                
                <!-- Pagination / Load More (Placeholder) -->
                <div class="mt-16 text-center">
                    <button class="px-8 py-3 bg-white border border-stone-200 text-stone-600 rounded-full font-semibold hover:bg-stone-50 hover:text-stone-800 transition-colors shadow-sm">
                        Cargar más artículos
                    </button>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define('site-blog', SiteBlog);

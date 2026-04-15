class SiteBlog extends HTMLElement {
    constructor() {
        super();
        // Headless CMS Mock Data Structure
        this.articles = [
            {
                id: 1,
                isFeatured: true,
                title: "Postres Perfectos: Cómo lograr un merengue estable y brillante en casa",
                summary: "El merengue puede ser intimidante, pero con nuestra guía paso a paso y entendiendo la química detrás del azúcar y las claras, lograrás resultados profesionales. Te revelamos nuestro mayor secreto.",
                image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
            <div class="max-w-6xl mx-auto px-4 flex flex-wrap justify-start gap-3 mb-10 overflow-x-auto scrollbar-hide py-2 lg:px-8">
                  <span class="px-6 py-2.5 rounded-full cursor-pointer text-sm font-semibold transition-colors bg-[#4A6458] text-white shadow-md">Todos</span>
                  <span class="px-6 py-2.5 rounded-full cursor-pointer text-sm font-medium transition-colors bg-white text-stone-600 hover:bg-[#EFECE5] hover:text-[#4A6458] border-none shadow-sm">Tips & Trucos</span>
                  <span class="px-6 py-2.5 rounded-full cursor-pointer text-sm font-medium transition-colors bg-white text-stone-600 hover:bg-[#EFECE5] hover:text-[#4A6458] border-none shadow-sm">Recetas</span>
            </div>
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

            <div class="max-w-6xl mx-auto px-4 lg:px-8">
                <!-- Featured Article -->
                <div class="mb-16 relative">
                    <div class="w-full h-[500px] md:h-[600px] bg-stone-200 rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.06)] transform transition-transform duration-700 hover:scale-[1.01]">
                        <img src="${featured.image}" alt="${featured.title}" class="w-full h-full object-cover">
                        <!-- Gradient Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-800/20 to-transparent"></div>
                    </div>
                    
                    <!-- Glassmorphism Card -->
                    <div class="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:w-[500px] bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 md:p-10 shadow-2xl transition-all duration-300 hover:bg-white/80">
                         <div class="flex items-center text-xs font-bold text-stone-500 tracking-wider mb-4 uppercase">
                            <span class="text-pink-500">${featured.category}</span>
                            <span class="mx-2">•</span>
                            <span class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                ${featured.readTime}
                            </span>
                         </div>
                         <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4 leading-tight">${featured.title}</h2>
                         <p class="text-stone-600 mb-6 leading-relaxed line-clamp-3">${featured.summary}</p>
                         <div class="flex items-center justify-between border-t border-stone-200/60 pt-6">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-sm">PP</div>
                                <div>
                                    <p class="text-sm font-bold text-stone-800">Postres Perla</p>
                                    <p class="text-xs text-stone-500">${featured.date}</p>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <button class="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:text-pink-500 hover:border-pink-200 transition-colors shadow-sm">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                                </button>
                                <button class="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:text-pink-500 hover:border-pink-200 transition-colors shadow-sm">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-5.368m0 5.368l5.662 3.775m-5.662-3.775l5.662-3.775m0 0a3 3 0 115.368 0m-5.368 0a3 3 0 105.368 0m-5.368 0l-5.662 3.775m0 0a3 3 0 105.368 0"></path></svg>
                                </button>
                            </div>
                         </div>
                    </div>
                </div>

                <!-- Articles Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                    ${gridArticles.map(article => `
                        <a href="#article-${article.id}" class="bg-transparent group hover:-translate-y-2 transition-transform duration-500 flex flex-col cursor-pointer block">
                            <!-- Image container -->
                            <div class="w-full h-64 md:h-72 relative overflow-hidden bg-stone-200 rounded-xl mb-5 shadow-md group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                                ${article.badge ? `<span class="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-stone-800 text-[10px] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-widest flex items-center gap-1">${article.badge}</span>` : ''}
                                <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
                            </div>
                            
                            <!-- Content (Transparent wrapper) -->
                            <div class="px-2 flex flex-col flex-grow bg-transparent">
                                <div class="flex items-center text-xs font-bold text-stone-400 tracking-wider mb-3 uppercase">
                                    <span class="text-pink-500">${article.category}</span>
                                    <span class="mx-2 text-stone-300">•</span>
                                    <span class="flex items-center gap-1">
                                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        ${article.readTime}
                                    </span>
                                </div>
                                <h3 class="text-xl lg:text-[22px] font-bold text-stone-800 mb-1 leading-snug group-hover:text-pink-600 transition-colors">${article.title}</h3>
                                
                                <div class="flex items-center justify-between pt-4 mt-auto">
                                    <div class="flex items-center gap-2">
                                        <div class="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-[10px] shrink-0">PP</div>
                                        <div class="leading-tight">
                                            <p class="text-[11px] font-bold text-stone-800 m-0">Postres Perla</p>
                                            <p class="text-[10px] text-stone-400 m-0">${article.date}</p>
                                        </div>
                                    </div>
                                    <!-- Social Icons -->
                                    <div class="flex gap-1" onclick="event.preventDefault(); /* Prevent anchor click */">
                                        <button onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('${article.title}'), '_blank')" class="text-stone-300 hover:text-[#1DA1F2] transition-colors p-1.5 hover:bg-[#1DA1F2]/10 rounded-full" title="Compartir en Twitter">
                                            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                        </button>
                                        <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank')" class="text-stone-300 hover:text-[#1877F2] transition-colors p-1.5 hover:bg-[#1877F2]/10 rounded-full" title="Compartir en Facebook">
                                            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
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

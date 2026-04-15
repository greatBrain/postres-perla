class BlogPromo extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <section class="py-16 md:py-24 bg-stone-50 overflow-hidden relative">
            <!-- Decorative blobs -->
            <div class="absolute top-0 left-0 w-64 h-64 bg-pink-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:flex lg:items-center lg:gap-12 transition-all hover:bg-white/80">
                    <div class="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
                        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-6">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                            Nuevo Espacio
                        </span>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6 leading-tight">
                            Descubre los secretos de<br/>
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400">Postres Perla</span>
                        </h2>
                        <p class="text-stone-600 text-lg mb-8 max-w-xl">
                            ¿Te preguntas cómo logramos esa textura perfecta o quieres intentar recetas deliciosas en casa? Visita nuestro nuevo blog donde compartimos consejos, historias y la magia detrás de cada horneada.
                        </p>
                        <a href="blog.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-800 text-white rounded-full font-semibold hover:bg-pink-500 transition-colors duration-300 shadow-md shadow-stone-800/20 hover:shadow-pink-500/30 group">
                            Visitar el Blog
                            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                    
                    <div class="lg:w-1/2 relative" data-aos="fade-left" data-aos-delay="100">
                        <div class="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl shadow-pink-900/10 transform rotate-2 hover:rotate-0 transition-transform duration-500 relative bg-white p-2">
                             <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Deliciosos postres" class="w-full h-full object-cover rounded-xl" />
                             <!-- Floating badge -->
                             <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                                  <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                  </div>
                                  <div>
                                      <p class="text-xs text-stone-500 font-bold uppercase tracking-wider">Recetas & Tips</p>
                                      <p class="text-stone-800 font-bold text-sm">+20 Artículos</p>
                                  </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('blog-promo', BlogPromo);

const ALL_PRODUCTS = [
      {
            title: "Pasteles",
            description: "Personalizados / porciones",
            image: "./public/images/personal-cake.jpg",
            alt: "Postre 1",
            href: "#"
      },
      {
            title: "Pie de frutas",
            description: "Fresas, moras",
            image: "./public/images/pie.jpg",
            alt: "Postre 2",
            href: "#"
      },
      {
            title: "Brownies",
            description: "Surtidos y deliciosos",
            image: "./public/images/brownies.jpg",
            alt: "Postre 2",
            href: "#"
      },
      {
            title: "Pudding de pan",
            description: "Surtidos y deliciosos",
            image: "./public/images/pudding.jpg",
            alt: "Postre 2",
            href: "#"
      },
      {
            title: "Mousse de frutas",
            description: "Surtidos y deliciosos",
            image: "./public/images/mousse.jpg",
            alt: "Postre 2",
            href: "#"
      }
];
function getProducts() {
    return ALL_PRODUCTS;
}
function renderProductCards(sliderContainerSelector) {
    const sliderContainer = document.querySelector(sliderContainerSelector);
    if (!sliderContainer){
        console.error(`Slider container not found: ${sliderContainerSelector}`);
        return;
    }
    const requiredClasses = [
        'flex',
        'transition-transform',
        'duration-500',
        'ease-in-out',
        'w-full'
    ];
    requiredClasses.forEach(className => {
        if (!sliderContainer.classList.contains(className)) { sliderContainer.classList.add(className); }
    });
    const products = getProducts();
    if (!Array.isArray(products) || products.length === 0) { 
        console.warn('No products found or invalid products data'); return; 
    }
   
    function createProductCard(product) {
        const slide = document.createElement('div');
        slide.className = 'slide flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-3 flex justify-center';
        const card = document.createElement('div');
        card.className = 'img-box bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-[295px]';
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container overflow-hidden rounded-t-2xl';
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.alt || product.title;
        img.className = 'object-cover w-full h-48 transition-transform duration-300 hover:scale-105';
        const content = document.createElement('div');
        content.className = 'bg-gradient-to-r from-pink-50 to-white p-6 text-left';
        const titleLink = document.createElement('a');
        titleLink.href = product.href || '#';
        titleLink.className = 'text-pink-600 font-bold hover:text-gray-800 text-xl transition duration-300 block mb-1 ubuntu-font-bold';
        titleLink.textContent = product.title;
        const description = document.createElement('p');
        description.className = 'text-black-400 text-base mb-3';
        description.textContent = product.description;
        const button = document.createElement('button');
        button.className = 'shadow-2xl mt-3 bg-yellow-300 hover:bg-yellow-400 text-sm text-black-800 font-semibold px-4 py-2 rounded-full transition duration-200 flex items-center gap-1';
        button.onclick = function () { const modal = document.getElementById('products-modal'); 
          if (modal) { modal.showModal(); document.body.classList.add('overflow-hidden'); }
        };
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-4 h-4');
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('viewBox', '0 0 20 20');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M10.293 15.707a1 1 0 001.414 0L17 10.414a1 1 0 00-1.414-1.414L11 13.586V3a1 1 0 10-2 0v10.586L4.414 9a1 1 0 00-1.414 1.414l5.293 5.293z');
        const buttonText = document.createTextNode('Ver mas');
        svg.appendChild(path);
        button.appendChild(svg);
        button.appendChild(buttonText);
        content.appendChild(titleLink);
        content.appendChild(description);
        content.appendChild(button);
        imgContainer.appendChild(img);
        card.appendChild(imgContainer);
        card.appendChild(content);
        slide.appendChild(card);
        return slide;
    }
    function renderCards() {
        sliderContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        products.forEach(product => {
            fragment.appendChild(createProductCard(product));
        });
        sliderContainer.appendChild(fragment);
    }
    renderCards();
    return {
        refresh: renderCards,
        addProduct: function (product) {
            if (product) { sliderContainer.appendChild(createProductCard(product)); }
        }
    };
}
document.addEventListener('DOMContentLoaded', function () {
    const productCardsManager = renderProductCards('.slider-container');
    window.productCardsManager = productCardsManager;
});
//
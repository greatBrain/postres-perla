const ALL_PRODUCTS = [{
    title: "Pastel dulce de leche",
    description: "Personalizados / porciones",
    image: "./public/images/personal-cake.jpg",
    alt: "Postre 1",
    href: "#",
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"]
  },
  {
    title: "Pie de frutas",
    description: "Fresas, moras",
    image: "./public/images/pie.jpg",
    alt: "Postre 2",
    href: "#",
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"]
  },
  {
    title: "Brownie de chocolate",
    description: "Surtidos y deliciosos",
    image: "./public/images/brownies.jpg",
    alt: "Postre 2",
    href: "#",
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"]
  },
  {
    title: "Pudding de pan",
    description: "Surtidos y deliciosos",
    image: "./public/images/pudding.jpg",
    alt: "Postre 2",
    href: "#",
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"]
  },
  {
    title: "Mousse de frutas",
    description: "Surtidos y deliciosos",
    image: "./public/images/mousse.jpg",
    alt: "Postre 2",
    href: "#",
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"]
  }
];

function getProducts() {
  return ALL_PRODUCTS;
}

function renderProductCards(sliderContainerSelector) {
  const sliderContainer = document.querySelector(sliderContainerSelector);
  if (!sliderContainer) {
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
    if (!sliderContainer.classList.contains(className)) {
      sliderContainer.classList.add(className);
    }
  });
  const products = getProducts();
  if (!Array.isArray(products) || products.length === 0) {
    console.warn('No products found or invalid products data');
    return;
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
    button.onclick = function () {
      showProductModal(product); // Pasamos el objeto product completo
    };
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'w-4 h-4');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', '0 0 20 20');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M5 15a1 1 0 001.707.707L15 7.414V13a1 1 0 102 0V5a1 1 0 00-1-1h-8a1 1 0 100 2h5.586L5.707 14.293A1 1 0 005 15z');
    svg.appendChild(path);
    const buttonText = document.createTextNode('Ver detalles');
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
      if (product) {
        sliderContainer.appendChild(createProductCard(product));
      }
    }
  };
}

// --- 4. Nueva Función para Actualizar y Mostrar el Modal ---
function showProductModal(productData) {
  const modal = document.getElementById('products-modal');
  if (!modal) {
    console.error('Modal element not found.');
    return;
  }

  // Obtener referencias a los elementos dentro del modal
  const modalTitle = document.getElementById('modal-product-title');
  const modalDescription = document.getElementById('modal-product-description');
  const modalIngredients = document.getElementById('modal-product-ingredients');
  const modalPrice = document.getElementById('modal-product-price');
  const modalImage = document.getElementById('modal-product-image');

  // Rellenar el modal con la información del producto
  if (modalTitle) modalTitle.textContent = productData.title || 'Información no disponible';
  if (modalDescription) modalDescription.textContent = productData.description || 'Descripción no disponible.';
  if (modalPrice) modalPrice.textContent = productData.price || 'Precio no disponible';
  if (modalImage) {
    modalImage.src = productData.image || '';
    modalImage.alt = productData.alt || productData.title || 'Imagen del producto';
  }

  // Manejar los ingredientes (si existen)
  if (modalIngredients) {
    modalIngredients.innerHTML = ''; // Limpiar cualquier ingrediente anterior
    if (productData.ingredients && Array.isArray(productData.ingredients) && productData.ingredients.length > 0) {
      productData.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        modalIngredients.appendChild(li);
      });
    } else {
      // Opcional: mostrar un mensaje si no hay ingredientes
      const li = document.createElement('li');
      li.textContent = 'No se listan ingredientes específicos.';
      modalIngredients.appendChild(li);
    }
  }
  // Mostrar el modal y deshabilitar el scroll del body
  modal.showModal();
  document.body.classList.add('overflow-hidden');
}
// --- 5. Función Principal para Renderizar y Activar el Carrusel ---
// Mantenemos esta función igual, ya que su propósito es orquestar la renderización.
function renderProductCarousel() {
  const products = getProducts();

  const sliderContainer = document.getElementById('product-slider-container');
  const bulletContainer = document.getElementById('carousel-bullets-container');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!sliderContainer || !bulletContainer) {
    console.error('Missing required DOM elements for product carousel rendering.');
    return;
  }

  sliderContainer.innerHTML = '';
  bulletContainer.innerHTML = '';

  const slides = [];
  products.forEach(product => {
    const productCard = createProductCard(product); // Ahora, esta función asigna el onClick dinámico
    sliderContainer.appendChild(productCard);
    slides.push(productCard);
  });

  products.forEach((_, index) => {
    const bullet = document.createElement('button');
    bullet.className = 'carousel-bullet w-4 h-4 bg-pink-400 rounded-full opacity-60 hover:opacity-100 transition';
    bullet.dataset.index = index;
    bulletContainer.appendChild(bullet);
  });

  initProductCarousel(sliderContainer, slides, bulletContainer, prevBtn, nextBtn);
}

document.addEventListener('DOMContentLoaded', function () {
  const productCardsManager = renderProductCards('.slider-container');
  window.productCardsManager = productCardsManager;
});
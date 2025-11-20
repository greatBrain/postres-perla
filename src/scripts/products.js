const EXTRA_FILLING_FLAVORS = [
      { flavor: "Mermelada de fresa", price: "RD$300" },
      { flavor: "Crema de coco", price: "RD$400" },
      { flavor: "Crema de chocolate", price: "RD$400" },
      { flavor: "Crema de pistacho", price: "RD$500" },
      { flavor: "Crema de almendras", price: "RD$500" },
      { flavor: "Crema ciruelas", price: "RD$500" },
      { flavor: "Ron pasas", price: "RD$400" },
      { flavor: "Frosting de queso", price: "RD$500" },
      { flavor: "Capuchino", price: "RD$400" },
      { flavor: "Coffee caramel", price: "RD$400" }
]
const ALL_PRODUCTS = [
  //Pasteles y bizcochos
  {
    title: "Pastel de vainilla (bizcocho dominicano)",
    comments: "Decoración no incluida en el precio del pastel",
    image: "./public/images/personal-cake.webp",
    alt: "Pastel personalizado",
    href: "#",
    prices: [
      "1 libra: RD$1,900.00", "1/2 libra: RD$1,200", "1/4: libra RD$1,000"
    ],
    fillingFlavors: {
        included: [
            "Dulce de leche",
            "Crema pastelera",
            "Mermelada de piña"
        ],
        additional: EXTRA_FILLING_FLAVORS
    },
    category: "pasteles"
  },
  {
    title: "Pastel jugoso de chocolate",
    comments: "Decoración no incluida en el precio del pastel",
    image: "./public/images/chocolate-cake.webp",
    alt: "Pasteles por porciones",
    href: "#",
    prices: [
      "1 libra: RD$2,100", "1/2 libra: RD$1,400"
    ],
    fillingFlavors: {
        included: [
            "Dulce de leche",
            "Crema pastelera",
            "Mermelada de piña"
        ],
        additional: EXTRA_FILLING_FLAVORS
    },
    category: "pasteles"
  },
  {
    title: "Pastel de zanahoria (carrot cake)",
    comments: "Decoración no incluida en el precio del pastel",
    image: "./public/images/carrot-cake.webp",
    alt: "Pastel de zanahoria",
    href: "#",
    prices: [
      "3/4 libra: RD$1,300.", "1/2 libra: RD$1,000."
    ],
    fillingFlavors: {
        included: [
            "Dulce de leche",
            "Crema pastelera",
            "Mermelada de piña"
        ],
        additional: EXTRA_FILLING_FLAVORS
    },
    category: "pasteles"
  },
  {
    title: "Pan de maíz entero",
   comments: "Sin relleno",
    image: "./public/images/pan-maiz.webp",
    alt: "Pan de maíz",
    href: "#",
    prices: ["RD$1,000 c/u", "No relleno"],
    fillingFlavors: {
        included: [],
        additional: []
    },
    category: "pasteles"
  },
  {
    title: "Pastel marmoleado",
   comments: "Decoración no incluida en el precio del pastel",
    image: "./public/images/marmoleado.webp",
    alt: "Pan de maíz",
    href: "#",
    prices: [
      "1 libra: RD$2,500.", "1/2 libra RD$1,500."
    ],
    fillingFlavors: {
        included: [
            "Dulce de leche",
            "Crema pastelera",
            "Mermelada de piña"
        ],
        additional: EXTRA_FILLING_FLAVORS
    },
    category: "pasteles"
  },

  //End pasteles y bizcochos
  //Postres
  {
    title: "Pie de frutas",
    comments: "Frutas: piña, fresas y moras",
    image: "./public/images/pie.webp",
    alt: "Postre 2",
    href: "#",
    prices: ["De piña: RD$700.00", "De fresas: RD$850.00"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category:"postres"
  },
  {
    title: "Pudín de pan entero",
    comments: "Sin relleno",
    image: "./public/images/pudding.webp",
    alt: "Pudin de pan completo",
    href: "#",
    prices: ["RD$1,150.00"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category: "postres"
  },
  {
    title: "Porciones pudín de pan",
    comments: "Sin relleno",
    image: "./public/images/pudding-portion.webp",
    alt: "Porciones de pudin de pan",
    href: "#",
    prices: ["RD$200.00"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category: "postres"
  },
  {
    title: "Fresas con crema",
    comments: "Crema batida acompañada de fresas frescas",
    image: "./public/images/fresas-crema.webp",
    alt: "Fresas con crema",
    href: "#",
    prices: ["5 onzas: RD$150.00", "9 onzas: RD$400.00"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category: "postres"
  },
  {
    title: "Tres leches",
    comments: "Delicioso y cremoso para que lo degustes",
    image: "./public/images/tres-leches.webp",
    alt: "Tres leches",
    href: "#",
    prices: ["RD$150.00"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category: "postres"
  },
  //End postres
  //Mesa dulces
   {
    title: "Brownie de chocolate",
    comments: "Individual y por docena (12na)",
    image: "./public/images/brownies.webp",
    alt: "Brownies",
    href: "#",
    prices: ["Docena: RD$700.00"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category:"mesa-dulces"
  },
  {
    title: "Mousse de fresa y chinola",
    comments: "Imágen de referencia",
    image: "./public/images/mousse.webp",
    alt: "Mousse de diferentes frutas",
    href: "#",
    prices: ["Docena (12na): RD$1,200.00"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category:"mesa-dulces"
  },
  {
    title: "Shots tres (3) leches",
    comments: "Perfectos para tu mesa de dulces",
    image: "./public/images/shots-tres-leches.webp",
    alt: "Tres leches",
    href: "#",
    prices: ["Docena: RD$900"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category: "mesa-dulces"
  },
  {
    title: "Cupcakes por docena",
    comments: "Imágen de referencia",
    image: "./public/images/cupcakes.webp",
    alt: "Tres leches",
    href: "#",
    prices: [
      "docena de vainilla, decoración en suspiro: RD$700.00",
      "docena de chocolate, decoración en suspiro: RD$850.00",
      "topper personalizados: RD$200.00 adicional"
    ],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category: "mesa-dulces"
  },
  {
    title: "Alfajores de maicena",
    comments: "Ideal para tu mesa de dulces",
    image: "./public/images/alfajores.webp",
    alt: "Alfajores maicena con dulce de leche",
    href: "#",
    prices: [
      "docena: RD$750.00"
    ],
    fillingFlavors: {
      included:["Dulce de leche"],
      additional:[]
    },
    category: "mesa-dulces"
  },
  {
    title: "Mantecados",
    comments: "Agregado: chispas de colores",
    image: "./public/images/mantecados.webp",
    alt: "MANTECADOS",
    href: "#",
    prices: [
      "Docena: RD$300.00"
    ],
    fillingFlavors: {
      included: [],
      additional: []
    },
    category: "mesa-dulces"
  },
  {
    title: "Polvorones de almendra",
    comments: "Con almendras naturales",
    image: "./public/images/polvorones.webp",
    alt: "POLVORONES DE ALMENDRAS",
    href: "#",
    prices: [
      "Docena: RD$650.00"
    ],
    fillingFlavors: {
      included: [],
      additional: []
    },
    category: "mesa-dulces"
  },
  {
    title: "Galletas en fondant personalizadas",
    comments: "Precio dependerá del diseño",
    image: "./public/images/fondant-cake.webp",
    alt: "GALLETAS EN FONDANT PERSONALIZADAS",
    href: "#",
    prices: [
      "Con empaque por separado y nota personalizada: RD$1,200.00",
      "En empaque juntas: RD$1,000.00"
    ],
    fillingFlavors: {
      included: [],
      additional: []
    },
    category: "mesa-dulces"
  },
  {
    title: "Galletas personalizadas con azúcar glass",
    comments: "Precio dependerá del diseño",
    image: "./public/images/glass-cake.webp",
    alt: "Galletas personalizadas con azúcar glass",
    href: "#",
    prices: [
      "Docena empacadas juntas: RD$800.00",
      "Empacadas por separado y nota personalizada: RD$950.00"
    ],
    fillingFlavors: {
      included: [],
      additional: []
    },
    category: "mesa-dulces"
  },
  {
    title: "Galletas personalizadas con color y tinta comestible",
    comments: "Imágen de referencia",
    image: "./public/images/galleta-personal.webp",
    alt: "Galletas personalizadas con color y tinta comestible",
    href: "#",
    prices: [
      "Docena empacadas juntas: RD$700.00",
      "Empacadas por separado con nota personalizada: RD$850.00"
    ],
    fillingFlavors: {
      included: [],
      additional: []
    },
    category: "mesa-dulces"
  },
  //End mesa dulces
  //Temporada
  {
    title: "Galletas navideñas de gengibre",
    comments: "Un clásico de esta hermosa temporada!",
    image: "./public/images/ginger-cake-white.webp",
    alt: "GALLETAS DE JENGIBRE DE NAVIDAD",
    href: "#",
    prices: [
      "Docena decorada en blanco: RD$800.00",
      "Con colores: RD$950.00"
    ],
    fillingFlavors: {
      included: [],
      additional: []
    },
    category: "temporada"
  },
  {
    title: "Ponche navideño",
    comments: "Disfruta de nuestra colección de ponches artesanales exclusiva de la temporada!",
    image: "./public/images/ponche.webp",
    alt: "PONCHE DE NAVIDAD",
    href: "#",
    prices: [
      "Dulce de leche: RD$600.00",
      "Snickers: RD$700.00",
      "Pistacho: RD$700.00",
      "Ciruela: RD$600.00"
    ],
    fillingFlavors: {
      included: [],
      additional: []
    },
    category: "temporada"
  }
  //End temporada
];
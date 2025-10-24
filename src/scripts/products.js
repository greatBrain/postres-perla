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
    comments: "Elaboramos el pastel para tus celebracion, a tu gusto y con tu estilo",
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
    comments: "Si no lo deseas completo, igual lo puedes disfrutar en partes.",
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
    comments: "",
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
    title: "Pan de maíz entero (sin relleno)",
    comments: "",
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
    comments: "",
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
    comments: "Fresas, moras",
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
    comments: " ",
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
    comments: " ",
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
    comments: " ",
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
    title: "Tres (3) leches",
    comments: " ",
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
    comments: " ",
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
    comments: " ",
    image: "./public/images/fresas-crema.webp",
    alt: "Mousse de diferentes frutas",
    href: "#",
    prices: ["RD$350.00"],
    fillingFlavors: {
      included:[],
      additional:[]
    },
    category:"mesa-dulces"
  },
  {
    title: "Shots tres (3) leches",
    comments: "Shots de tres leches para mesa de dulce",
    image: "./public/images/tres-leches.webp",
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
    comments: "",
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
    comments: "",
    image: "./public/images/generica.png",
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
    comments: "",
    image: "./public/images/generica.png",
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
    comments: "",
    image: "./public/images/generica.png",
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
    comments: "",
    image: "./public/images/generica.png",
    alt: "GALLETAS EN FONDANT PERSONALIZADAS",
    href: "#",
    prices: [
      "Docena con empacadas por separado y nota personalizada: RD$1,000.00",
      "Empacadas juntas: RD$1,000.00"
    ],
    fillingFlavors: {
      included: [],
      additional: []
    },
    category: "mesa-dulces"
  },
  {
    title: "Galletas personalizadas con azúcar glass",
    comments: "",
    image: "./public/images/generica.png",
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
    title: "Galletas personalizadas solo con color y escrita con tinta comestible",
    comments: "",
    image: "./public/images/generica.png",
    alt: "Galletas personalizadas solo con color y escrita con tinta comestible",
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
    title: "Galletas de gengibre navideñas",
    comments: "",
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
  }
  //End temporada
];
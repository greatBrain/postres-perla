const ALL_PRODUCTS = [
  //Pasteles y bizcochos
  {
    title: "Pastel de vainilla (bizcocho dominicano)",
    description: "Elaboramos el pastel para tus celebracion, a tu gusto y con tu estilo",
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
        additional: [            
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
    },
    category: "pasteles"
  },
  {
    title: "Pastel jugoso de chocolate",
    description: "Si no lo deseas completo, igual lo puedes disfrutar en partes.",
    image: "./public/images/chocolate-cake.webp",
    alt: "Pasteles por porciones",
    href: "#",
    prices: [
      "1 libra: RD$2,100", "1/2 libra: RD$1,400", 
      "Precios no varían con los siguientes rellenos: dulce de leche, crema pastelera.", 
      "Precios no incluyen decoración"
    ],
    fillingFlavors: [
      "Dulce de leche", "Crema pastelera", "Mermelada de piña", "Mermelada de fresa: RD$300", "Crema de coco: RD$400", 
      "Crema de chocolate: RD$400", "Crema de pistacho: RD$500", "Crema de almendras: RD$500", "Crema ciruelas: RD$500", 
      "Ron pasas: RD$400", "Frosting de queso: RD$500", "Capuchino: RD$400", "Coffee caramel: RD$400"
    ],
    category: "pasteles"
  },
  {
    title: "Pastel de zanahoria",
    description: "",
    image: "./public/images/carrot-cake.webp",
    alt: "Pastel de zanahoria",
    href: "#",
    prices: [
      "3/4 de libra: RD$1,300.", "1/2 libra: RD$1,000.", "Precios solo de masa.", 
      "Precios no incluyen decoración."
    ],
    fillingFlavors: [
      "Dulce de leche", "Crema pastelera", "Mermelada de piña", "Mermelada de fresa: RD$300", "Crema de coco: RD$400", 
      "Crema de chocolate: RD$400", "Crema de pistacho: RD$500", "Crema de almendras: RD$500", "Crema ciruelas: RD$500", 
      "Ron pasas: RD$400", "Frosting de queso: RD$500", "Capuchino: RD$400", "Coffee caramel: RD$400"
    ],
    category: "pasteles"
  },
  {
    title: "Pan de maíz entero (sin relleno)",
    description: "",
    image: "./public/images/pan-maiz.webp",
    alt: "Pan de maíz",
    href: "#",
    prices: ["RD$1,000 c/u", "No relleno"],
    fillingFlavors: [],
    category: "pasteles"
  },  
  {
    title: "Pastel marmoleado",
    description: "",
    image: "./public/images/portion-cake.jpg",
    alt: "Pan de maíz",
    href: "#",
    prices: [
      "1 libra: RD$2,500.", "1/2 libra RD$1,500.", 
      "Precios no varían solo con los siguientes rellenos: dulce de leche y crema pastelera.", 
      "Precios no incluyen decoración."
    ],
    fillingFlavors: [
      "Dulce de leche", "Crema pastelera", "Mermelada de piña", "Mermelada de fresa: RD$300", "Crema de coco: RD$400", 
      "Crema de chocolate: RD$400", "Crema de pistacho: RD$500", "Crema de almendras: RD$500", "Crema ciruelas: RD$500", 
      "Ron pasas: RD$400", "Frosting de queso: RD$500", "Capuchino: RD$400", "Coffee caramel: RD$400"
    ],
    category: "pasteles"
  },

  //End pasteles y bizcochos
  //Postres
  {
    title: "Pie de frutas",
    description: "Fresas, moras",
    image: "./public/images/pie.webp",
    alt: "Postre 2",
    href: "#",
    prices: "RD$350.00",
    fillingFlavors: ["Frutas frescas", "Masa quebrada", "Crema pastelera"],
    category:"postres"
  },
  {
    title: "Brownie de chocolate",
    description: "Surtidos y deliciosos",
    image: "./public/images/brownies.webp",
    alt: "Postre 2",
    href: "#",
     prices: "RD$350.00",
    fillingFlavors: ["Frutas frescas", "Masa quebrada", "Crema pastelera"],
    category:"postres"
  },
  {
    title: "Pudín de pan (completo y en porciones)",
    description: "Surtidos y deliciosos",
    image: "./public/images/pudding.webp",
    alt: "Postre 2",
    href: "#",
    prices: "RD$350.00",
    fillingFlavors: ["Frutas frescas", "Masa quebrada", "Crema pastelera"],
    category: "postres"
  },
  {
    title: "Mousse de frutas",
    description: "Surtidos y deliciosos",
    image: "./public/images/mousse.webp",
    alt: "Postre 2",
    href: "#",
    prices: "RD$350.00",
    fillingFlavors: ["Frutas frescas", "Masa quebrada", "Crema pastelera"],
    category:"postres"
  }
  //End postres
];
function sendWhatsappMessage(title,  prices, imageUrl){
    const PHONENUMBER = '8296469680';
    const BASEMESSAGE = `Hola Perla, me interesa hablar sobre este producto:\n- Producto: ${title}\n- Precio: ${ prices}`;
    const ENCODEDMESSAGE = encodeURIComponent(BASEMESSAGE);
    const WHATSAPPURL = `https://wa.me/${PHONENUMBER}?text=${ENCODEDMESSAGE}`;
    return WHATSAPPURL;
}
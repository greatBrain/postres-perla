const ALL_PRODUCTS = [
  //Pasteles y bizcochos
  {
    title: "Pastel de vainilla (bizcocho dominicano) artesanal",
    description: "Elaboramos el pastel para tus celebracion, a tu gusto y con tu estilo",
    image: "./public/images/personal-cake.webp",
    alt: "Pastel personalizado",
    href: "#",
    price: "RD$1,800.00",
    ingredients: ["Vainilla", "Chocolate", "Dulce de leche"],
    category: "pasteles"
  },
  {
    title: "Pastel jugoso de chocolate artesanal",
    description: "Si no lo deseas completo, igual lo puedes disfrutar en partes.",
    image: "./public/images/chocolate-cake.webp",
    alt: "Pasteles por porciones",
    href: "#",
    price: "RD$250.00",
    ingredients: ["Vainilla", "Chocolate", "Dulce de leche"],
    category: "pasteles"
  },
  {
    title: "Pan de maíz artesanal entero •no relleno•",
    description: "",
    image: "./public/images/pan-maiz.webp",
    alt: "Pan de maíz",
    href: "#",
    price: "RD$250.00",
    ingredients: ["Vainilla", "Chocolate", "Dulce de leche"],
    category: "pasteles"
  },
  {
    title: "Pastel de zanahoria (carrot cake) artesanal",
    description: "",
    image: "./public/images/carrot-cake.webp",
    alt: "Pan de maíz",
    href: "#",
    price: "RD$250.00",
    ingredients: ["Vainilla", "Chocolate", "Dulce de leche"],
    category: "pasteles"
  },
  {
    title: "Pastel marmoleado artesanal",
    description: "",
    image: "./public/images/portion-cake.jpg",
    alt: "Pan de maíz",
    href: "#",
    price: "RD$250.00",
    ingredients: ["Vainilla", "Chocolate", "Dulce de leche"],
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
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"],
    category:"postres"
  },
  {
    title: "Brownie de chocolate",
    description: "Surtidos y deliciosos",
    image: "./public/images/brownies.webp",
    alt: "Postre 2",
    href: "#",
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"],
    category:"postres"
  },
  {
    title: "Pudín de pan (completo y en porciones)",
    description: "Surtidos y deliciosos",
    image: "./public/images/pudding.webp",
    alt: "Postre 2",
    href: "#",
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"],
    category: "postres"
  },
  {
    title: "Mousse de frutas",
    description: "Surtidos y deliciosos",
    image: "./public/images/mousse.webp",
    alt: "Postre 2",
    href: "#",
    price: "RD$350.00",
    ingredients: ["Frutas frescas", "Masa quebrada", "Crema pastelera"],
    category:"postres"
  }
  //End postres
];
function sendWhatsappMessage(title, price, imageUrl){
    const PHONENUMBER = '8296469680';
    const BASEMESSAGE = `Hola Perla, me interesa hablar sobre este producto:\n- Producto: ${title}\n- Precio: ${price}`;
    const ENCODEDMESSAGE = encodeURIComponent(BASEMESSAGE);
    const WHATSAPPURL = `https://wa.me/${PHONENUMBER}?text=${ENCODEDMESSAGE}`;
    return WHATSAPPURL;
}
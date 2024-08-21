import { ProductType } from "../types/types";

export const productsDB: ProductType[] = [
  {
      id: 1,
    name: "Nike Air Max 270",
    category: "Sapatilhas",
    price: 1150.0,
    unit: 50,
    description:
      "O Nike Air Max 270 apresenta uma grande unidade Max Air para amortecimento e um cabedal de malha respirável para conforto.",
    sizes: [
      { id: "S1", name: "38" },
      { id: "S2", name: "39" },
      { id: "S3", name: "40" },
      { id: "S4", name: "41" },
    ],
    images: [
      { id: "I1", href: "/images/image_1.png" },
      { id: "I2", href: "/images/image_3.png" },
      { id: "I3", href: "/images/image_9.png" },
    ],
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    category: "Sapatilhas",
    price: 1180.0,
    unit: 55,
    description:
      "O Adidas Ultraboost 21 é projetado com uma entressola Boost para retorno de energia e um cabedal Primeknit para um ajuste semelhante a uma meia.",
    sizes: [
      { id: "S5", name: "37" },
      { id: "S6", name: "38" },
      { id: "S7", name: "39" },
      { id: "S8", name: "40" },
    ],
    images: [
      { id: "I3", href: "/images/image_2.png" },
      { id: "I4", href: "/images/image_9.png" },
    ],
  },
  {
    id: 3,
    name: "Converse All Star",
    category: "Sapatilhas",
    price: 160.0,
    unit: 24,
    description:
      "O clássico Converse Chuck Taylor All Star com um cabedal de lona e sola de borracha.",
    sizes: [
      { id: "S9", name: "35" },
      { id: "S10", name: "36" },
      { id: "S11", name: "37" },
      { id: "S12", name: "38" },
    ],
    images: [
      { id: "I5", href: "/images/image_3.png" },
      { id: "I6", href: "/images/image_1.png" },
      { id: "I7", href: "/images/image_2.png" },
    ],
  },
  {
    id: 4,
    name: "New Balance 990v5",
    category: "Sapatilhas",
    price: 1185.0,
    unit: 65,
    description:
      "O New Balance 990v5 combina estilo clássico com amortecimento e suporte modernos.",
    sizes: [
      { id: "S13", name: "38" },
      { id: "S14", name: "39" },
      { id: "S15", name: "40" },
      { id: "S16", name: "41" },
    ],
    images: [
      { id: "I7", href: "/images/image_4.png" },
      { id: "I8", href: "/images/image_2.png" },
      { id: "I9", href: "/images/image_3.png" },
    ],
  },
  {
    id: 5,
    name: "Nike Sportswear Club",
    category: "Camisetas",
    price: 250.0,
    unit: 21,
    description:
      "Uma camiseta clássica da Nike feita de algodão macio para conforto e estilo durante todo o dia.",
    sizes: [
      { id: "S17", name: "P" },
      { id: "S18", name: "M" },
      { id: "S19", name: "G" },
      { id: "S20", name: "GG" },
    ],
    images: [
      { id: "I9", href: "/images/image_5.png" },
      { id: "I10", href: "/images/image_7.png" },
    ],
  },
  {
    id: 6,
    name: "Adidas Essentials",
    category: "Camisetas",
    price: 300.0,
    unit: 25,
    description:
      "A camiseta Adidas Essentials Logo apresenta uma construção em algodão macio e um logo ousado para um visual esportivo.",
    sizes: [
      { id: "S21", name: "M" },
      { id: "S22", name: "G" },
      { id: "S23", name: "GG" },
      { id: "S24", name: "XGG" },
    ],
    images: [
      { id: "I11", href: "/images/image_6.png",},
      { id: "I12", href: "/images/image_8.png",},
      { id: "I13", href: "/images/image_5.png",},
    ],
  },
  {
    id: 7,
    name: "Puma Classic Logo",
    category: "Camisetas",
    price: 220.0,
    unit: 65,
    description:
      "Uma camiseta Puma Classic Logo feita de tecido macio com um simples logo no peito.",
    sizes: [
      { id: "S25", name: "P" },
      { id: "S26", name: "M" },
      { id: "S27", name: "G" },
      { id: "S28", name: "GG" },
    ],
    images: [
      { id: "I13", href: "/images/image_7.png" },
      { id: "I14", href: "/images/image_6.png" },
    ],
  },
  {
    id: 8,
    name: "Under Armour Tech",
    category: "Camisetas",
    price: 280.0,
    unit: 33,
    description:
      "A camiseta Under Armour Tech 2.0 é leve, com tecnologia de absorção de umidade para uso ativo.",
    sizes: [
      { id: "S29", name: "M" },
      { id: "S30", name: "G" },
      { id: "S31", name: "GG" },
      { id: "S32", name: "XGG" },
    ],
    images: [
      { id: "I15", href: "/images/image_8.png" },
      { id: "I16", href: "/images/image_6.png" },
    ],
  },
]; 
import table from "../img/table.jpg";
import sofa from "../img/sofa.jpg";
import bed from "../img/bed.jpg";
import wardrobe from "../img/wardrobe.jpg";
import lunchTable from "../img/lunch-table.jpg";
import barChair from "../img/bar-chair.jpg";
import commod from "../img/commode.jpg";
import officeChair from "../img/office-chair.jpg";
import linen from "../img/Sleeping-linen.jpg";

export const items = [
  {
    id: 1,
    title: "Coffee Table",
    img: table,
    desc: "A simple and convenient table for reading and working on the computer.",
    category: "tables",
    price: 1500,
  },
  {
    id: 2,
    title: "Corner Sofa",
    img: sofa,
    desc: "A large corner sofa for comfortable relaxation with family and friends.",
    category: "sofa",
    price: 10000,
  },
  {
    id: 3,
    title: "Double Bed",
    img: bed,
    desc: "A comfortable and stylish bed for a good night's sleep.",
    category: "bed",
    price: 5000,
  },
  {
    id: 4,
    title: "Wardrobe Closet",
    img: wardrobe,
    desc: "A large wardrobe closet with a lot of shelves and hangers.",
    category: "wardrobe",
    price: 8000,
  },
  {
    id: 5,
    title: "Dining Table",
    img: lunchTable,
    desc: "A large table for comfortable dining with family and friends.",
    category: "tables",
    price: 3000,
  },
  {
    id: 6,
    title: "Bar Chair",
    img: barChair,
    desc: "A comfortable and stylish chair for the bar area.",
    category: "chairs",
    price: 1500,
  },
  {
    id: 7,
    title: "Chest of Drawers",
    img: commod,
    desc: "A beautiful and practical chest of drawers with many compartments.",
    category: "wardrobe",
    price: 4000,
  },
  {
    id: 8,
    title: "Office Chair",
    img: officeChair,
    desc: "A comfortable and ergonomic chair for working on the computer.",
    category: "chairs",
    price: 2500,
  },
  {
    id: 9,
    title: "Bedding Set",
    img: linen,
    desc: "A bedding set for a comfortable and restful sleep.",
    category: "bed",
    price: 7000,
  },
];

export const categories = [
  {
    key: "all",
    name: "All furniture",
  },
  {
    key: "chairs",
    name: "Chairs",
  },
  {
    key: "tables",
    name: "Tables",
  },
  {
    key: "sofa",
    name: "Sofas",
  },
  {
    key: "bed",
    name: "Bedrooms",
  },
  {
    key: "wardrobe",
    name: "Wardrobes",
  },
];

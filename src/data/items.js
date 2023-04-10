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
    title: "Стіл журнальний",
    img: table,
    desc: "Простий та зручний стіл для читання та роботи за комп'ютером.",
    category: "tables",
    price: 1500,
  },
  {
    id: 2,
    title: "Диван кутовий",
    img: sofa,
    desc: "Великий кутовий диван для зручного відпочинку з родиною та друзями.",
    category: "sofa",
    price: 10000,
  },
  {
    id: 3,
    title: "Ліжко двоспальне",
    img: bed,
    desc: "Зручне та стильне ліжко для комфортного сну.",
    category: "bed",
    price: 5000,
  },
  {
    id: 4,
    title: "Шафа-купе",
    img: wardrobe,
    desc: "Велика шафа-купе з великою кількістю полиць та вішалок.",
    category: "wardrobe",
    price: 8000,
  },
  {
    id: 5,
    title: "Стіл обідній",
    img: lunchTable,
    desc: "Великий стіл для зручної їжі з родиною та друзями.",
    category: "tables",
    price: 3000,
  },
  {
    id: 6,
    title: "Стілець барний",
    img: barChair,
    desc: "Зручний та стильний стілець для барної зони.",
    category: "chairs",
    price: 1500,
  },
  {
    id: 7,
    title: "Комод",
    img: commod,
    desc: "Красивий та практичний комод з великою кількістю відділень.",
    category: "wardrobe",
    price: 4000,
  },
  {
    id: 8,
    title: "Крісло офісне",
    img: officeChair,
    desc: "Зручне та ергономічне крісло для роботи за комп'ютером.",
    category: "chairs",
    price: 2500,
  },
  {
    id: 9,
    title: "Комплект спальної білизни",
    img: linen,
    desc: "Комплект білизни для зручного та комфортного сну.",
    category: "bed",
    price: 7000,
  },
];

export const categories = [
  {
    key: "all",
    name: "Everything",
  },
  {
    key: "chairs",
    name: "Стільці",
  },
  {
    key: "tables",
    name: "Столи",
  },
  {
    key: "sofa",
    name: "Дивани",
  },
  {
    key: "bed",
    name: "Спальні",
  },
  {
    key: "wardrobe",
    name: "Шафи",
  },
];

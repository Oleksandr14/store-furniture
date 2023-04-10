import { useState } from "react";

import { useSelector } from "react-redux";

import List from "../List/List";

import { categories } from "../../data/items";

const Category = () => {
  const curItems = useSelector((state) => state.currentItems.items);
  const [currentItems, setCurrentItems] = useState(curItems);

  const chooseCategory = (category) => {
    if (category === "all") {
      return setCurrentItems(curItems);
    }
    setCurrentItems(curItems.filter((item) => item.category === category));
  };

  return (
    <>
      <div className="categories">
        {categories.map((el) => (
          <div key={el.key} onClick={() => chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
      <List items={currentItems} />
    </>
  );
};

export default Category;

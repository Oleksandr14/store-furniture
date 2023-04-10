import { useState } from "react";

import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import List from "./List/List";
import Category from "./Category/Category";

function App() {
  const curItems = useSelector((state) => state.currentItems.items);
  const [currentItems, setCurrentItems] = useState(curItems);

  const chooseCategory = (category) => {
    if (category === "all") {
      return setCurrentItems(curItems);
    }
    setCurrentItems(curItems.filter((item) => item.category === category));
  };

  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Category chooseCategory={chooseCategory} />
      <List items={currentItems} />
      <Footer />
    </div>
  );
}

export default App;

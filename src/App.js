import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const categories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [info, SetInfo] = useState(items);
  const [category, setCategories] = useState(categories);

  const filterItems = (filterCategory) => {
    if (filterCategory === "all") {
      SetInfo(items);
      return;
    }
    const newList = items.filter((item) => item.category === filterCategory);
    console.log(newList);
    SetInfo(newList);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <Categories filterCat={category} filter={filterItems} />
        </div>
        <Menu datas={info} />
      </section>
    </main>
  );
}

export default App;

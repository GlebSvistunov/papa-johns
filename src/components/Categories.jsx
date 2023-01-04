import { useState } from "react";
import React from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (index) => {
    setActiveCategory(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              onClick={() => onClickCategory(index)}
              className={activeCategory === index ? "active" : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

import React from "react";

const Categories = ({ categoryId, onChangeCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  // const onClickCategory = (index) => {
  //   setActiveCategory(index);
  // };
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={categoryId === index ? "active" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

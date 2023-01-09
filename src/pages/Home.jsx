import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { sortingTypes } from "../components/Sort";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortingId, setSortingId] = useState(0);

  const currentSorting = sortingTypes[sortingId];
  useEffect(() => {
    setIsLoading(true);
    const queryParams = {
      sortBy: currentSorting.sortBy,
      order: currentSorting.order,
      category: categoryId > 0 ? categoryId : "",
    };

    const queryParamsString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join("&");

    fetch(
      `https://63b6851a1907f863aaf8c264.mockapi.io/items?${queryParamsString}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortingId, currentSorting.sortBy, currentSorting.order]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onChangeCategory={(index) => setCategoryId(index)}
        />
        <Sort
          sortingId={sortingId}
          onChangeSort={(index) => setSortingId(index)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

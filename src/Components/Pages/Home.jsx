import React, { useEffect, useState } from "react";
import { FoodBody } from "../FoodBody/FoodBody";
import SearchBar from "../SearchBar/SearchBar";

export const Home = () => {
  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");
  const loadFoods = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    setFoods(data.meals);
  };
  useEffect(() => {
    loadFoods();
  }, []);

  console.log(query, foods);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <FoodBody foods={foods} />
    </>
  );
};

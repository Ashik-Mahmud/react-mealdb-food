import React, { useState } from "react";
import { FoodBody } from "../FoodBody/FoodBody";
import SearchBar from "../SearchBar/SearchBar";

export const Home = () => {
  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBar setQuery={setQuery} setFoods={setFoods} />
      <FoodBody foods={foods} query={query} />
    </>
  );
};

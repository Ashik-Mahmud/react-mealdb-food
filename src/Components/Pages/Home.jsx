import React from "react";
import { FoodBody } from "../FoodBody/FoodBody";
import SearchBar from "../SearchBar/SearchBar";

export const Home = () => {
  return (
    <>
      <SearchBar />
      <FoodBody />
    </>
  );
};

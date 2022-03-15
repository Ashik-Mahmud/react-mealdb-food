import React, { useState } from "react";
import styled from "styled-components";
import { FoodCard } from "./FoodCard";
export const FoodBody = ({ foods, query }) => {
  const [error] = useState("No Data Found");
  return (
    <Container className="container">
      {query ? "" : error}
      {foods === null ? (
        <span>
          No Data Found by name of <b>{query}</b>
        </span>
      ) : (
        foods.map(({ idMeal, strMeal, strArea, strCategory, strMealThumb }) => (
          <FoodCard
            key={idMeal}
            strMeal={strMeal}
            strArea={strArea}
            strCategory={strCategory}
            strMealThumb={strMealThumb}
          />
        ))
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  grid-gap: 2rem;
  & > span {
    color: crimson;
    text-align: center;
    position: absolute;
  }
`;

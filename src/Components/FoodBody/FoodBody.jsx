import React from "react";
import styled from "styled-components";
import { FoodCard } from "./FoodCard";
export const FoodBody = ({ foods }) => {
  return (
    <Container className="container">
      {foods.map(({ idMeal, strMeal, strArea, strCategory, strMealThumb }) => (
        <FoodCard
          key={idMeal}
          strMeal={strMeal}
          strArea={strArea}
          strCategory={strCategory}
          strMealThumb={strMealThumb}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  grid-gap: 2rem;
`;

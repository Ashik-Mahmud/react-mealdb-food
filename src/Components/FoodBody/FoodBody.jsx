import React from "react";
import styled from "styled-components";
import { FoodCard } from "./FoodCard";
export const FoodBody = () => {
  return (
    <Container className="container">
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  grid-gap: 2rem;
`;

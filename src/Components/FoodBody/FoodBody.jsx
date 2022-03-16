import React, { useState } from "react";
import styled from "styled-components";
import { FoodCard } from "./FoodCard";
import { FoodDetails } from "./FoodDetails";
export const FoodBody = ({ foods, query }) => {
  const [error] = useState("No Data Found");
  const [show, setShow] = useState(false);
  const [food, setFood] = useState([]);

  return (
    <>
      <Container className="container">
        {query ? "" : error}
        {foods === null ? (
          <span>
            No Data Found by name of <b>{query}</b>
          </span>
        ) : (
          foods.map(
            ({ idMeal, strMeal, strArea, strCategory, strMealThumb }) => (
              <FoodCard
                key={idMeal}
                strMeal={strMeal}
                strArea={strArea}
                strCategory={strCategory}
                strMealThumb={strMealThumb}
                setShow={setShow}
                uniqueKey={idMeal}
                setFood={setFood}
              />
            )
          )
        )}
      </Container>

      {show
        ? food.map((singleFood) => (
            <>
              <FoodDetails
                key={singleFood.idMeal}
                food={singleFood}
                setShow={setShow}
              />{" "}
            </>
          ))
        : null}
    </>
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

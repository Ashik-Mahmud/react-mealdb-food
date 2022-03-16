import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { FoodCard } from "./FoodCard";
import { FoodDetails } from "./FoodDetails";
export const FoodBody = ({ foods, query }) => {
  const [error] = useState("No Data Found");
  const [show, setShow] = useState(false);
  const [food, setFood] = useState([]);
  const transition = useTransition(show, {
    from: {
      opacity: 0,
      x: -1000,
      position: "fixed",
      left: "0%",
      top: "0%",
      width: "40%",
      background: "#ffff",
      height: "100%",
    },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -1000 },
    delay: 200,
  });
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
      {show ? <Overlay onClick={() => setShow(false)} /> : ""};
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            {food.map((singleFood) => (
              <>
                <FoodDetails key={singleFood.idMeal} food={singleFood} />
              </>
            ))}
          </animated.div>
        ) : null
      )}
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
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  left: 0%;
  top: 0%;
  backdrop-filter: blur(4px);
`;

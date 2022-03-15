import React from "react";
import styled from "styled-components";
export const FoodCard = ({ strMeal, strArea, strCategory, strMealThumb }) => {
  return (
    <Card className="card">
      <img src={strMealThumb} alt={strMeal} />
      <div className="details">
        <h3>{strMeal}</h3>
        <span>{strArea}</span>
        <div>
          <button>Show Details</button>
          <p>{strCategory}</p>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
  img {
    border-radius: 5px;
    margin-bottom: 0.6rem;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  span {
    color: #2cb577;
  }
  .details div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0.4rem 0rem;
    button {
      background: #2cb577;
      border: none;
      outline: none;
      color: #fff;
      padding: 0.3rem;
      border-radius: 3px;
      font-family: poppins;
      cursor: pointer;
      transition: all 0.5s ease;
      &:active {
        transform: translateY(5px);
      }
    }
  }
`;

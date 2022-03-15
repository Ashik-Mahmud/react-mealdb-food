import React from "react";
import styled from "styled-components";
export const FoodCard = () => {
  return (
    <Card className="card">
      <img
        src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        alt="food meal image"
      />
      <div className="details">
        <h3>Spicy Arrabiata Penne </h3>
        <span>Italian</span>
        <div>
          <button>Show Details</button>
          <p>Vegetarian</p>
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

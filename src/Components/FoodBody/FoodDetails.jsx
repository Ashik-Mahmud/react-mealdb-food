import React from "react";
import styled from "styled-components";
export const FoodDetails = ({ setShow, food }) => {
  let {
    strMeal,
    strArea,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strInstructions,
    strYoutube,
    strTags,
  } = food;
  return (
    <>
      <Overlay onClick={() => setShow(false)} />
      <Side>
        <img src={strMealThumb} alt={strMeal} />
        <div className="details">
          <h3>
            {strMeal} from {strArea}
          </h3>
          <div className="ingredients">
            {strIngredient1 ? <span>{strIngredient1}</span> : null}
            {strIngredient2 ? <span>{strIngredient2}</span> : null}
            {strIngredient3 ? <span>{strIngredient3}</span> : null}
            {strIngredient4 ? <span>{strIngredient4}</span> : null}
            {strIngredient5 ? <span>{strIngredient5}</span> : null}
          </div>
          <p>
            {strInstructions.length > 900
              ? strInstructions.substr(0, 900)
              : strInstructions}
          </p>
        </div>
        <div className="footer-area">
          <div className="tags">
            {strTags
              ? strTags.split(",").map((tag) => <span>{tag}</span>)
              : null}
          </div>
          {strYoutube ? (
            <a target={"_blank"} href={strYoutube} rel="noreferrer">
              YouTube Review
            </a>
          ) : null}
        </div>
      </Side>
    </>
  );
};
const Side = styled.div`
  width: 40%;
  position: fixed;
  right: 0%;
  top: 0%;
  z-index: 1;
  background: #fff;
  display: grid;
  grid-template-rows: 410px auto 100px;
  height: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  .details {
    padding: 1rem;
    position: relative;
    .ingredients {
      margin: 0.6rem 0rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      padding: 0.3rem;
      span {
        display: block;
        padding: 0.5rem 1rem;
        background: #f5f5f5;
        color: #000;
        cursor: pointer;
      }
    }
    p {
      margin: 1rem 0rem;
    }
  }
  .footer-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f8f8;
    padding: 0.4rem 2rem;
    .tags {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      span {
        background: #ddd;
        padding: 0.4rem 1rem;
        display: block;
        font-size: 0.9rem;
        transform: scale(1);
      }
    }
    a {
      background: #2cb577;
      color: #fff;
      padding: 0.4rem 1rem;
      border-radius: 3px;
    }
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

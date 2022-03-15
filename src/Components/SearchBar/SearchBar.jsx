import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import styled from "styled-components";
const SearchBar = ({ setFoods, setQuery }) => {
  const [value, setValue] = useState("");

  const loadSearchFoods = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    const data = await response.json();
    if (!value) return alert("Field is required.");
    setFoods(data.meals);
    setQuery(value);
  };

  return (
    <SearchArea className="container">
      <span className="logo">
        <MdFastfood />
      </span>
      <h2>
        <span>Food</span> Finder
      </h2>
      <div className="input-group">
        <input
          type="search"
          value={value}
          id="search"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Food"
        />
        <button onClick={loadSearchFoods}>Search</button>
      </div>
    </SearchArea>
  );
};

export default SearchBar;

const SearchArea = styled.div`
  text-align: center;
  padding: 2rem 0rem;
  & > span {
    font-size: 4rem;
    color: #2cb577;
    display: block;
    margin-bottom: -1rem;
  }
  h2 {
    font-size: 2rem;
    margin: 0rem 0rem;
    span {
      color: #2cb577;
      font-size: 2rem;
    }
  }

  .input-group {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: min(100% - 4rem, 500px);
    margin: 1rem auto;
    background: #f2f2f2;
    padding: 0.5rem;
    border-radius: 100px;
    input {
      width: 100%;
      font-size: 1rem;
      font-family: poppins;
      border: none;
      outline: none;
      background: transparent;
      padding: 0rem 1rem;
    }
    button {
      background: #2cb577;
      color: #fff;
      border: none;
      outline: none;
      padding: 0.6rem 2rem;
      font-family: poppins;
      border-radius: 50px;
      cursor: pointer;
      font-size: 1rem;
    }
  }
`;

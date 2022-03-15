import React from "react";
import { MdFastfood } from "react-icons/md";
import styled from "styled-components";
const SearchBar = () => {
  return (
    <SearchArea className="container">
      <span className="logo">
        <MdFastfood />
      </span>
      <h2>
        <span>Food</span> Finder
      </h2>
    </SearchArea>
  );
};

export default SearchBar;

const SearchArea = styled.div`
  text-align: center;
  padding: 2rem 0rem;
  span {
    font-size: 4rem;
    color: #2cb577;
  }
  h2 {
    font-size: 2rem;
    margin: 0rem 0rem;
    span {
      color: #2cb577;
      font-size: 2rem;
    }
  }
`;

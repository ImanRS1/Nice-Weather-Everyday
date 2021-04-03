import React, { useState } from "react";
import { fetchSearch } from "../actions/locationAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <HeaderContainer>
        <h1>Nice Weather Everyday</h1>
        <form className="search">
          <input
            type="text"
            placeholder="Enter a location..."
            value={textInput}
            onChange={inputHandler}
          />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
        </form>
      </HeaderContainer>
    </div>
  );
};

const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 20rem;
    height: 2rem;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
  button {
    height: 2.4rem;
    width: 5rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;

export default Header;

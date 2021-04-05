import React, { useState } from "react";
import { fetchSearch } from "../actions/locationAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, searchBarAnim } from "../animations";

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
        <motion.h1 variants={titleAnim} initial="hidden" animate="show">
          Nice Weather Everyday
        </motion.h1>
        <motion.form
          className="search"
          variants={searchBarAnim}
          initial="hidden"
          animate="show"
        >
          <input
            type="text"
            placeholder="Enter a location..."
            value={textInput}
            onChange={inputHandler}
          />
          <motion.button
            onClick={submitSearch}
            type="submit"
            whileHover={{
              color: "white",
              backgroundColor: "silver",
            }}
          >
            Search
          </motion.button>
        </motion.form>
      </HeaderContainer>
    </div>
  );
};

const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding: 0.5rem 0.5rem;
    width: 20rem;
    border: none;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 0.5rem 0;
    border: none;
    width: 5rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    &:focus {
      outline: none;
    }
  }
`;

export default Header;

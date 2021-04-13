import React, { useState } from "react";
import { fetchSearch } from "../actions/locationAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, searchBarAnim } from "../animations";
import BirdPicker from "./birdPicker";
import Cloud from "../images/cloud.png";
import Cloud2 from "../images/cloud2.png";
import HoverImage from "react-hover-image";

const Header = ({ dayornight }) => {
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
        <TitleContainer>
          <BirdPicker dayornight={dayornight} />
          <motion.h1 variants={searchBarAnim} initial="hidden" animate="show">
            Nice Weather <span className="lastTitleWord">Everyday</span>
          </motion.h1>
        </TitleContainer>
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
              color: "rgb(255,255,255)",
              backgroundColor: "rgba(116, 116, 116, 0.9)",
            }}
          >
            Search
            <CloudContainer>
              <img src={Cloud} />
            </CloudContainer>
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
    font: black;
    padding: 0.5rem 0;
    border: none;
    width: 5rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 2.1rem;
    }
    input {
      font-size: 0.7rem;
      text-align: center;
      width: 20rem;
    }
    button {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 650px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 5;
      position: relative;
    }
    button {
      display: block;
      border-radius: 0.8rem;
      margin: 0.8rem;
      letter-spacing: 0.15rem;
      padding: 0.2rem;
      margin-top: 1.7rem;
    }
    input {
      border-radius: 0.8rem;
      font-size: 0.7rem;
      text-align: center;
      width: 20rem;
    }
  }

  @media screen and (max-width: 415px) {
    input {
      border-radius: 0.8rem;
      font-size: 0.7rem;
      text-align: center;
      width: 70vw;
    }

    h1 {
      font-size: 1.5rem;
      margin: 1rem;
    }
  }
`;

const TitleContainer = styled(motion.div)`
  position: relative;

  @media screen and (max-width: 900px) {
    .lastTitleWord {
      display: block;
    }
  }

  @media screen and (max-width: 500px) {
    width: 20rem;
  }

  @media screen and (max-width: 500px) {
    width: 15rem;
  }
`;

const CloudContainer = styled(motion.div)`
  display: none;

  @media screen and (max-width: 650px) {
    display: block;
    position: absolute;
    z-index: -1;
    top: 2.3rem;
    left: 6rem;
    img {
      width: 9rem;
      height: 4rem;
    }
  }

  @media screen and (max-width: 415px) {
    top: 2.5rem;
    left: 25%;
  }

  @media screen and (max-width: 375px) {
    left: 22%;
  }

  @media screen and (max-width: 328px) {
    left: 20%;
  }

  @media screen and (max-width: 290px) {
    left: 15%;
  }

  @media screen and (max-width: 262px) {
    left: 12%;
  }
`;

export default Header;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Butterflies from "../images/butterfliesgif.gif";
import Owl from "../images/owlgif.gif";
import { searchBarAnim } from "../animations";

const BirdPicker = ({ dayornight }) => {
  let isDay = false;

  if (dayornight == 1) {
    isDay = true;
  } else {
    isDay = false;
  }

  return (
    <div>
      {isDay ? (
        <div>
          <BirdContainer>
            <motion.img
              className="butterflies-pic"
              src={Butterflies}
              alt="butterflies"
              variants={searchBarAnim}
              initial="hidden"
              animate="show"
            />
          </BirdContainer>
        </div>
      ) : (
        <div>
          <BirdContainer>
            <motion.img
              className="owl-pic"
              src={Owl}
              alt="an owl"
              variants={searchBarAnim}
              initial="hidden"
              animate="show"
            />
          </BirdContainer>
        </div>
      )}
    </div>
  );
};

const BirdContainer = styled(motion.div)`
  .butterflies-pic {
    position: absolute;
    top: -1rem;
    right: -3rem;
    width: 45px;
    height: 45px;
  }

  .owl-pic {
    position: absolute;
    top: -3rem;
    right: -6rem;
    width: 100px;
    height: 100px;
  }
`;

export default BirdPicker;

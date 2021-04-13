import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import wt1 from "../images/wt1.png";
import wt2 from "../images/wt2.png";

const Windy = ({ wind }) => {
  let windPower = wind;
  let roundedWindPower = Math.round(windPower);
  let animatedWindValue;

  if (roundedWindPower < 7) {
    animatedWindValue = 35;
  } else if (roundedWindPower < 18) {
    animatedWindValue = 7;
  } else if (roundedWindPower < 31) {
    animatedWindValue = 3;
  } else if (roundedWindPower < 38) {
    animatedWindValue = 2;
  } else if (roundedWindPower < 54) {
    animatedWindValue = 1;
  } else if (roundedWindPower < 75) {
    animatedWindValue = 0.5;
  } else if (roundedWindPower > 74) {
    animatedWindValue = 0.2;
  }

  return (
    <div>
      <WindContainer>
        <motion.img
          className="wt1"
          src={wt1}
          alt="wind tubine blade"
          transition={{
            duration: animatedWindValue,
            repeat: Infinity,
            ease: "linear",
          }}
          animate={{ rotate: 360 }}
        />
        <motion.img className="wt2" src={wt2} alt="wind turbine" />
      </WindContainer>
    </div>
  );
};

const WindContainer = styled(motion.div)`
margin-right: 1rem;
  width: 5rem;
  height: 5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .wt1 {
    height: 5rem;
    width: 5rem;
    position: absolute;
    top: -0.9rem;
    z-index: 1;
    left: 0.3rem;
  }

  .wt2 {
    height: 3rem;
    width: 1rem;
    position: absolute;
    bottom: 0.6rem;
    left: 2.3rem;
  }

  @media screen and (max-width: 415px) {
    margin-right: 0rem;

    .wt1 {
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 0.1rem;
    
    z-index: 1;
    left: 1.26rem;
  }
    .wt2 {
    height: 2.5rem;
    width: 1rem;
    position: absolute;
    bottom: 1.2rem;
    left: 2.3rem;
  }
  }
`;

export default Windy;

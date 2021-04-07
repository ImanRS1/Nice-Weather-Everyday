import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import wt1 from "../images/wt1.png";
import wt2 from "../images/wt2.png";

const Windy = () => {
  return (
    <div>
      <WindContainer>
        <motion.img
          className="wt1"
          src={wt1}
          alt="wind tubine blade"
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          animate={{ rotate: 360 }}
        />
        <motion.img className="wt2" src={wt2} alt="wind turbine" />
      </WindContainer>
    </div>
  );
};

const WindContainer = styled(motion.div)`
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
`;

export default Windy;

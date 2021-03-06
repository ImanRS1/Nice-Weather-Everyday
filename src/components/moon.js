import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import moonPic from "../images/moon.jpg";

const Moon = () => {
  return (
    <div>
      <MoonContainer>
        <motion.img
          className="moon-pic"
          src={moonPic}
          alt="picture of the moon"
          transition={{ duration: 105, repeat: Infinity, ease: "linear" }}
          animate={{ rotate: 360 }}
        />
      </MoonContainer>
    </div>
  );
};

const MoonContainer = styled(motion.div)`
  .moon-pic {
    box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #fff7f7,
      0 0 4vw 0.4vw #fff7f7, inset 0 0 1.5vw 0.4vw #fff7f7,
      inset 0 0 0.4vw 0.2vw #fff7f7, inset 0 0 0.5vw 0.2vw #fff7f7;
  }
`;

export default Moon;

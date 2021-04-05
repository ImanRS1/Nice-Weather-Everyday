import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import sunPic from "../images/sun.jpg";

const Sun = () => {
  return (
    <div>
      <SunContainer>
        <motion.img
          className="sun-pic"
          src={sunPic}
          alt="picture of the sun"
          transition={{
            repeatType: "reverse",
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          initial={{
            boxShadow:
              "0 0 0.1vw 0.4vw #fded0f, 0 0 0.4vw 0.6vw #ffd67f, 0 0 4vw 0.9vw #ffc342, inset 0 0 1.5vw 0.4vw #f1c604, inset 0 0 0.4vw 0.2vw #f1c604, inset 0 0 0.5vw 0.2vw #f1c604",
          }}
          animate={{
            boxShadow:
              "0 0 0.1vw 0.4vw #fded0f, 0 0 0.4vw 0.6vw #ffd67f, 0 0 4vw 2.9vw #ffc342, inset 0 0 1.5vw 0.4vw #f1c604, inset 0 0 0.4vw 0.2vw #f1c604, inset 0 0 0.5vw 0.2vw #f1c604",
          }}
        />
      </SunContainer>
    </div>
  );
};

const SunContainer = styled(motion.div)`
  /* .sun-pic {
    box-shadow: 0 0 0.1vw 0.4vw #fded0f, 0 0 0.4vw 0.6vw #ffd67f,
      0 0 4vw 0.9vw #ffc342, inset 0 0 1.5vw 0.4vw #f1c604,
      inset 0 0 0.4vw 0.2vw #f1c604, inset 0 0 0.5vw 0.2vw #f1c604;
  } */
`;

export default Sun;

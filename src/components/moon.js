import React, { useState } from "react";
import { fetchSearch } from "../actions/locationAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import moonPic from "../images/moon.jpg";

const Moon = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      <MoonContainer>
        <img className="moon-pic" src={moonPic} />
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

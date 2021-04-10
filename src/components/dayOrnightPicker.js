import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Moon from "../components/moon";
import Sun from "../components/sun";
import backGroundPicNight from "../images/n1.jpg";
import backGroundPicDay from "../images/d1.png";
import Owl from "../images/owlgif.gif";

const DayOrNightPicker = ({ dayornight }) => {
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
          <BackGroundPic>
            <img className="background-pic" src={backGroundPicDay} alt="background during day"/>
          </BackGroundPic>
          <PlanetPic>
            <div className="planet-container">
              <Sun />
            </div>
          </PlanetPic>
        </div>
      ) : (
        <div>
          <BackGroundPic>
            <img className="background-pic" src={backGroundPicNight} alt="background during night" />
          </BackGroundPic>
          <PlanetPic>
            <div className="planet-container">
              <Moon />
            </div>
          </PlanetPic>
         {/*  <BirdContainer>
          <img className="bird-pic" src={Owl} alt="an owl" />
          </BirdContainer> */}
        </div>
      )}
    </div>
  );
};

const BackGroundPic = styled(motion.div)`
  .background-pic {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`;

const PlanetPic = styled(motion.div)`
  .planet-container {
    img {
      border-radius: 50%;
      box-sizing: border-box;
      position: absolute;
      top: -70px;
      right: -79px;
      width: 300px;
      height: 300px;
    }
  }
`;

const BirdContainer = styled(motion.div)`
    img {
      position: absolute;
      top: 8rem;
      right: 30%;
      width: 100px;
      height: 100px;
    }
`;

export default DayOrNightPicker;

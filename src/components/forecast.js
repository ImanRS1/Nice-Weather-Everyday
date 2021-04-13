import sunriseImage from "../images/sunrise.svg";
import sunsetImage from "../images/sunset.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Forecast = ({ sunrise, sunset, date, weather, condition }) => {
  return (
    <motion.div>
      <ForeCastItem>
        <p>{date}</p>
        <div> Temperature: {weather}&#176;C.</div>
        <SunRiseAndSet>
          <img src={sunriseImage} alt="sunrise time" />
          {sunrise}
          <img src={sunsetImage} alt="sunset time" />
          {sunset}
        </SunRiseAndSet>
        <Condition>
          <img src={condition.icon} alt={condition.text} />
          {condition.text}
        </Condition>
      </ForeCastItem>
    </motion.div>
  );
};

const Condition = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const ForeCastItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;

  padding: 0.5rem;
  background-color: rgba(5, 5, 5, 0.35);
  border-radius: 1rem;
  box-shadow: -10px 15px 18px #000000;
  height: 10rem;
  width: 15rem;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }

  @media screen and (max-width: 900px) {
    width: 29rem;
    height: 7rem;
    flex-direction: row;
    flex-wrap: wrap;

    p {
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 650px) {
    width: 80vw;
    height: auto;
  }
`;

const SunRiseAndSet = styled(motion.div)`
  display: flex;
  align-items: center;

  img {
    margin: 0.1rem;
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
  }
`;

export default Forecast;

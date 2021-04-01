import { searchLocationURL, defaultLocationURL } from "../api";
import axios from "axios";

export const loadLocation = () => async (dispatch) => {
  const current = await axios.get(defaultLocationURL());
  const location = await axios.get(defaultLocationURL());

  dispatch({
    type: "FETCH_LOCATION",
    payload: {
      location: location.data.location,
      current: current.data.current,
    },
  });
};

export const fetchSearch = (location) => async (dispatch) => {
  const weatherCurrent = await axios.get(searchLocationURL(location));
  const weatherLocation = await axios.get(searchLocationURL(location));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      location: weatherLocation.data.location,
      current: weatherCurrent.data.current,
    },
  });
};

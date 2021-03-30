import { searchLocationURL } from "../api";
import axios from "axios";

export const loadLocation = () => async (dispatch) => {
  const current = await axios.get(searchLocationURL());
  const location = await axios.get(searchLocationURL());

  dispatch({
    type: "FETCH_LOCATION",
    payload: {
      location: location.data.location,
      current: current.data.current,
    },
  });
};

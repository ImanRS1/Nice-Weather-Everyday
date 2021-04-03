const initState = {
  location: [],
  current: [],
  searched: [],
};

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LOCATION":
      return {
        ...state,
        location: action.payload.location,
        current: action.payload.current,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searchedLocation: action.payload.location,
        searchedCurrent: action.payload.current,
        searchedForecast: action.payload.forecast,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default locationReducer;

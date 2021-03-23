const initState = {
  location: [],
};

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LOCATION":
      return { ...state, location: action.payload.location };
    default:
      return { ...state };
  }
};

export default locationReducer;
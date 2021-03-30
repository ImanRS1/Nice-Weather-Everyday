const initState = {
  location: [],
  current: [],
};

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LOCATION":
      return { ...state, 
        location: action.payload.location,
        current: action.payload.current,
      };
    default:
      return { ...state };
  }
};

export default locationReducer;
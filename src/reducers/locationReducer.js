const initState = {
  location: [],
};

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LOCATION":
      return { ...state };
    default:
      return { ...state };
  }
};


//Setting up redux, 3
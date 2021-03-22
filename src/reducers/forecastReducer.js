const initState = {
    forecast: [],
  };
  
  const forecastReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_FORECAST":
        return {...state};
      default:
        return { ...state };
    }
  };

  export default forecastReducer;
  
  
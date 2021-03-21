import {combineReducers} from "redux";
import locationReducer from "./locationReducer";
import forecastReducer from "./forecastReducer";

const rootReducer = combineReducers({
    location: locationReducer,
    forecast: forecastReducer,
});

export default rootReducer;
import axios from "axios";
import {searchLocationURL} from "../api";


export const loadLocation = () => async (dispatch) =>{
    const location = await axios.get(searchLocationURL())
    dispatch({
        type: "FETCH_LOCATION",
        payload: {
            location: location.data
        }
    })
}
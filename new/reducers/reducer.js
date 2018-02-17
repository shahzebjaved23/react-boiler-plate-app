import { combineReducers } from "redux";
import { userReducer } from "./userReducer";


// Add all the reducers in the app to combine reducers
const reducers = combineReducers({
	users: userReducer
})

export default reducers;
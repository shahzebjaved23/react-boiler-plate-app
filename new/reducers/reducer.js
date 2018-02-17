import { combineReducers } from "redux";
import { usersReducer } from "./userReducer";


// Add all the reducers in the app to combine reducers
export const reducers = combineReducers({
	users: usersReducer
})


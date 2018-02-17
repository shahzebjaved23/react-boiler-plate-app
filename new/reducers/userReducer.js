import { GET_USERS } from "../actions/userActions";
import { initialState } from "../store/state";

export const usersReducer = (state=initialState, action) => {
	switch(action.type){
		case GET_USERS.type : {
			let newState = Object.assign({}, state)
			return newState;
		}

		default:{
			return state
		}
	}
	return state
}
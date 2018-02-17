import { GET_USERS } from "../actions/userActions";

export userReducer = (state, action) => {
	switch(action.type){
		case GET_USERS.type : {
			let newState = Object.assign({}, state)
			return newState;
		}

		default:{
			return state
		}
	}
}
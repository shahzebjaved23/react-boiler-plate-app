import { createStore } from "redux";
import { reducers } from "../reducers/reducer";
import { initialState } from "../state/state";

const store = createStore(reducers, initialState)

export default store;
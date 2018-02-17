import { createStore } from "redux";
import { reducers } from "../reducers/reducer";
import { initialState } from "./state";

export const store = createStore(reducers, initialState)

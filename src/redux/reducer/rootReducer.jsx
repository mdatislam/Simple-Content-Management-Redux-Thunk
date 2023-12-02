import { combineReducers } from "redux";
import { contentReducer } from "./contentReducer";

export const rootReducer= combineReducers({
    contents:contentReducer
})
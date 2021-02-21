import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postReducer from "./post";
const reducer = combineReducers({
  posts: postReducer,
});
const store = configureStore({
  reducer,
});

export default store;

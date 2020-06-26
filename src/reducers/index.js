import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import authedUserReducer from "./auth";

export default combineReducers({
  authedUser: authedUserReducer,
  loadingBar: loadingBarReducer,
});

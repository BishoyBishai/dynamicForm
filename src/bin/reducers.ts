import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import { AnyAction } from "redux";
import { fromReducers } from "../containers/form/reducer";
export const reducers = combineReducers({
  fromReducers
});

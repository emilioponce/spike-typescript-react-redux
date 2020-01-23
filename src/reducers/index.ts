import { combineReducers } from "redux";

import age from "./age";
import doubleAge from "./doubleAge";

const rootReducer = combineReducers({
  age,
  doubleAge
});

export default rootReducer;

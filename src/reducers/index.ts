import { combineReducers } from "redux";

import age from "./age";
import doubleAge from "./doubleAge";
import extraData from "./extraData";

const rootReducer = combineReducers({
  age,
  doubleAge,
  extraData
});

export default rootReducer;

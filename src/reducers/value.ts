import { Action, PAGE_SET_DATA, PAGE_DATA_CLEAR } from "../actions/types";
import { State } from "./types";

const defaultState: State = {
  value: ""
};

const value = (state = defaultState, action: Action): State => {
  switch (action.type) {
    case PAGE_SET_DATA:
      return action.payload;
    case PAGE_DATA_CLEAR:
      return defaultState;
    default:
      return state;
  }
};

export default value;

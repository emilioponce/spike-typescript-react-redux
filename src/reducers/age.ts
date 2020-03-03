import { Action, ActionTypes } from "../actions/types";
import { Age } from "./types";

const initialState: Age = { value: 0 };

const age = (state = initialState, action: Action): Age => {
  switch (action.type) {
    case ActionTypes.PAGE_SET_AGE:
      return action.payload;
    case ActionTypes.PAGE_CLEAR:
      return initialState;
    // example of case that will not pass the typescript check, as the actionType do not exist
    // case ActionTypes.PAGE_NOT_USED:
    // return state;
    default:
      return state;
  }
};

export default age;

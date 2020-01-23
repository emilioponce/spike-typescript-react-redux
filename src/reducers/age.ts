import { Action, ActionTypes } from "../actions/types";
import { Age } from "./types";

const initialState: Age = {
  message: { value: 0 }
};

const age = (state = initialState, action: Action): Age => {
  switch (action.type) {
    case ActionTypes.PAGE_SET_AGE:
      return {
        message: action.payload
      };
    case ActionTypes.PAGE_CLEAR:
      return initialState;
    // case ActionTypes.PAGE_NOT_USED:
    //   return state;
    default:
      return state;
  }
};

export default age;

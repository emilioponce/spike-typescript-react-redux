import { Action, ActionTypes } from "../actions/types";
import { Age } from "./types";

const initialState: Age = { value: 0 };

const doubleAge = (state = initialState, action: Action): Age => {
  switch (action.type) {
    case ActionTypes.PAGE_SET_DOUBLE_AGE: {
      const doubleAge = action.payload.value * 2;
      return { value: doubleAge };
    }
    case ActionTypes.PAGE_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default doubleAge;

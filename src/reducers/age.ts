import { Action, ActionTypes } from "../actions/types";
import { State } from "./types";

const initialState: State = {
  message: { value: 0 }
};

const age = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.PAGE_SET_DATA: {
      return {
        message: action.payload
      };
    }
    case ActionTypes.PAGE_DATA_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default age;

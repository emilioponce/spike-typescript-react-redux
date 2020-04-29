import { Action, ActionTypes } from "../actions/types";
import { ExtraData } from "./types";

// if we put a value: null, We will have a typeCheck error
const initialState: ExtraData = {
  description: "",
  language: "",
  country: { id: -1, name: "", region: { id: -1, name: "" } },
  permissions: [],
};

const description = (state = initialState, action: Action): ExtraData => {
  switch (action.type) {
    // If we put the wrong action (Example: ActionTypes.PAGE_SET_DOUBLE_AGE) we will have a typecheck error for the payload
    case ActionTypes.PAGE_SET_EXTRA_DATA: {
      return action.payload;
    }
    case ActionTypes.PAGE_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default description;

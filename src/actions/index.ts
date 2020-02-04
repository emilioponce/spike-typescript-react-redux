import { Action, ActionTypes } from "./types";
import { Age, ExtraData } from "../reducers/types";

export const pageSetAge = (age: Age): Action => {
  return {
    type: ActionTypes.PAGE_SET_AGE,
    // If we put another name to "age" we will have a typeCheck error
    payload: age
  };
};

export const pageSetDoubleAge = (age: Age): Action => {
  return {
    type: ActionTypes.PAGE_SET_DOUBLE_AGE,
    payload: age
  };
};

export const pageSetExtraData = (extraData: ExtraData): Action => {
  return {
    type: ActionTypes.PAGE_SET_EXTRA_DATA,
    payload: extraData
  };
};

export const pageClear = (): Action => ({
  type: ActionTypes.PAGE_CLEAR
});

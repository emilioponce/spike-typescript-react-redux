import { Action, ActionTypes, Message } from "./types";

export const pageSetAge = ({ value }: Message): Action => {
  return {
    type: ActionTypes.PAGE_SET_AGE,
    payload: { value }
  };
};

export const pageSetDoubleAge = ({ value }: Message): Action => {
  return {
    type: ActionTypes.PAGE_SET_DOUBLE_AGE,
    payload: { value }
  };
};

export const pageClear = (): Action => ({
  type: ActionTypes.PAGE_CLEAR
});

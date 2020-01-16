import { Action, ActionTypes, Message } from "./types";

export const pageSetData = ({ value }: Message): Action => {
  return {
    type: ActionTypes.PAGE_SET_DATA,
    payload: { value }
  };
};

export const pageDataClear = (): Action => ({
  type: ActionTypes.PAGE_DATA_CLEAR
});

import { Value, Action, PAGE_SET_DATA, PAGE_DATA_CLEAR } from "./types";

export const pageSetData = ({ value }: Value): Action => ({
  type: PAGE_SET_DATA,
  payload: { value }
});

export const pageDataClear = (): Action => ({
  type: PAGE_DATA_CLEAR
});

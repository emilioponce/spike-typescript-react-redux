import { Age, ExtraData } from "../reducers/types";

export enum ActionTypes {
  PAGE_CLEAR = "PAGE_CLEAR",
  PAGE_SET_AGE = "PAGE_SET_AGE",
  PAGE_SET_DOUBLE_AGE = "PAGE_SET_DOUBLE_AGE",
  PAGE_SET_EXTRA_DATA = "PAGE_SET_EXTRA_DATA"
}

interface PageSetAge {
  type: ActionTypes.PAGE_SET_AGE;
  payload: Age;
}

// Re-using the AGE message type
interface PageSetDoubleAge {
  type: ActionTypes.PAGE_SET_DOUBLE_AGE;
  payload: Age;
}

// Using a more complex type for the message (object)
interface PageSetExtraData {
  type: ActionTypes.PAGE_SET_EXTRA_DATA;
  payload: ExtraData;
}

interface PageClear {
  type: ActionTypes.PAGE_CLEAR;
}

export type Action =
  | PageSetAge
  | PageSetDoubleAge
  | PageSetExtraData
  | PageClear;

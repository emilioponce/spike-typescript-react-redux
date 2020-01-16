export enum ActionTypes {
  PAGE_DATA_CLEAR = "PAGE_DATA_CLEAR",
  PAGE_SET_DATA = "PAGE_SET_DATA"
}

export interface Message {
  value: number;
}

interface PageSetData {
  type: ActionTypes.PAGE_SET_DATA;
  payload: Message;
}

interface PageDataClear {
  type: ActionTypes.PAGE_DATA_CLEAR;
}

export type Action = PageSetData | PageDataClear;

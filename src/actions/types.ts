export enum ActionTypes {
  PAGE_CLEAR = "PAGE_CLEAR",
  PAGE_SET_AGE = "PAGE_SET_AGE",
  PAGE_SET_DOUBLE_AGE = "PAGE_SET_DOUBLE_AGE"
}

export interface Message {
  value: number;
}

interface PageSetAge {
  type: ActionTypes.PAGE_SET_AGE;
  payload: Message;
}

interface PageSetDoubleAge {
  type: ActionTypes.PAGE_SET_DOUBLE_AGE;
  payload: Message;
}

interface PageClear {
  type: ActionTypes.PAGE_CLEAR;
}

export type Action = PageSetAge | PageSetDoubleAge | PageClear;

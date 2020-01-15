export const PAGE = "PAGE";
export const PAGE_SET_DATA = `${PAGE}@SET_DATA`;
export const PAGE_DATA_CLEAR = `${PAGE}@DATA_CLEAR`;

export type Value = { value: number };

interface PageSetData {
  type: typeof PAGE_SET_DATA;
  payload: Value;
}

interface PageDataClear {
  type: typeof PAGE_DATA_CLEAR;
}

export type Action = PageSetData | PageDataClear;

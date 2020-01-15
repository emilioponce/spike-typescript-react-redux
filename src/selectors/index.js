import get from "lodash/get";

export const getValue = state => get(state, "value") || "";

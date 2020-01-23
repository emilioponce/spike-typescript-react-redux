import get from "lodash/get";

import { Age } from "../reducers/types";

export const getAge = (state: Age) => get(state, "age.message.value", null);

export const getDoubleAge = (state: Age) =>
  get(state, "doubleAge.message.value", null);

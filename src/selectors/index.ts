import get from "lodash/get";

import { Age, ExtraData } from "../reducers/types";
import { ExtraDataProjection } from "./types";

export const getAge = (state: Age) => get(state, "age.value", null);

export const getDoubleAge = (state: Age) => get(state, "doubleAge.value", null);

// in the case of projections, we can do a custom type
export const getExtraData = (state: ExtraData): ExtraDataProjection => {
  const extraData = get(state, "extraData", null);
  return {
    description: extraData.description,
    language: extraData.language,
    country: extraData.country.name,
    region: extraData.country.region.name,
    permissions: extraData.permissions,
  };
};

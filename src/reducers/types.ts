import rootReducer from "./index";
import { Message } from "../actions/types";

export interface Age {
  message: Message;
}

export type RootState = ReturnType<typeof rootReducer>;

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const configureStore = () => {
  const initialState = {};
  const enhancers = [];
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }

  const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  return { store };
};

export default configureStore;

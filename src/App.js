import React from "react";
import { Provider } from "react-redux";

import Page from "./pages/Page";
import configureStore from "./store/index";

import "./App.css";

const { store } = configureStore();

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Page />
    </Provider>
  </div>
);

export default App;

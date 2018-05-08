import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/index";
import { Provider } from "react-redux";
import { store } from "./bin/store";
import "./style.scss"
/* ================================================== */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

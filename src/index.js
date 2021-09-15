import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/popper.js/dist/esm/popper.min.js";
import "../node_modules/popper.js/dist/umd/popper.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/Store/Store.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

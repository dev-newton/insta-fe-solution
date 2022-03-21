import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/styles/main.scss";

const appElement = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appElement
);

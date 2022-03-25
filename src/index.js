import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Landing />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

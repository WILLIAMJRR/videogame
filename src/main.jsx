import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//redux
import { Provider } from "react-redux";
//router
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { My_Provider } from "./Components/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <My_Provider>
        <App />
      </My_Provider>
    </BrowserRouter>
  </React.StrictMode>
);

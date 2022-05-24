import React from "react";
import ReactDOM from "react-dom/client";
import Dictionary from "./Dictionary";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Dictionary />
    </div>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion.js";
import Accounts from "./data/Accounts.js";
import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Accordion accounts={Accounts} />
  </React.StrictMode>,
  document.getElementById("root")
);

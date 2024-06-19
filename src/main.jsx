import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import RoutesApp from "./routes/router";
import './main.css'
{/* import "./styles/global-style.css";
import "./styles/index.css";*/ } 
// alora
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <App />
    <RoutesApp/>
  </React.StrictMode>,
);

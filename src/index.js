import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import Router from "./components/Router.js";
import MenuRutas from "./components/MenuRutas.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuRutas />
    <hr />
    <Router />
    <hr />
    <h2>Pie de página</h2>
  </StrictMode>
);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/sass/main.scss"
import App from "../src/App";


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
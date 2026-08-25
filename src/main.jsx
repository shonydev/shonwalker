import React from "react";
import { createRoot } from "react-dom/client";
import IntroduccionFengShui from "../content/articles/introduccion-feng-shui";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntroduccionFengShui />
  </React.StrictMode>,
);
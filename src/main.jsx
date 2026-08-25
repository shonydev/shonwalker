import React from "react";
import { createRoot } from "react-dom/client";
import SenalArticulo from "../articulo.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SenalArticulo />
  </React.StrictMode>,
);
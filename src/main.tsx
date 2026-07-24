import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SiteApp } from "./App";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteApp />
  </StrictMode>,
);

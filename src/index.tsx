import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Global } from "./globalStyles";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <Global /> <App />
  </>
);

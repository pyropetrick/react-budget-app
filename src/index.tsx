import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import {
  AppContextProvider,
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
} from "./context";
import { Global } from "./globalStyles";

const providers = [
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
  ExpensesContextProvider,
];

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <Global />{" "}
    <AppContextProvider components={providers}>
      <App />
    </AppContextProvider>
  </>,
);

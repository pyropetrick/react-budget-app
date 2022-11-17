import { createContext, useContext } from "react";
import { IBudgetContext } from "../../types/types";

export const BudgetContext = createContext<IBudgetContext | null>(null);
export const useBudget = () => useContext(BudgetContext);

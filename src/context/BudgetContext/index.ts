import { createContext, useContext } from "react";
import { IBudgetContext } from "../../types/types";

export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);
export const useBudgetContext = () => useContext(BudgetContext);

import { useState } from "react";
import { IBudgetContext, IChildrenContext } from "../";
import { createContext, useContext } from "react";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);
export const useBudgetContext = () => useContext(BudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setBudget: (value) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: value,
      }));
    },
  }));
  return budgetContext;
};
export const BudgetContextProvider = ({ children }: IChildrenContext) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};

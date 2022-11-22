import { useState } from "react";
import { BudgetContext } from "..";
import { IBudgetContext, IChildrenContext } from "../../types/types";

export const BudgetContextProvider = ({ children }: IChildrenContext) => {
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
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};

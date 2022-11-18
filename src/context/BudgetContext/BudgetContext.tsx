import { useState } from "react";
import { BudgetContext } from "..";
import { Currency } from "../../config/currency";
import { IBudgetContext, IChildrenContext } from "../../types/types";

export const BudgetContextProvider = ({ children }: IChildrenContext) => {
  const useBudgetContextValue = () => {
    const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
      budget: 0,
      currency: Currency.USD,
      setBudget: (value) => {
        setBudgetContext((ctx) => ({
          ...ctx,
          budget: value,
        }));
      },
      setCurrency: (value) => {
        setBudgetContext((ctx) => ({
          ...ctx,
          currency: value,
        }));
      },
    }));
    return budgetContext;
  };
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};

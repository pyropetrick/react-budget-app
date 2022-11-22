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
      remaining: 0,
      setRemaining: () => {
        setBudgetContext((ctx) => ({
          ...ctx,
          remaining: ctx.budget - ctx.spending,
        }));
      },
      spending: 0,
      setSpending: (value) => {
        setBudgetContext((ctx) => ({
          ...ctx,
          spending: ctx.spending + value,
        }));
      },
    }));
    return budgetContext;
  };
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};

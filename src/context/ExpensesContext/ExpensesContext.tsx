import { useState } from "react";
import { ExpensesContext } from "..";
import { IChildrenContext, IExpense, IExpenseContext } from "../../types/types";

export const ExpensesContextProvider = ({ children }: IChildrenContext) => {
  const useExpensesContextValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpenseContext>(() => ({
      expenses: [],
      setNewExpense: (expense: IExpense) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses, expense],
        }));
      },
      deleteExpense: (id) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: ctx.expenses.filter((expense) => expense.id !== id),
        }));
      },
      searchValue: "",
      searchExpense: (name) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          searchValue: name.toLowerCase(),
        }));
      },
    }));
    return expensesContext;
  };

  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};

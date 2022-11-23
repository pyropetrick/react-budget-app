import { createContext, useContext } from "react";
import { IExpenseContext } from "../../types/types";

export const ExpensesContext = createContext<IExpenseContext>({} as IExpenseContext);
export const useExpensesContext = () => useContext(ExpensesContext);

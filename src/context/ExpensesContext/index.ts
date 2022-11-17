import { createContext, useContext } from "react";
import { IExpenseContext } from "../../types/types";

export const ExpensesContext = createContext<IExpenseContext | null>(null);
export const useExpenses = () => useContext(ExpensesContext);

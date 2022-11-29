import { ReactNode } from "react";
import { ICurrencyOption, IExpense } from "../../types/types";

export interface IChildrenContext {
  children: ReactNode;
}
export interface IBudgetContext {
  budget: number;
  setBudget: (value: number) => void;
}
export interface IExpenseContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}
export interface ICurrencyContext {
  currentCurrency: ICurrencyOption;
  currencies: ICurrencyOption[];
  setCurrency: (option: ICurrencyOption) => void;
}

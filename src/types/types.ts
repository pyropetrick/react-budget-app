import { ReactNode } from "react";

export interface IExpense {
  name: string;
  price: number;
  id: string;
}
export interface IBudgetContext {
  budget: number;
  remaining: number;
  spending: number;
  setRemaining: () => void;
  setSpending: (value: number) => void;
  setBudget: (value: number) => void;
}
export interface IExpenseContext {
  expenses: IExpense[] | [];
  searchValue: string;
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
  searchExpense: (name: string) => void;
}
export interface ICurrencyContext {
  currency: string;
  setCurrency: (value: string) => void;
}
export interface ISelectOption {
  value: string;
  label: string;
}

export interface IFormData {
  name: string;
  price: number;
}

export interface IChildrenContext {
  children: ReactNode;
}

import { ReactNode } from "react";
import { Currency } from "../config";

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
  currentCurrency: ICurrencyOption;
  currencies: ICurrencyOption[];
  setCurrency: (option: ICurrencyOption) => void;
}
export interface ICurrencyOption {
  value: Currency;
  label: keyof typeof Currency;
}

export interface IFormData {
  name: string;
  price: number;
}

export interface IChildrenContext {
  children: ReactNode;
}

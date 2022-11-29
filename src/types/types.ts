import { Currency } from "../config";

export interface IExpense {
  name: string;
  price: number;
  id: string;
}

export interface ICurrencyOption {
  value: Currency;
  label: keyof typeof Currency;
}

export interface IFormData {
  name: string;
  price: number;
}

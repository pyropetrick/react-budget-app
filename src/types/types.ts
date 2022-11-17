export interface IExpense {
  name: string;
  price: number;
  id: string;
}
export interface IBudgetContext {
  budget: number;
  setBudget: (value: number) => void;
  currency: string;
  setCurrency: (value: string) => void;
}
export interface IExpenseContext {
  expenses: IExpense[];
  setExpenses: (value: any) => any;
}
export interface IFormContext {
  name: string;
  setName: (value: string) => void;
  price: number;
  setPrice: (value: number) => void;
}
export interface ISelectOption {
  value: string;
  label: string;
}

export interface IFormData {
  name: string;
  price: number;
}

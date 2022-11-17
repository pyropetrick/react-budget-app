export interface IExpense {
  title: string;
  price: number;
}
export interface IBudgetContext {
  budget: number;
  setBudget: (value: number) => void;
  currency: string;
  setCurrency: (value: string) => void;
}
export interface IExpenseContext {
  expenses: IExpense[];
  setExpenses: (value: IExpense[]) => void;
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

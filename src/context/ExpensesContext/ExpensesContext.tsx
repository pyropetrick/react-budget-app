import { ReactNode, useState } from "react";
import { ExpensesContext } from "..";
import { IExpense } from "../../types/types";

export const ExpensesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};

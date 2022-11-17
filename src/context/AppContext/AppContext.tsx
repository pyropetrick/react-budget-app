import { ReactNode } from "react";
import {
  AppContext,
  BudgetContextProvider,
  ExpensesContextProvider,
  FormContextProvider,
} from "..";

interface IProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: IProps) => {
  return (
    <AppContext.Provider value={null}>
      <BudgetContextProvider>
        <FormContextProvider>
          <ExpensesContextProvider>{children}</ExpensesContextProvider>
        </FormContextProvider>
      </BudgetContextProvider>
    </AppContext.Provider>
  );
};

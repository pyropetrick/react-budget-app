import {
  AppContext,
  BudgetContextProvider,
  ExpensesContextProvider,
  FormContextProvider,
} from "..";
import { IChildrenContext } from "../../types/types";

export const AppContextProvider = ({ children }: IChildrenContext) => {
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

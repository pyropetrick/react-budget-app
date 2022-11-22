import {
  AppContext,
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
} from "..";
import { IChildrenContext } from "../../types/types";

export const AppContextProvider = ({ children }: IChildrenContext) => {
  return (
    <AppContext.Provider value={null}>
      <BudgetContextProvider>
        <CurrencyContextProvider>
          <ExpensesContextProvider>{children}</ExpensesContextProvider>
        </CurrencyContextProvider>
      </BudgetContextProvider>
    </AppContext.Provider>
  );
};

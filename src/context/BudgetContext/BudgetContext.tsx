import { ReactNode, useState } from "react";
import { BudgetContext } from "..";
import { Currency } from "../../config/currency";

export const BudgetContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [budget, setBudget] = useState<number>(0);
  const [currency, setCurrency] = useState<string>(Currency.USD);
  return (
    <BudgetContext.Provider
      value={{ budget, setBudget, currency, setCurrency }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

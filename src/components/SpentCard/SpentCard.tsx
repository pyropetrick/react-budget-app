import { useCurrencyContext, useExpensesContext } from "../../context";
import { IExpense } from "../../types/types";
import { StyledSpentCard } from "./styles";

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const spending: any = expenses.reduce((total: any, expense: any) => total + expense.price, 0);

  return (
    <StyledSpentCard>
      Spent so far: {currentCurrency.value}
      {spending}
    </StyledSpentCard>
  );
};

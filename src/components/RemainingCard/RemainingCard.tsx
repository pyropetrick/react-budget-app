import { useBudgetContext, useCurrencyContext, useExpensesContext } from "../../context";
import { StyledRemainingCard } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const remaining =
    budget - expenses.reduce((total: number, { price }: { price: number }) => total + price, 0);
  if (remaining < 0) {
    return (
      <StyledRemainingCard danger>
        Overspending by {currentCurrency.value}
        {Math.abs(remaining)}
      </StyledRemainingCard>
    );
  }
  return (
    <StyledRemainingCard>
      Remaining: {currentCurrency.value}
      {remaining}
    </StyledRemainingCard>
  );
};

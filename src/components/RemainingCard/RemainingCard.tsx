import { useBudgetContext, useCurrencyContext } from "../../context";
import { StyledRemainingCard } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { remaining } = useBudgetContext();
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

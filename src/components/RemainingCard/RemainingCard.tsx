import { useBudgetContext, useCurrencyContext } from "../../context";
import { StyledRemainingCard } from "./styles";

export const RemainingCard = () => {
  const { currency } = useCurrencyContext();
  const { remaining } = useBudgetContext();
  if (remaining < 0) {
    return (
      <StyledRemainingCard danger>
        Overspending by {currency}
        {Math.abs(remaining)}
      </StyledRemainingCard>
    );
  }
  return (
    <StyledRemainingCard>
      Remaining: {currency}
      {remaining}
    </StyledRemainingCard>
  );
};

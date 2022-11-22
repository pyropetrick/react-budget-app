import { useBudget, useCurrencyContext } from "../../context";
import { StyledSpentCard } from "./styles";

export const SpentCard = () => {
  const { currency } = useCurrencyContext();
  const { spending } = useBudget();

  return (
    <StyledSpentCard>
      Spent so far: {currency}
      {spending}
    </StyledSpentCard>
  );
};

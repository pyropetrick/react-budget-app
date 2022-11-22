import { useBudget, useCurrencyContext } from "../../context";
import { StyledBudgetCard, StyledButton, StyledInput, StyledText } from "./styles";

export const BudgetCard = () => {
  const { setBudget, budget } = useBudget();
  const { currency } = useCurrencyContext();
  const handleInput = (event: any) => {
    setBudget(event.target.value);
  };
  return (
    <StyledBudgetCard>
      {!budget ? (
        <>
          <StyledInput onKeyPress={handleInput} placeholder="Enter Budget ..." type="number" />
          <StyledButton>Save</StyledButton>
        </>
      ) : (
        <>
          <StyledText>
            Budget: {budget} {currency}
          </StyledText>
          <StyledButton>Edit</StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};

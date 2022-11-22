import { useBudget } from "../../context";
import { StyledBudgetCard, StyledButton, StyledInput, StyledText } from "./styles";

export const BudgetCard = () => {
  const { setBudget, budget, currency } = useBudget();
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

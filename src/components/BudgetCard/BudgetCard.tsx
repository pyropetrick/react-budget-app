import { useBudget, useCurrencyContext } from "../../context";
import { useInput } from "../../hooks/useInput";
import { StyledBudgetCard, StyledButton, StyledInput, StyledText } from "./styles";
import { useToogle } from "../../hooks/useToogle";

export const BudgetCard = () => {
  const { setBudget, budget, setRemaining } = useBudget();
  const { currency } = useCurrencyContext();
  const inputBudget = useInput();
  const [isBudgetActive, setBudgetActive] = useToogle();
  const handleSave = () => {
    setBudget(+inputBudget.value);
    setRemaining();
    setBudgetActive();
  };
  const handleEdit = () => setBudgetActive();

  return (
    <StyledBudgetCard>
      {!isBudgetActive ? (
        <>
          <StyledInput {...inputBudget} placeholder="Enter Budget ..." type="number" />
          <StyledButton onClick={handleSave}>Save</StyledButton>
        </>
      ) : (
        <>
          <StyledText>
            Budget: {currency}
            {budget}
          </StyledText>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};

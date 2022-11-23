import { useEffect, useState } from "react";
import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput, useToogle } from "../../hooks/";
import { StyledBudgetCard, StyledButton, StyledInput, StyledText } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";

export const BudgetCard = () => {
  const { setBudget, budget, setRemaining } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();
  const inputBudget = useInput();
  const [isBudgetActive, toogleBudgetActive] = useToogle();
  const [isDisableSave, setDisableSave] = useState<boolean>(true);
  const handleSave = () => {
    setBudget(+inputBudget.value);
    setRemaining();
    toogleBudgetActive();
  };
  const handleEdit = () => toogleBudgetActive();
  const debounceBudget = useDebounce(inputBudget.value, 500);
  useEffect(
    () => (debounceBudget && +debounceBudget > 0 ? setDisableSave(false) : setDisableSave(true)),
    [debounceBudget],
  );

  return (
    <StyledBudgetCard>
      {!isBudgetActive ? (
        <>
          <StyledInput {...inputBudget} placeholder="Enter Budget ..." type="number" />
          <StyledButton onClick={handleSave} disabled={isDisableSave}>
            Save
          </StyledButton>
        </>
      ) : (
        <>
          <StyledText>
            Budget: {currentCurrency.value}
            {budget}
          </StyledText>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};

import { CustomSelect, Title, BudgetCard, RemainingCard, SpentCard } from "../";
import { StyledBudget, StyledHead } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <StyledHead>
        <Title label="budget app" />
        <CustomSelect />
      </StyledHead>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBudget>
  );
};

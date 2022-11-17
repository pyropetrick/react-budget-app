import { CustomSelect, Title, BudgetCard, RemainingCard, SpentCard } from "../";

export const Budget = () => {
  return (
    <div>
      <CustomSelect />
      <Title label="budget app" />
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </div>
  );
};

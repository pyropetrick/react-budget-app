import { CustomSelect, Title, BudgetCard, RemainingCard, SpentCard } from "../";

export const Budget = () => {
  return (
    <div>
      <CustomSelect />
      <Title />
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </div>
  );
};

import { useBudget } from "../../context";

export const BudgetCard = () => {
  const budget = useBudget();
  const handleInput = (event: any) => {
    budget?.setBudget(event.target.value);
  };
  if (budget?.budget)
    return (
      <div>
        Budget: {budget.budget}
        {budget.currency}
      </div>
    );
  return (
    <div>
      <input
        onKeyPress={handleInput}
        placeholder="Enter Budget"
        type="number"
      />
    </div>
  );
};

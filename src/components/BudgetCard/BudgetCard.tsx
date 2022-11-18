import { useBudget } from "../../context";

export const BudgetCard = () => {
  const { setBudget, budget, currency } = useBudget();
  const handleInput = (event: any) => {
    setBudget(event.target.value);
  };
  if (budget)
    return (
      <div>
        Budget: {budget}
        {currency}
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

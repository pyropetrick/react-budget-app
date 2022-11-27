import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context";
import { SpendingItem } from "..";
import { StyledList } from "./styles";

export const SpendingList = () => {
  const { expenses, searchValue } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  useEffect(() => {
    setFilteredExpenses(expenses.filter((exp) => exp.name.toLowerCase().includes(searchValue)));
  }, [searchValue, expenses]);
  if (!filteredExpenses.length) {
    return <p> Ohhhhh... I dont see any items 🙈</p>;
  }
  return (
    <StyledList>
      {filteredExpenses.map(({ name, price, id }) => (
        <SpendingItem key={id} name={name} price={price} id={id} />
      ))}
    </StyledList>
  );
};

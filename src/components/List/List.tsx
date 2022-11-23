import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context";
import { ListItem } from "../";
import { StyledList } from "./styles";

export const List = () => {
  const { expenses, searchValue } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  useEffect(() => {
    setFilteredExpenses(expenses.filter((exp) => exp.name.toLowerCase().includes(searchValue)));
  }, [searchValue, expenses]);
  return (
    <StyledList>
      {filteredExpenses.map(({ name, price, id }) => (
        <ListItem key={id} name={name} price={price} id={id} />
      ))}
    </StyledList>
  );
};

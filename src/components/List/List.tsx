import { useEffect, useState } from "react";
import { useExpenses } from "../../context";
import { ListItem } from "../ListItem/ListItem";
import { StyledList } from "./styles";

export const List = () => {
  const { expenses, searchValue } = useExpenses();
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

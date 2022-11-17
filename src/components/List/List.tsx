import { useEffect } from "react";
import { useExpenses, useFormContext } from "../../context";
import { ListItem } from "../ListItem/ListItem";

export const List = () => {
  const expense = useExpenses();
  return (
    <ul>
      {expense?.expenses.map(({ name, price, id }) => (
        <ListItem key={id} name={name} price={price} />
      ))}
    </ul>
  );
};

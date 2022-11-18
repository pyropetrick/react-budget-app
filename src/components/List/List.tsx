import { useExpenses, useFormContext } from "../../context";
import { ListItem } from "../ListItem/ListItem";

export const List = () => {
  const { filteredExpense } = useExpenses();
  return (
    <ul>
      {filteredExpense.map(({ name, price, id }) => (
        <ListItem key={id} name={name} price={price} />
      ))}
    </ul>
  );
};

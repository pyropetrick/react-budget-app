import { useExpenses, useFormContext } from "../../context";
import { ListItem } from "../ListItem/ListItem";
import { StyledList } from "./styles";

export const List = () => {
  const { expenses } = useExpenses();
  return (
    <StyledList>
      {expenses.map(({ name, price, id }) => (
        <ListItem key={id} name={name} price={price} />
      ))}
    </StyledList>
  );
};

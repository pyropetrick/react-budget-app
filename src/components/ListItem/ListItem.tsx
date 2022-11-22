import { useCurrencyContext, useExpenses } from "../../context";
import { StyledItemBadge, StyledItemDelete, StyledItemText, StyledListItem } from "./styles";
interface IProps {
  name: string;
  price: number;
  id: string;
}

export const ListItem = ({ name, price, id }: IProps) => {
  const { currency } = useCurrencyContext();
  const { deleteExpense } = useExpenses();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <StyledListItem>
      <StyledItemText>{name}</StyledItemText>
      <StyledItemBadge>
        {currency}
        {price}
      </StyledItemBadge>
      <StyledItemDelete onClick={handleDelete} />
    </StyledListItem>
  );
};

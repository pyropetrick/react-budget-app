import { StyledItemBadge, StyledItemDelete, StyledItemText, StyledListItem } from "./styles";
interface IProps {
  name: string;
  price: number;
}

export const ListItem = ({ name, price }: IProps) => {
  return (
    <StyledListItem>
      <StyledItemText>{name}</StyledItemText>
      <StyledItemBadge>${price}</StyledItemBadge>
      <StyledItemDelete>X</StyledItemDelete>
    </StyledListItem>
  );
};

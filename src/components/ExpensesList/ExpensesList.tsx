import { ExpenseItem } from "..";
import { StyledList } from "./styles";
import { IExpense } from "../../types/types";

interface IProps {
  expenseList: IExpense[];
}

export const ExpensesList = ({ expenseList }: IProps) => {
  if (!expenseList.length) {
    return <p> Ohhhhh... I dont see any items 🙈</p>;
  }
  return (
    <StyledList>
      {expenseList.map(({ name, price, id }) => (
        <ExpenseItem key={id} name={name} price={price} id={id} />
      ))}
    </StyledList>
  );
};

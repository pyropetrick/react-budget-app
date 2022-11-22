import { Search, Title, List } from "../";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title label="expenses" />
      <Search />
      <List />
    </StyledExpenses>
  );
};

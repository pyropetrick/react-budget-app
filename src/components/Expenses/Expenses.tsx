import { Search, Title, SpendingList } from "../";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title label="expenses" />
      <Search />
      <SpendingList />
    </StyledExpenses>
  );
};

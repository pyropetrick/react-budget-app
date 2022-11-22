import { useExpenses } from "../../context";
import { useInput } from "../../hooks/useInput";
import { StyledSearch } from "./styles";

export const Search = () => {
  const { searchExpense } = useExpenses();
  const search = useInput<string>("");

  return <StyledSearch placeholder="search ..." type="search" {...search} />;
};

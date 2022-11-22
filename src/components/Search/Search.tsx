import { useEffect } from "react";
import { useExpenses } from "../../context";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { StyledSearch } from "./styles";

export const Search = () => {
  const { searchExpense } = useExpenses();
  const search = useInput();
  const debounceValue = useDebounce<string>(search.value, 700);
  useEffect(() => {
    searchExpense(debounceValue);
  }, [debounceValue, searchExpense]);

  return <StyledSearch placeholder="search ..." type="search" {...search} />;
};

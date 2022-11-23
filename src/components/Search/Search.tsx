import { useEffect } from "react";
import { useExpensesContext } from "../../context";
import { useDebounce, useInput } from "../../hooks";
import { StyledSearch } from "./styles";

export const Search = () => {
  const { searchExpense } = useExpensesContext();
  const search = useInput();
  const debounceValue = useDebounce<string>(search.value, 700);
  useEffect(() => {
    searchExpense(debounceValue);
  }, [debounceValue, searchExpense]); // тут не понял почему у меня линтер требовал searchExpense

  return <StyledSearch placeholder="search ..." type="search" {...search} />;
};

import { ChangeEvent } from "react";
import { useExpenses } from "../../context";

export const Search = () => {
  const { searchExpense } = useExpenses();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => searchExpense(event.target.value);

  return <input type="search" onChange={handleSearch} />;
};

import { useExpenses } from "../../context";

export const Search = () => {
  const expense = useExpenses();

  return <input type="search" />;
};

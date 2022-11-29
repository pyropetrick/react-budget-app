import { useEffect, useState } from "react";
import { Search, Title, ExpensesList } from "../";
import { useExpensesContext } from "../../context";
import { useDebounce, useInput } from "../../hooks";
import { IExpense } from "../../types/types";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>([]);
  const debounceValue = useDebounce<string>(search.value, 700);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((exp) => exp.name.toLowerCase().includes(debounceValue.toLowerCase())),
    );
  }, [debounceValue, expenses]);

  return (
    <StyledExpenses>
      <Title label="expenses" />
      <Search {...search} />
      <ExpensesList expenseList={filteredExpenses} />
    </StyledExpenses>
  );
};

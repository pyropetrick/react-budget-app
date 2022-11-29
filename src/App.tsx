import { Budget, Expenses, Form } from "./components";
import { AppWrapper } from "./globalStyles";

export const App = () => {
  return (
    <AppWrapper>
      <Budget />
      <Expenses />
      <Form />
    </AppWrapper>
  );
};

import { Budget, Expenses, Form } from "./components";
import { Wrapper } from "./wrapper";

export const App = () => {
  return (
    <Wrapper>
      <Budget />
      <Expenses />
      <Form />
    </Wrapper>
  );
};

import { Budget, Expenses, Form } from "./components";
import { AppContextProvider } from "./context";
import { Wrapper } from "./wrapper";

export const App = () => {
  return (
    <AppContextProvider>
      <Wrapper>
        <Budget />
        <Expenses />
        <Form />
      </Wrapper>
    </AppContextProvider>
  );
};

import { ReactNode, useState } from "react";
import { FormContext } from "..";

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  return (
    <FormContext.Provider value={{ name, setName, price, setPrice }}>
      {children}
    </FormContext.Provider>
  );
};

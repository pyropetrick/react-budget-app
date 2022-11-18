import { createContext, useContext } from "react";
import { IFormContext } from "../../types/types";

export const FormContext = createContext<IFormContext>({} as IFormContext);
export const useFormContext = () => useContext(FormContext);

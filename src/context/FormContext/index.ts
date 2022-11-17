import { createContext, useContext } from "react";
import { IFormContext } from "../../types/types";

export const FormContext = createContext<IFormContext | null>(null);
export const useForm = () => useContext(FormContext);

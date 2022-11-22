import { createContext, useContext } from "react";
import { ICurrencyContext } from "../../types/types";

export const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);
export const useCurrencyContext = () => useContext(CurrencyContext);

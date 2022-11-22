import { useState } from "react";
import { CurrencyContext } from "..";
import { Currency } from "../../config/currency";
import { IChildrenContext, ICurrencyContext } from "../../types/types";

export const CurrencyContextProvider = ({ children }: IChildrenContext) => {
  const useCurrencyContextValue = () => {
    const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
      currency: Currency.USD,
      setCurrency: (value) => {
        setCurrencyContext((ctx) => ({
          ...ctx,
          currency: value,
        }));
      },
    }));
    return currencyContext;
  };
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};

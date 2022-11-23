import { useState } from "react";
import { CurrencyContext } from "..";
import { Currency } from "../../config";
import { IChildrenContext, ICurrencyContext, ICurrencyOption } from "../../types/types";

const options: ICurrencyOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.BYN, label: "BYN" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

export const CurrencyContextProvider = ({ children }: IChildrenContext) => {
  const useCurrencyContextValue = () => {
    const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
      currentCurrency: options[0],
      currencies: options,
      setCurrency: (option) => {
        setCurrencyContext((ctx) => ({
          ...ctx,
          currentCurrency: option,
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

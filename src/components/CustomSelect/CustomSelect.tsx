import { FC } from "react";
import Select, { OnChangeValue } from "react-select";
import { Currency } from "../../config";
import { useCurrencyContext } from "../../context";
import { ISelectOption } from "../../types/types";
import { selectStyles } from "./styles";

export const CustomSelect: FC = () => {
  const { setCurrency, currency } = useCurrencyContext();
  const options: ISelectOption[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.BYN, label: "BYN" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBR, label: "GBR" },
  ];
  const getValue = (value: string): ISelectOption | undefined =>
    options.find((option) => option.value === value);
  const handleSelect = (newValue: OnChangeValue<ISelectOption, boolean>) =>
    setCurrency((newValue as ISelectOption).value);
  return (
    <Select
      styles={selectStyles}
      options={options}
      value={getValue(currency)}
      onChange={handleSelect}
    />
  );
};

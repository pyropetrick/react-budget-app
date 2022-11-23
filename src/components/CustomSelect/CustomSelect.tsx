import Select, { ActionMeta, OnChangeValue } from "react-select";
import { Currency } from "../../config";
import { useCurrencyContext } from "../../context";
import { ISelectOption } from "../../types/types";
import { selectStyles } from "./styles";

export const CustomSelect = () => {
  const { setCurrency, currency } = useCurrencyContext();
  const options: ISelectOption[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.BYN, label: "BYN" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBR, label: "GBR" },
  ];
  const getValue = (value: string | undefined): ISelectOption | undefined =>
    options.find((option) => option.value === value);
  const handleSelect = (
    newValue: OnChangeValue<ISelectOption, boolean>,
    actionMeta: ActionMeta<ISelectOption>,
  ) => setCurrency((newValue as ISelectOption).value);
  return (
    <Select
      styles={selectStyles}
      options={options}
      value={getValue(currency)}
      onChange={handleSelect}
    />
  );
};

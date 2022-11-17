import Select, { ActionMeta, OnChangeValue } from "react-select";
import { Currency } from "../../config/currency";
import { useBudget } from "../../context";
import { ISelectOption } from "../../types/types";

export const CustomSelect = () => {
  const budget = useBudget();
  const options: ISelectOption[] = [
    { value: Currency.BYN, label: "BYN" },
    { value: Currency.USD, label: "USD" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBR, label: "GBR" },
  ];
  const getValue = (value: string | undefined): ISelectOption | undefined =>
    options.find((option) => option.value === value);
  const handleSelect = (
    newValue: OnChangeValue<ISelectOption, boolean>,
    actionMeta: ActionMeta<ISelectOption>
  ) => budget?.setCurrency((newValue as ISelectOption).value);
  return (
    <Select
      options={options}
      value={getValue(budget?.currency)}
      onChange={handleSelect}
    />
  );
};

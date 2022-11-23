import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context";
import { selectStyles } from "./styles";

export const CustomSelect = () => {
  const { setCurrency, currencies, currentCurrency } = useCurrencyContext();
  const handleSelect = (option: SingleValue<typeof currentCurrency>) => {
    if (option) {
      setCurrency(option);
    }
  };
  return (
    <Select
      styles={selectStyles}
      options={currencies}
      value={currentCurrency}
      onChange={handleSelect}
      isMulti={false}
    />
  );
};

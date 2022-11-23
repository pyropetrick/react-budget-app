import { StylesConfig } from "react-select";
import { ICurrencyOption } from "../../types/types";

export const selectStyles: StylesConfig<ICurrencyOption> = {
  control: (styles) => ({
    ...styles,
    fontSize: "12px",
    fontWeight: "400",
    border: "1px solid #EEEEEE",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "#EEEEEE",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "#EEEEEE",
    padding: "3px",
  }),
};

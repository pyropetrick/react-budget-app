import { StylesConfig } from "react-select";
import { ISelectOption } from "../../types/types";

export const selectStyles: StylesConfig<ISelectOption> = {
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

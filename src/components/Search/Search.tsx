import { ChangeEvent, useEffect } from "react";
import { StyledSearch } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Search = ({ value, onChange }: IProps) => {
  return <StyledSearch placeholder="search ..." type="search" value={value} onChange={onChange} />;
};

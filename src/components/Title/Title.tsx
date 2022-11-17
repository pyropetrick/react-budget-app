import { StyledTitle } from "./styles";

interface IProps {
  label: string;
}

export const Title = ({ label }: IProps) => {
  return <StyledTitle>{label}</StyledTitle>;
};

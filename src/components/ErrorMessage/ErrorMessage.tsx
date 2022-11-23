import { StyledErrorMessage } from "./styles";

interface IProps {
  message?: string;
}

export const ErrorMessage = ({ message }: IProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

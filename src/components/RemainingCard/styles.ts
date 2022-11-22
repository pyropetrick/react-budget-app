import styled from "styled-components";
import { Colors } from "../../config/colors";

interface IProps {
  danger?: boolean;
}

export const StyledRemainingCard = styled.div`
  background-color: ${(props: IProps) => (props.danger ? Colors.Red : Colors.Viol)};
  color: ${(props: IProps) => (props.danger ? "#FFF" : "black")};
  border-radius: 10px;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

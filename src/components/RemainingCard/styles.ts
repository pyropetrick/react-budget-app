import styled from "styled-components";
import { Color } from "../../config";

interface IProps {
  $isOverSpending: boolean;
}

export const StyledRemainingCard = styled.div`
  background-color: ${(props: IProps) => (props.$isOverSpending ? Color.Red : Color.Viol)};
  color: ${(props: IProps) => (props.$isOverSpending ? "#FFF" : "black")};
  border-radius: 10px;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

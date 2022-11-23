import styled from "styled-components";
import { Color } from "../../config";

export const StyledSpentCard = styled.div`
  background-color: ${Color.Pink};
  border-radius: 10px;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

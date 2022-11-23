import styled from "styled-components";
import { Colors } from "../../config";

export const StyledErrorMessage = styled.p`
  color: ${Colors.Red};
  @media (max-width: 390px) {
    font-size: 13px;
  }
`;

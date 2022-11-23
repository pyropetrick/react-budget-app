import styled from "styled-components";
import { Color } from "../../config";

export const StyledErrorMessage = styled.p`
  color: ${Color.Red};
  @media (max-width: 390px) {
    font-size: 13px;
  }
`;

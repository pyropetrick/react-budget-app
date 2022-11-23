import styled from "styled-components";
import { Colors } from "../../config";

export const StyledSubmit = styled.button`
  padding: 15px 0;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: ${Colors.DarkBlue};
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Blue};
  }
`;

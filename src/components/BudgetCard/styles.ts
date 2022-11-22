import styled from "styled-components";
import { Colors } from "../../config/colors";

export const StyledBudgetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  background-color: ${Colors.Blue};
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 20px;
  font-weight: 500;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus-visible {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 5px 20px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

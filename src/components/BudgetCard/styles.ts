import styled from "styled-components";
import { Color } from "../../config";

export const StyledBudgetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  background-color: ${Color.Blue};
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
  &:disabled {
    &:hover {
      background-color: #fff;
      cursor: default;
    }
  }
  @media (max-width: 390px) {
    font-size: 13px;
  }
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

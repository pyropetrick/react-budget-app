import styled from "styled-components";

export const StyledSearch = styled.input`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  padding: 20px 15px;
  &::placeholder {
    color: #999999;
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 390px) {
    font-size: 12px;
    padding: 13px 10px;
  }
`;

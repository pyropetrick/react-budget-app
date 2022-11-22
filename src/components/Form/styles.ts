import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInputForm = styled.input`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  padding: 20px 15px;
  margin-bottom: 20px;
  &::placeholder {
    color: #999999;
  }
  &:focus-visible {
    outline: none;
  }
`;

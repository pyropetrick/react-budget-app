import styled from "styled-components";

export const StyledList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  &::scroll {
    display: none;
  }
`;

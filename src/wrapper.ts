import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 20px;
  width: 500px;
  @media (max-width: 390px) {
    width: 300px;
  }
`;

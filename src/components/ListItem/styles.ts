import styled from "styled-components";
import { Colors } from "../../config/colors";

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr;
  grid-template-rows: 20px;
  padding: 15px 20px;
  align-items: center;
  border-bottom: 2px solid #ccd5ff;
`;

export const StyledItemText = styled.p`
  text-transform: lowercase;
  font-weight: 400;
`;

export const StyledItemBadge = styled.span`
  justify-self: center;
  background-color: ${Colors.DarkBlue};
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 12px;
  color: #fff;
`;

export const StyledItemDelete = styled.span`
  justify-self: center;
  color: red;
`;

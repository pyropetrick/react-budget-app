import styled from "styled-components";
import { Color } from "../../config/color";

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr;
  grid-template-rows: 20px;
  padding: 15px 20px;
  align-items: center;
  border-bottom: 2px solid #ccd5ff;
  @media (max-width: 390px) {
    font-size: 12px;
    padding: 12px 15px;
  }
`;

export const StyledItemText = styled.p`
  text-transform: lowercase;
  font-weight: 400;
`;

export const StyledItemBadge = styled.span`
  justify-self: center;
  background-color: ${Color.DarkBlue};
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 12px;
  color: #fff;
`;

export const StyledItemDelete = styled.span`
  justify-self: center;
  display: block;
  width: 10px;
  height: 10px;
  --weight: 1px;
  --aa: 1px; /* anti-aliasing */
  --color: red;
  border-radius: 3px;
  background: linear-gradient(
      45deg,
      transparent calc(50% - var(--weight) - var(--aa)),
      var(--color) calc(50% - var(--weight)),
      var(--color) calc(50% + var(--weight)),
      transparent calc(50% + var(--weight) + var(--aa))
    ),
    linear-gradient(
      -45deg,
      transparent calc(50% - var(--weight) - var(--aa)),
      var(--color) calc(50% - var(--weight)),
      var(--color) calc(50% + var(--weight)),
      transparent calc(50% + var(--weight) + var(--aa))
    );
  cursor: pointer;
`;

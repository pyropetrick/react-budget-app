import { StyledRemainingCard } from "./styles";

export const RemainingCard = () => {
  const budget = 300;
  if (!budget) {
    return <StyledRemainingCard danger>Overspending by $100</StyledRemainingCard>;
  }
  return <StyledRemainingCard>Remaining: {budget} </StyledRemainingCard>;
};

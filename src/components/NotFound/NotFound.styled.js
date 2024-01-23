import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  span {
    color: var(--home-blue);
    font-family: "Manrope SemiBold";
    font-size: 56px;
    line-height: 1.5;
    text-transform: uppercase;
    margin-bottom: 26px;
  }
  p {
    color: var(--descr-text);
    font-family: "Manrope Medium";
    font-size: 24px;
    line-height: 1.33;
  }
  h2 {
    color: var(--descr-text);
    font-family: "Manrope Medium";
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 30px;
  color: var(--home-accent);
  font-family: "Manrope SemiBold";
  line-height: 1.5;
  &:hover {
    text-decoration: underline;
  }
`;

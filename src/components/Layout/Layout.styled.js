import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--white);
  border-bottom: 7px solid var(--home-blue);
  font-family: "Manrope Medium";
  text-transform: uppercase;
  text-decoration: none;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 30px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  img {
    width: 40px;
    object-fit: contain;
  }
  nav {
    display: flex;
    justify-content: space-around;
    width: 90%;
    a {
      font-weight: 700px;
      color: var(--home-blue);
      &:hover,
      &:focus {
        color: var(--button-active);
        text-decoration: underline;

        transition: all 0.4s ease-in-out;
      }
    }
  }
`;

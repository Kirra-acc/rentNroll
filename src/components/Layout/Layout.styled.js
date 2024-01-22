import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--button);
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
  }
`;

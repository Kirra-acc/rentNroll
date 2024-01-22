import styled from "styled-components";

export const StyledHomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledFrontDesc = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: var(--home-accent);
    font-family: "Manrope Regular";
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 18px;
  }
  h1 {
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
    font-size: 18px;
    line-height: 1.33;
    width: 600px;
    margin-bottom: 70px;
  }
  button {
    border: none;
    outline: transparent;
    background: var(--home-blue);
    border-radius: 6px;
    padding: 10px 23px;
    color: var(--white);
    font-family: "Manrope Medium";
    font-size: 18px;
    line-height: 1.33;
    height: 60px;
    text-transform: uppercase;
    &:hover,
  &:focus {
    background-color: var(--button);
  }
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  overflow: hidden;
  div {
    background-color: var(--home-blue);
    padding: 20px;
    p {
      padding: 10px;
      color: var(--white);
      font-family: "Manrope Medium";
      font-size: 18px;
      line-height: 1.33;
      span {
        font-size: 24px;
      }
    }
    & > :first-child {
      border-bottom: 1px solid var(--accent-filter-text);
    }
  }
`;

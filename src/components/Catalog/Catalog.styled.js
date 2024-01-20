import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;

  & .flex-container {
    display: flex;
    justify-content: space-between;
  }
`;
export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;

  width: 1184px;
  height: 426px;
`;

export const CatalogListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 274px;
  /* overflow: hidden; */
  img {
    margin-bottom: 8px;
    border-radius: 14px;
  }
  /* div {
    display: flex;
    gap: 87px;
  } */
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 87px;
  margin-bottom: 8px;
  h2 {
    font-family: "Manrope Medium";
    font-size: 16px;
    line-height: 1.5;
    color: var(--descr-text);
    span {
      color: var(--button);
    }
  }
`;

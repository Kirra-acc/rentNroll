import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
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
  img {
    margin-bottom: 8px;
    border-radius: 14px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

export const Characteristics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-family: "Manrope Regular";
  font-size: 12px;
  color: var(--accent-descr-text);
  margin-bottom: 28px;
`;

export const ItemButton = styled.button`
display: flex;
width: 274px;
height: 44px;
padding: 12px 99px;
justify-content: center;
align-items: center;
border-radius: 12px;
background-color: var(--button);
border: none;
outline: transparent;

font-family: "Manrope SemiBold";
font-size: 14px;
line-height: 1.43;
color: var(--white);
&:hover,
&:focus {
    background-color: var(--button-active);
  }
`
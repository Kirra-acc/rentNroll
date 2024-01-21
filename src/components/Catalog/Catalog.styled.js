import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;

  width: 1184px;
  height: 426px;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 274px;
  position: relative;
  img {
    margin-bottom: 8px;
    border-radius: 14px;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  h1 {
    font-family: "Manrope Medium";
    font-size: 16px;
    line-height: 1.5;
    color: var(--descr-text);
    span {
      color: var(--button);
    }
  }
`;

export const StyledDesc = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-family: "Manrope Regular";
  font-size: 12px;
  color: var(--accent-descr-text);
  margin-bottom: 28px;
`;

export const StyledItemBtn = styled.button`
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
`;

export const StyledFavBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  outline: transparent;
  border: none;
  background-color: transparent;
  fill: transparent;
  &:hover svg {
    fill: var(--button-active);
    /* stroke: var(--button-active); */
  }
`;

export const selectStyle = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "var(--accent-filter)",
    width: "224px",
    height: "48px",
    border: "none",
    paddingLeft: "18px",
    paddingRight: "18px",
    paddingTop: "14px",
    paddingBottom: "14px",
    display: "flex",
    cursor: "pointer",
    //   padding: '14px 89px 14px 18px',
    //   gap: '32px',
    outline: "none",
    borderRadius: "14px",
    boxShadow: "none",
  }),
  singleValue: (styles) => ({
    ...styles,
    fontFamily: "Manrope Medium",
    color: "var(--descr-text)",
    fontSize: "18px",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontFamily: "Manrope Medium",
    color: "var(--descr-text)",
    fontSize: "18px",
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "14px",
    backgroundColor: "var(--white)",
    overflow: "hidden",
    color: "var(--filter-dropdown-text)",
    fontFamily: "Manrope Medium",
    fontSize: "16px",

    "&::before": {
      background: "var(--white)",
      content: '""',
      filter: "blur(50px)",
      position: "absolute",
      inset: "0%",
      zIndex: "-1",
    },
  }),
  option: (styles, { isFocused, isSelected }) => {
    if (isFocused) {
      return {
        ...styles,
        color: "var(--descr-text)",
      };
    } else if (isSelected) {
      return {
        ...styles,
        color: "var(--descr-text)",
      };
    } else {
      return {
        ...styles,
      };
    }
  },
};

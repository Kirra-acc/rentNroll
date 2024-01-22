import React from "react";
import { StyledItemBtn } from "../Catalog/Catalog.styled";

const CustomButton = ({ title, onClick }) => {
  return (
    <StyledItemBtn type="button" onClick={onClick}>
      {title}
    </StyledItemBtn>
  );
};

export default CustomButton;

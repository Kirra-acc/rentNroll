import React from "react";
import { StyledModalBtn } from "../PopUp/PopUp.styled";

const CustomButton = ({ title, onClick }) => {
  return (
    <StyledModalBtn type="button" onClick={onClick}>
      {title}
    </StyledModalBtn>
  );
};

export default CustomButton;

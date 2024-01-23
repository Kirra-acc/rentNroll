import React from "react";
import mainLogo from "../../../public/vite.svg";
import { StyledNavLink, StyledNotFound } from "./NotFound.styled";

const NotFound = () => {
  return (
    <StyledNotFound>
      <img src={mainLogo} alt="Main-logo" width={500} />
      <span>Rent&Roll</span>
      <h2>
        Oops.. This page was not found. Go back to &nbsp;
        <StyledNavLink to={"/"}>Home page</StyledNavLink>
      </h2>
    </StyledNotFound>
  );
};

export default NotFound;

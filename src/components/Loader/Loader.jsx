import React from "react";
import { Hourglass } from "react-loader-spinner";
import { StyledLoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <Hourglass
        visible={true}
        height="180"
        width="180"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;

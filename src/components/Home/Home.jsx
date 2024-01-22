import React from "react";
import frontImg from "../../assets/noul-bmw-x5.webp";
import { StyledCard, StyledFrontDesc, StyledHomeSection } from "./Home.styled";
import { StyledContainer } from "../Catalog/Catalog.styled";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <StyledContainer>
      <StyledHomeSection>
        <StyledFrontDesc>
          <a href="https://github.com/Kirra-acc/rentNroll">Details for you</a>
          <h1>premium car rentals</h1>
          <p>
            Rent the desired car model and discover the true essence of a
            premium car rental experience
          </p>
          <NavLink to={"/catalog"}>
            <button type="button">
              Visit our Catalog <FaArrowRight />{" "}
            </button>
          </NavLink>
        </StyledFrontDesc>
        <StyledCard>
          <img src={frontImg} alt="BMW X5" />
          <div>
            <p>The best offer from Rent&Roll - New BMW X5</p>
            <p>
              just for <span>$120</span> per 1 hour
            </p>
          </div>
        </StyledCard>
      </StyledHomeSection>
    </StyledContainer>
  );
};

export default Home;

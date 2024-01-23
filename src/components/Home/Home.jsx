import React from "react";
import frontImg from "../../assets/noul-bmw-x5.webp";
import {
  StyledCard,
  StyledFrontDesc,
  StyledHomeGuide,
  StyledHomeSection,
} from "./Home.styled";
import { StyledContainer } from "../Catalog/Catalog.styled";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import {
  PiNumberSquareOneThin,
  PiNumberSquareFourThin,
  PiNumberSquareThreeThin,
  PiNumberSquareTwoThin,
} from "react-icons/pi";

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

      <StyledHomeGuide>
        <h2>
          Car rental service provides customers with the following
          opportunities:
        </h2>
        <ul>
          <li>
            <PiNumberSquareOneThin size={60} />
            <p>Open our site in the browser</p>
          </li>
          <li>
            <PiNumberSquareTwoThin size={60} />
            <p>Check out our catalog</p>
          </li>
          <li>
            <PiNumberSquareThreeThin size={60} />
            <p>Choose the car you are most interested in</p>
          </li>
          <li>
            <PiNumberSquareFourThin size={60} />
            <p>Contact us by clicking the Rental Car button</p>
          </li>
        </ul>
      </StyledHomeGuide>
    </StyledContainer>
  );
};

export default Home;

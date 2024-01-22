import { NavLink, Outlet } from "react-router-dom";
import { StyledHeader } from "./Layout.styled";
import { StyledContainer } from "../Catalog/Catalog.styled";
import mainLogo from "../../../public/vite.svg";

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <NavLink to={"/"}>
            <img src={mainLogo} alt="Main-logo" />
          </NavLink>

          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/catalog"}>Catalog</NavLink>
            <NavLink to={"/favorites"}>Favorites</NavLink>
          </nav>
        </StyledContainer>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Layout;

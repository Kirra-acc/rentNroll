import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/catalog"}>Catalog</NavLink>
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;

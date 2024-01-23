import React from "react";

import { useSelector } from "react-redux";
import { favoriteItems } from "../../redux/selectors";
import CatalogItem from "../Catalog/CatalogItem";
import { StyledContainer, StyledList } from "../Catalog/Catalog.styled";
import { StyledNotify } from "./Favorites.styled";

const Favorites = () => {
  const favorites = useSelector(favoriteItems);

  return (
    <StyledContainer>
      <StyledList>
        {favorites?.length === 0 && (
          <StyledNotify>
            You have not selected any cars as favorites yet
          </StyledNotify>
        )}
        {favorites?.map((item, index) => {
          return <CatalogItem key={index} item={item} />;
        })}
      </StyledList>
    </StyledContainer>
  );
};

export default Favorites;

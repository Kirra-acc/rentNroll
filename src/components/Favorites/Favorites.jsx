import React from "react";

import { useSelector } from "react-redux";
import { favoriteItems } from "../../redux/selectors";
import CatalogItem from "../Catalog/CatalogItem";
import { StyledContainer, StyledList } from "../Catalog/Catalog.styled";

const Favorites = () => {
  const favorites = useSelector(favoriteItems);

  return (
    <StyledContainer>
      <StyledList>
        {favorites?.length === 0 && (
          <h2>You have not selected any cars as favorites yet</h2>
        )}
        {favorites?.map((item, index) => {
          return <CatalogItem key={index} item={item} />;
        })}
      </StyledList>
    </StyledContainer>
  );
};

export default Favorites;

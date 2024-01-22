import React from 'react'

import { useSelector } from "react-redux";
import { favoriteItems } from "../../redux/selectors";
import CatalogItem from "../Catalog/CatalogItem";
import { StyledContainer, StyledList } from '../Catalog/Catalog.styled';

const Favorites = () => {
  const favorites = useSelector(favoriteItems);

  return (
    <StyledContainer>
      <StyledList>
      {favorites?.length === 0 && (
            <h2>
              You have not yet added the car to
              <span style={{ color: "blue" }}>Favorites</span>.
            </h2>
          )}
          {favorites?.map((item, index) => {
            return <CatalogItem key={index} item={item} />;
          })}
      </StyledList>
      


      {/* {favorites.map((favorite) => (
        <div key={favorite?.id}>
          <p>
            {favorite?.make} - {favorite?.model}
          </p>
        </div>
      ))} */}
    </StyledContainer>
  );
};

export default Favorites;

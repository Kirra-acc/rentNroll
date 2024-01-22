import React from "react";
import {
  StyledListItem,
  StyledDesc,
  StyledInfo,
  StyledFavBtn,
  StyledGradient,
  StyledItemBtn,
} from "./Catalog.styled.js";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { favoriteItems, modalIsOpen, selectedItemId } from "../../redux/selectors.js";
import PopUp from "../PopUp/PopUp.jsx";
import { addToFavorites, changeModalOpen, changeSelectedItemId, removeFromFavorites } from "../../redux/slice.js";

const CatalogItem = ({ item }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalIsOpen);
  const selectedId = useSelector(selectedItemId);
  const favorites = useSelector(favoriteItems);

  const isFavorite = favorites.some((favorite) => favorite?.id === item?.id);

  const city = item?.address.split(",")[1]?.trim();
  const country = item?.address.split(",")[2]?.trim();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item.id));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  return (
    <StyledListItem key={item?.id}>
      <img
        src={item?.img || item?.photoLink}
        alt={item?.title}
        width={274}
        height={268}
      />
      <StyledGradient></StyledGradient>

      <StyledFavBtn type="button" onClick={handleFavoriteClick}>
        <FaRegHeart
          style={{ cursor: "pointer", color: "var(--white)" }}
          size={18}
        />
      </StyledFavBtn>

      <StyledInfo>
        <h1>
          {item?.make}
          {(item?.model === "Enclave" ||
            item?.model === "XC90" ||
            item?.model === "XC60") && <span> {item?.model}</span>}
          , {item?.year}
        </h1>
        <p>{item?.rentalPrice}</p>
      </StyledInfo>

      <StyledDesc>
        <p>{city} |</p>
        <p>{country} |</p>
        <p>{item?.rentalCompany} |</p>

        <p>{item?.type} |</p>
        <p>{item?.model} |</p>
        <p>{item?.id} |</p>
        <p>{item?.accessories[0]}</p>
      </StyledDesc>

      <StyledItemBtn onClick={() => {
        dispatch(changeModalOpen(true));
        dispatch(changeSelectedItemId(item?.id));
      }}>Learn more</StyledItemBtn>

      {isModalOpen && selectedId === item?.id && <PopUp item={item} />}
    </StyledListItem>
  );
};

export default CatalogItem;

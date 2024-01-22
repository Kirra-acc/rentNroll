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
import { modalIsOpen, selectedItemId } from "../../redux/selectors.js";
import PopUp from "../PopUp/PopUp.jsx";
import { changeModalOpen, changeSelectedItemId } from "../../redux/slice.js";

const CatalogItem = ({ item }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalIsOpen);
  const selectedId = useSelector(selectedItemId);

  const city = item?.address.split(",")[1]?.trim();
  const country = item?.address.split(",")[2]?.trim();

  return (
    <StyledListItem key={item?.id}>
      <img
        src={item?.img || item?.photoLink}
        alt={item?.title}
        width={274}
        height={268}
      />
      <StyledGradient></StyledGradient>

      <StyledFavBtn type="button">
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
        <p>{item?.rentalCompany}</p>

        <p>{item?.type} |</p>
        <p>{item?.model} |</p>
        <p>{item?.id} |</p>
        <p>{item?.accessories[1]}</p>
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

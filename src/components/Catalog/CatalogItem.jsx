import React from "react";
import {
  StyledListItem,
  StyledDesc,
  StyledItemBtn,
  StyledInfo,
  StyledFavBtn,
} from "./Catalog.styled.js";
import { FaRegHeart } from "react-icons/fa";

// import { useDispatch } from "react-redux";

const CatalogItem = ({ item }) => {
  //   const dispatch = useDispatch();
  const city = item.address.split(",")[1].trim();
  const country = item.address.split(",")[2].trim();

  return (
    <StyledListItem key={item?.id}>
      <img
        src={item?.img || item?.photoLink}
        alt={item?.title}
        width={274}
        height={268}
      />

      <StyledFavBtn type="button">
        <FaRegHeart
          style={{ cursor: "pointer", color: "var(--white)" }}
          size={18}
        />
      </StyledFavBtn>

      <StyledInfo>
        <h2>
          {item?.make}
          {(item?.model === "Enclave" ||
            item?.model === "XC90" ||
            item?.model === "XC60") && <span> {item?.model}</span>}
          , {item?.year}
        </h2>
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

      <StyledItemBtn type="button">Learn more</StyledItemBtn>
    </StyledListItem>
  );
};

export default CatalogItem;

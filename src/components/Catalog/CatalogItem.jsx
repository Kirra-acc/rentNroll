import React from "react";
import {
  CatalogListItem,
  Characteristics,
  ItemButton,
  TextWrapper,
} from "./Catalog.styled.js";

// import { useDispatch } from "react-redux";

const CatalogItem = ({ item }) => {
  //   const dispatch = useDispatch();
  const city = item.address.split(",")[1].trim();
  const country = item.address.split(",")[2].trim();

  return (
    <CatalogListItem key={item?.id}>
      <img
        src={item?.img || item?.photoLink}
        alt={item?.title}
        width={274}
        height={268}
      />
      <TextWrapper>
        <h2>
          {item?.make}
          {(item?.model === "Enclave" ||
            item?.model === "XC90" ||
            item?.model === "XC60") && <span> {item?.model}</span>}
          , {item?.year}
        </h2>
        <p>{item?.rentalPrice}</p>
      </TextWrapper>

      <Characteristics>
        <p>{city} |</p>
        <p>{country} |</p>
        <p>{item?.rentalCompany}</p>

        <p>{item?.type} |</p>
        <p>{item?.model} |</p>
        <p>{item?.id} |</p>
        <p>{item?.accessories[1]}</p>
      </Characteristics>

      <ItemButton type="button">Learn more</ItemButton>
    </CatalogListItem>
  );
};

export default CatalogItem;

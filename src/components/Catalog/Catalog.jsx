import React, { useState } from "react";

import { useEffect } from "react";
import { fetchCarsGalleryThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import CatalogItem from "./CatalogItem.jsx";
import {
  StyledList,
  StyledContainer,
  selectStyle,
  StyledMoreBtn,
  StyledMoreWrapper,
} from "./Catalog.styled.js";
import Select, { components } from "react-select";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { changeSelectFilter } from "../../redux/slice.js";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const gallery = useSelector(selectCars);

  const getSelectValue = (selectedOp) => {
    dispatch(changeSelectFilter(selectedOp?.value));
  };

  useEffect(() => {
    dispatch(fetchCarsGalleryThunk(page));
    setPage(page + 1);
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
    dispatch(fetchCarsGalleryThunk(page));
  };

  const uniqueOptions = [...new Set(gallery?.map((item) => item?.make))];
  const arrOfOptions = uniqueOptions.sort();

  const uniquePrices = [...new Set(gallery?.map((item) => item?.rentalPrice))];
  const arrOfPrices = uniquePrices.sort((a, b) => a - b);

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <IoIosArrowUp
            size={18}
            label="Arrow up"
            color={"var(--descr-text)"}
          />
        ) : (
          <IoIosArrowDown
            size={18}
            label="Arrow down"
            color={"var(--descr-text)"}
          />
        )}
      </components.DropdownIndicator>
    );
  };

  return (
    <StyledContainer>
      <div>
        <label>Car brand</label>
        <Select
          // required
          options={arrOfOptions.map((make) => ({ value: make, label: make }))}
          placeholder="Enter the text"
          styles={selectStyle}
          onChange={getSelectValue}
          components={{
            DropdownIndicator,
            IndicatorSeparator: () => null,
          }}
        />
        <label>Price/ 1 hour</label>
        <Select
          // required
          options={arrOfPrices.map((price) => ({ value: price, label: price }))}
          placeholder="To $"
          styles={selectStyle}
          onChange={getSelectValue}
          components={{
            DropdownIndicator,
            IndicatorSeparator: () => null,
          }}
        />
        <label>Сar mileage / km</label>
        <input type="number" placeholder="From" name="from" />
        <input type="number" placeholder="To" name="to" />
        <button type="button">Search</button>
      </div>

      <StyledList>
        {gallery?.map((item) => (
          <CatalogItem key={item?.id} item={item} />
        ))}
      </StyledList>

      <StyledMoreWrapper>
        <StyledMoreBtn type="button" onClick={handleLoadMoreClick}>Load more</StyledMoreBtn>
      </StyledMoreWrapper>

    </StyledContainer>
  );
};

export default Catalog;

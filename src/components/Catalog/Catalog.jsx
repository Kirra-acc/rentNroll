import React, { useState } from "react";

import { useEffect } from "react";
import { fetchCarsGalleryThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, isFirstRender, loadMore } from "../../redux/selectors";
import CatalogItem from "./CatalogItem.jsx";
import {
  StyledList,
  StyledContainer,
  selectStyle,
  StyledMoreBtn,
  StyledMoreWrapper,
  StyledFiltersForm,
  StyledSelectFilter,
  StyledInputFilter,
  StyledInputTo,
  StyledInputFrom,
} from "./Catalog.styled.js";
import Select, { components } from "react-select";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  changeFilters,
  changeRender,
  changeSelectFilter,
} from "../../redux/slice.js";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const gallery = useSelector(selectCars);
  const firstRender = useSelector(isFirstRender);
  const hasLoadMore = useSelector(loadMore);

  const [makeFilter, setMakeFilter] = useState("");
  const [rentalPriceFilter, setRentalPriceFilter] = useState(null);
  const [fromMileageFilter, setFromMileageFilter] = useState(null);
  const [toMileageFilter, setToMileageFilter] = useState(null);

  const getSelectValue = (selectedOp) => {
    dispatch(changeSelectFilter(selectedOp?.value));
  };

  useEffect(() => {
    if (firstRender) {
      dispatch(fetchCarsGalleryThunk(page));
      setPage(page + 1);
      dispatch(changeRender(false));
    }
  }, [dispatch, page, firstRender]);

  const handleLoadMoreClick = () => {
    if (hasLoadMore) {
      setPage(page + 1);
      dispatch(fetchCarsGalleryThunk(page));
    }
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

  const filterSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const makeValue = formData.get("make");
    const rentalPriceValue = formData.get("rentalPrice");
    const fromMileageValue = formData.get("from");
    const toMileageValue = formData.get("to");

    setMakeFilter(makeValue || "");
    setRentalPriceFilter(Number(rentalPriceValue));
    setFromMileageFilter(Number(fromMileageValue));
    setToMileageFilter(Number(toMileageValue));

    // console.log("makeValue:", makeValue);
    // console.log("rentalPriceValue:", rentalPriceValue);
    // console.log("fromMileageValue:", fromMileageValue);
    // console.log("toMileageValue:", toMileageValue);

    dispatch(
      changeFilters({
        makeValue,
        rentalPriceValue,
        fromMileageValue,
        toMileageValue,
      })
    );
  };

  const filteredGallery = gallery
    .filter((item) => (makeFilter ? item.make === makeFilter : true))
    .filter((item) =>
      rentalPriceFilter ? item.rentalPrice === rentalPriceFilter : true
    )
    .filter((item) =>
      fromMileageFilter ? item.mileage >= fromMileageFilter : true
    )
    .filter((item) =>
      toMileageFilter ? item.mileage <= toMileageFilter : true
    );

  return (
    <StyledContainer>
      <StyledFiltersForm onSubmit={filterSearch}>
        <StyledSelectFilter>
          <label htmlFor="make">Car brand</label>
          <Select
            // required
            name="make"
            options={arrOfOptions.map((make) => ({ value: make, label: make }))}
            placeholder="Enter the text"
            styles={selectStyle}
            onChange={getSelectValue}
            components={{
              DropdownIndicator,
              IndicatorSeparator: () => null,
            }}
          />
        </StyledSelectFilter>

        <StyledSelectFilter>
          <label htmlFor="rentalPrice">Price/ 1 hour</label>
          <Select
            // required
            options={arrOfPrices.map((price) => ({
              value: price,
              label: price,
            }))}
            placeholder="To $"
            name="rentalPrice"
            styles={selectStyle}
            onChange={getSelectValue}
            components={{
              DropdownIndicator,
              IndicatorSeparator: () => null,
            }}
          />
        </StyledSelectFilter>

        <StyledSelectFilter>
          <label>Сar mileage / km</label>

          <StyledInputFilter>
            <StyledInputFrom type="number" placeholder="From" name="from" />
            <StyledInputTo type="number" placeholder="To" name="to" />

            <button type="submit">Search</button>
          </StyledInputFilter>
        </StyledSelectFilter>
      </StyledFiltersForm>

      <StyledList>
        {filteredGallery?.map((item) => (
          <CatalogItem key={item?.id} item={item} />
        ))}
      </StyledList>

      <StyledMoreWrapper>
        {hasLoadMore && (
          <StyledMoreBtn
          type="button"
          onClick={handleLoadMoreClick}
        >
          Load more
        </StyledMoreBtn>
        )}
        
      </StyledMoreWrapper>
    </StyledContainer>
  );
};

export default Catalog;

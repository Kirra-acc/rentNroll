import React from 'react'

import { useEffect } from "react";
import { fetchCarsGalleryThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import CatalogItem from "./CatalogItem.jsx";
import { CatalogList, Container } from './Catalog.styled.js';

const Catalog = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCarsGalleryThunk());
  }, [dispatch]);

  return (
    <Container>
      <CatalogList>
        {gallery?.map((item) => (
          <CatalogItem key={item?.id} item={item} />
        ))}
      </CatalogList>
    </Container>
  );
};

export default Catalog;

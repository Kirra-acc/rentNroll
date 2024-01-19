// import React from 'react'

import { useEffect } from "react";
import { fetchCarsGalleryThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectorCars } from "../../redux/selectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const Gallery = useSelector(selectorCars);

  useEffect(() => {
    dispatch(fetchCarsGalleryThunk());
  }, [dispatch]);

  return (
    <>
      <ol>
        {Gallery.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.model}</span>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Catalog;

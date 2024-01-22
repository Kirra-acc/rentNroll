// import React from 'react'

import { useSelector } from "react-redux"
import { favoriteItems } from "../../redux/selectors"

const Favorites = () => {
  const favorites = useSelector(favoriteItems);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((favorite) => (
        <div key={favorite?.id}>
          <p>{favorite?.make} - {favorite?.model}</p>
        </div>
      ))}
    </div>
  )
}

export default Favorites
import React, { useEffect, useState } from 'react';
import { CarCard } from '../CarItem/CarItem';
import garage from 'styles/image/pngwing.com (4).png';
import { EmptyParkingContainer } from './FavoriteCarList.styled';
import { CatalogContainer, CardContainer } from '../CarList/CarList.styled';
import { loadDataFromLocalStorage } from 'localStorage/localStorage';

export const FavoriteCarList = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favoriteCarsFromLocalStorage = loadDataFromLocalStorage('favorites');

    if (favoriteCarsFromLocalStorage) {
      setFavoriteCars(favoriteCarsFromLocalStorage);
    }
  }, []);

  return (
    <CatalogContainer>
      {favoriteCars.length > 0 ? (
        <CardContainer>
          {favoriteCars.map(car => (
            <CarCard key={car.id} car={car} isCatalogPage={false} />
          ))}
        </CardContainer>
      ) : (
        <EmptyParkingContainer>
          <p>
            Your favorite list is empty, add some vehicles from{' '}
            <span>Catalog</span>
          </p>
          <img src={garage} alt="garage" />
        </EmptyParkingContainer>
      )}
    </CatalogContainer>
  );
};

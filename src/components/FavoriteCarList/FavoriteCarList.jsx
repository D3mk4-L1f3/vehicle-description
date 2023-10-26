import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from '../CarItem/CarItem';
import { selectFavoriteCars } from 'redux/selectors';
import { CatalogContainer, CardContainer } from '../CarList/CarList.styled';
import garage from 'styles/image/pngwing.com (4).png';
import { EmptyParkingContainer } from './FavoriteCarList.styled';

function FavoriteCarList() {
  const favoriteCars = useSelector(selectFavoriteCars);

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
            Your favorite list is empty, add some vehicle from{' '}
            <span>Catalog</span>
          </p>
          <img src={garage} alt="garage" />
        </EmptyParkingContainer>
      )}
    </CatalogContainer>
  );
}

export default FavoriteCarList;

import React from 'react';
import CarCard from '../CarItem/CarItem';
import { CatalogContainer, CardContainer, LoadMoreBtn } from './CarList.styled';
import { Loader } from 'components/Loader/Loader';

function CarList({
  cars,
  favoriteCars,
  isLoading,
  handleToggleFavorite,
  handleLoadMoreClick,
}) {
  return (
    <CatalogContainer>
      <CardContainer>
        {cars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={favoriteCars.some(
              favoriteCar => favoriteCar.id === car.id
            )}
            onToggleFavorite={handleToggleFavorite}
            isCatalogPage={true}
          />
        ))}
      </CardContainer>
      {!isLoading && (
        <LoadMoreBtn type="button" onClick={handleLoadMoreClick}>
          Load more
        </LoadMoreBtn>
      )}
      {isLoading && <Loader />}
    </CatalogContainer>
  );
}

export default CarList;

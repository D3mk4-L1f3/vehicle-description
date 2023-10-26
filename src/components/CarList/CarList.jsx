import React from 'react';
import { CarCard } from '../CarItem/CarItem';
import { Loader } from 'components/Loader/Loader';
import { CatalogContainer, CardContainer, LoadMoreBtn } from './CarList.styled';

export const CarList = ({
  cars,
  favoriteCars,
  isLoading,
  handleToggleFavorite,
  handleLoadMoreClick,
}) => {
  const shouldShowLoadMore = cars.length >= 12;

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
      {shouldShowLoadMore && !isLoading && (
        <LoadMoreBtn type="button" onClick={handleLoadMoreClick}>
          Load more
        </LoadMoreBtn>
      )}
      {isLoading && <Loader />}
    </CatalogContainer>
  );
};

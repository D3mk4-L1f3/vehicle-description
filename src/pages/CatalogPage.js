import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars } from '../redux/operations';

import { selectCars, selectFavoriteCars } from '../redux/selectors';
import {
  setFavorites,
  addToFavorites,
  removeFromFavorites,
} from '../redux/carSlice';

import {
  loadDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../localStorage/localStorage';
import { Filter } from 'components/Filter/Filter';

import CarList from '../components/CarList/CarList';

function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const savedFavorites = loadDataFromLocalStorage('favorites');
    if (savedFavorites) {
      dispatch(setFavorites(savedFavorites));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isFirstLoad && cars.length === 0) {
      setIsFirstLoad(true);
      setIsLoading(true);
      dispatch(fetchCars({ page: 1, limit: 12 })).then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, cars, isFirstLoad]);

  useEffect(() => {
    saveDataToLocalStorage('favorites', favoriteCars);
  }, [favoriteCars]);

  const handleToggleFavorite = car => {
    const isFavorite = favoriteCars.some(
      favoriteCar => favoriteCar.id === car.id
    );
    if (isFavorite) {
      dispatch(removeFromFavorites({ carId: car.id }));
    } else {
      dispatch(addToFavorites({ car }));
    }
  };

  const handleLoadMoreClick = () => {
    const nextPage = currentPage + 1;
    setIsLoading(true);

    dispatch(fetchCars({ page: nextPage, limit: 12 })).then(() => {
      setCurrentPage(nextPage);
      setIsLoading(false);
    });
  };

  return (
    <section>
      <Filter cars={cars} setFilteredCars={setFilteredCars} />
      <CarList
        cars={filteredCars.length > 0 ? filteredCars : cars}
        favoriteCars={favoriteCars}
        isLoading={isLoading}
        handleToggleFavorite={handleToggleFavorite}
        handleLoadMoreClick={handleLoadMoreClick}
      />
    </section>
  );
}
export default CatalogPage;

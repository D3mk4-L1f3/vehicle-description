import React, { useState } from 'react';
import {
  CustomValSelect,
  BtnForm,
  FilterContainer,
  OdoContainer,
  OdoFrom,
  OdoTo,
  OdoInputContainer,
} from './Filter.styled';
import { toast } from 'react-toastify';

const optionsToast = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const Filter = ({ cars, setFilteredCars }) => {
  const carsMakeArr = cars.map(car => car.make);
  const makeOptions = [...new Set(carsMakeArr)].map(item => ({
    value: item,
    label: item,
  }));

  const maxPrice = Math.max(
    ...cars.map(car => parseFloat(car.rentalPrice.slice(1)))
  );

  const priceOptions = [];
  for (let i = 0; i <= maxPrice; i += 10) {
    priceOptions.push({ value: i, label: `$${i}` });
  }

  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const search = () => {
    let filterCars = [...cars];

    if (
      !selectedMake &&
      !selectedPrice &&
      mileageFrom === '' &&
      mileageTo === ''
    ) {
      toast.info('Please set params for search ', optionsToast);
      setFilteredCars([]);
      return;
    }

    if (selectedMake) {
      filterCars = filterCars.filter(
        car => car.make.toLowerCase() === selectedMake.value.toLowerCase()
      );
    }
    if (selectedPrice) {
      filterCars = filterCars.filter(
        car => parseFloat(car.rentalPrice.slice(1)) <= selectedPrice.value
      );
    }
    if (mileageFrom !== '') {
      filterCars = filterCars.filter(
        car => parseFloat(car.mileage) >= parseFloat(mileageFrom)
      );
    }
    if (mileageTo !== '') {
      filterCars = filterCars.filter(
        car => parseFloat(car.mileage) <= parseFloat(mileageTo)
      );
    }

    if (filterCars.length === 0) {
      toast.info('No results for these search params', optionsToast);
    }
    setFilteredCars(filterCars);
  };

  const reset = () => {
    setFilteredCars([]);
    setSelectedMake(null);
    setSelectedPrice(null);
    setMileageFrom('');
    setMileageTo('');
  };

  return (
    <FilterContainer>
      <CustomValSelect
        value={selectedMake}
        placeholder="Car brand"
        onChange={selectedOption => setSelectedMake(selectedOption)}
        options={makeOptions}
        classNamePrefix="my-cusom-select"
        isSearchable={false}
      />

      <CustomValSelect
        value={selectedPrice}
        placeholder="Price/ 1 hour"
        onChange={selectedOption => setSelectedPrice(selectedOption)}
        options={priceOptions}
        classNamePrefix="my-cusom-select"
        isSearchable={false}
      />
      <OdoInputContainer>
        <p>Car mileage / km</p>
        <div>
          <OdoContainer>
            <OdoFrom
              value={mileageFrom}
              id="mileageFrom"
              type="number"
              onChange={event => setMileageFrom(event.target.value)}
              placeholder="From"
            />
            <OdoTo
              value={mileageTo}
              type="number"
              onChange={event => setMileageTo(event.target.value)}
              placeholder="To"
            />
          </OdoContainer>
        </div>
      </OdoInputContainer>

      <BtnForm type="button" onClick={search}>
        Search
      </BtnForm>
      <BtnForm type="button" onClick={reset}>
        Reset
      </BtnForm>
    </FilterContainer>
  );
};

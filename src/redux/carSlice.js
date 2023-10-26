import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    favoriteCars: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteCars.push(action.payload.car);
    },
    removeFromFavorites: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        car => car.id !== action.payload.carId
      );
    },
    setFavorites: (state, action) => {
      state.favoriteCars = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = [...state.cars, ...action.payload];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } =
  carSlice.actions;
export default carSlice.reducer;

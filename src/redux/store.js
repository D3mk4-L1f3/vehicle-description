import carSlice from '../redux/carSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cars: carSlice,
  },
});

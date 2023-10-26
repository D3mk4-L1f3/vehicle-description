import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://653536edc620ba9358ec44f8.mockapi.io';

const fetchCars = createAsyncThunk(
  'advert/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const params = {
        page,
        limit,
      };

      const response = await axios.get('/advert', { params });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { fetchCars };

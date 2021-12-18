import { configureStore } from '@reduxjs/toolkit';
import FlowerReducers from '../features/FlowerRedux/FlowerSlice';

export const store = configureStore({
  reducer: {
    flowers: FlowerReducers,
  },
});

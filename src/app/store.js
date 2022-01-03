import { configureStore } from '@reduxjs/toolkit';
import FlowerReducers from '../features/FlowerRedux/FlowerSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
  key: 'persist-store', 
  storage
}

const persistedReducer = persistReducer(persistConfig, FlowerReducers)
export const store = configureStore({
  reducer: {
    flowers: persistedReducer,
  },
});

export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './reducers/noteSlice';
import categoryReducer from './reducers/categorySlice';

const store = configureStore({
  reducer: {
    notes: noteReducer,
    categories: categoryReducer,
  },
});

export default store;

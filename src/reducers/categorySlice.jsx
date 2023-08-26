// reducers/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: ['Work', 'Personal'], // Add more categories here
  reducers: {},
});

export default categorySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: ['Work', 'Personal'], 
  reducers: {},
});

export default categorySlice.reducer;

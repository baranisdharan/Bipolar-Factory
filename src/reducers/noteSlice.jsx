import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    updateNote: (state, action) => {
      const { index, updatedNote } = action.payload;
      state[index] = updatedNote;
    },
    deleteNote: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under construction',
    categories: [],
  },
  getMessage: (state) => state.status,
});

export const { getMessage } = categoriesSlice;
export default categoriesSlice.reducer;

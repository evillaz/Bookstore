import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under construction',
    categories: [],
  },
  reducers: {
    getMessage: (state, action) => state.status,
  },
});

export const { getMessage } = categoriesSlice.actions;
export default categoriesSlice.reducer;

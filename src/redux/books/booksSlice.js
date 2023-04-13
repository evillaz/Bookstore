import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    count: 0,
    books: [],
  },
  reducers: {
    increment: (state, action) => ({
      ...state,
      count: state.count + 1,
      books: [...state.books, action.payload],
    }),
    decrement: (state, { payload }) => {
      const filteredBooks = state.books.filter((book) => book.id !== payload.id);
      return {
        ...state,
        count: state.count - 1,
        books: [filteredBooks],
      };
    },
  },
});

export const { increment, decrement } = booksSlice.actions;
export default booksSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    count: 3,
    books:
    [
      {
        itemId: uuidv4(),
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        itemId: uuidv4(),
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        itemId: uuidv4(),
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
  },
  reducers: {
    increment: (state, action) => ({
      ...state,
      count: state.count + 1,
      books: [...state.books, action.payload],
    }),
    decrement: (state, { payload }) => ({
      ...state,
      count: state.count - 1,
      books: state.books.filter((book) => book.itemId !== payload.id),
    }),
  },
});

export const { increment, decrement } = booksSlice.actions;
export default booksSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url= 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'ZcSTm5lfeIkdKO69wQlx';

export const getBookItems = createAsyncThunk(
  'books/getBookItems',
  async(name, thunkAPI) => {
    try {
      const resp = await axios.get(
        `${url}${appId}/books`
      );
      const data = resp.data;
      const bookArray = Object.keys(data).map((key) => {
        return {
          item_id: key,
          ...data[key][0],
        };
      });
      return bookArray.sort((a,b) => a - b);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async({ item_id, title, author, category }, thunkAPI) => {
    const book = { item_id, title, author, category };
    try {
      const resp = await axios.post(
        `${url}${appId}/books`, book, {
          params: {
            app_id: appId,
          }
        }
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async(id, thunkAPI) => {
    try {
      const resp = await axios.delete(
        `${url}${appId}/books/${id}`, id, {
          params: {
            item_id: id,
          }
        }
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    count: 3,
    books: [],
    isLoading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
      .addCase(getBookItems.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }))
    .addCase(getBookItems.rejected, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(addBook.fulfilled, (state, action) => ({
      ...state,
      books: [...state.books, action.meta.arg],
    }))
    .addCase(removeBook.fulfilled, (state, action) =>{
      const newBooks = [...state.books];
      const bookIndex = newBooks.findIndex((book) => book.item_id === action.meta.arg);
      newBooks.splice(bookIndex, 1);
      return {
        ...state,
        books: newBooks,
      };
    });
  }
});

export const { increment, decrement } = booksSlice.actions;
export default booksSlice.reducer;

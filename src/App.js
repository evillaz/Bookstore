import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BookStoreApp from './components/BookStoreApp';
import { getBookItems } from './redux/books/booksSlice';

function App() {
  const { books, isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Router>
      <BookStoreApp />
    </Router>
  );
}

export default App;

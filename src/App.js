import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookStoreApp from './components/BookStoreApp';

function App() {
  return (
    <Router>
      <BookStoreApp />
    </Router>
  );
}

export default App;

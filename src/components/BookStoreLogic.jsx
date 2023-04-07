import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookInput from './BookInput';
import BookList from './BookList';

const BookStoreLogic = () => {
  const [books, setBooks] = useState([
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
  ]);

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <BookList books={books} />
      <BookInput addBook={addBook} />
    </div>
  );
};

export default BookStoreLogic;

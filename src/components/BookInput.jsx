import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { increment } from '../redux/books/booksSlice';

const BookInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setAuthor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = uuidv4();
    dispatch(increment({ itemId, title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="title"
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={handleChange}
      />
      <input
        id="author"
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleChange}
      />
      <button type="submit">
        Add Book
      </button>
    </form>
  );
};

export default BookInput;

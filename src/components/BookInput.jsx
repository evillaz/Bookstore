import PropTypes from 'prop-types';
import { useState } from 'react';

const BookInput = ({ addBook }) => {
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
    addBook(title, author);
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

BookInput.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookInput;

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <BookItem
        title={book.title}
        author={book.author}
        key={uuidv4()}
      />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};

export default BookList;

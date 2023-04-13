import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <BookItem
        title={book.title}
        author={book.author}
        id={book.itemId}
        key={book.itemId}
      />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
  })).isRequired,
};

export default BookList;

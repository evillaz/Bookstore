import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { decrement } from '../redux/books/booksSlice';

const BookItem = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>
        {title}
        , By
        {' '}
        {author}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(decrement({ id }));
        }}
      >
        remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;

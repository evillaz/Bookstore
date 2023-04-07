import PropTypes from 'prop-types';

const BookItem = ({ title, author }) => (
  <li>
    <span>
      {title}
      , By
      {' '}
      {author}
    </span>
  </li>
);

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;

import { useSelector } from 'react-redux';
import BookInput from './BookInput';
import BookList from './BookList';

const BookStoreLogic = () => (
  <div>
    <BookList />
    <BookInput />
  </div>
);

export default BookStoreLogic;

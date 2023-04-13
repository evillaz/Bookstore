import { useSelector } from 'react-redux';
import BookInput from './BookInput';
import BookList from './BookList';

const BookStoreLogic = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <div>
      <BookList books={books} />
      <BookInput />
    </div>
  );
};

export default BookStoreLogic;

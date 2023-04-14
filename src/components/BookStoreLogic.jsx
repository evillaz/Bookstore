import BookInput from './BookInput';
import BookList from './BookList';

const BookStoreLogic = () => (
  <>
    <div className="booksWrapper">
      <BookList />
    </div>
    <div className="formWrapper">
      <BookInput />
    </div>
  </>
);

export default BookStoreLogic;

import BookInput from './BookInput';
import BookList from './BookList';

const BookStoreLogic = () => (
  <>
    <div className="booksWrapper f c">
      <BookList />
    </div>
    <div className="formWrapper f c">
      <BookInput />
    </div>
  </>
);

export default BookStoreLogic;

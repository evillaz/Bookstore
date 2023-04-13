import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          title={book.title}
          author={book.author}
          id={book.item_id}
          key={book.item_id}
        />
      ))}
    </ul>
  );
};

export default BookList;

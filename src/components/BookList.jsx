import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import styles from '../styles/BookList.module.css';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <ul className={styles.booksList}>
      {books.map((book) => (
        <BookItem
          category={book.category}
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

import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import styles from '../styles/BookList.module.css';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  const linkClasses = `${styles.booksList} f c`;

  return (
    <ul className={linkClasses}>
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

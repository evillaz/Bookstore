import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdOutlineIncompleteCircle } from 'react-icons/md';
import { removeBook } from '../redux/books/booksSlice';
import styles from '../styles/BookItem.module.css';

const BookItem = ({
  id,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.wrapper}>
      <div className={styles.bookWrapper}>
        <div className={styles.bookContent}>
          <div className={styles.book}>
            <span className={styles.category}>
              {category}
            </span>
            <span className={styles.title}>
              {title}
            </span>
            <span className={styles.author}>
              {author}
            </span>
          </div>
          <ul className={styles.buttons}>
            <li>
              <button className={styles.button} type="button">
                Comments
              </button>
            </li>
            <li className={styles.buttonLine} />
            <li>
              <button
                className={styles.button}
                type="button"
                onClick={() => {
                  dispatch(removeBook(id));
                }}
              >
                Remove
              </button>
            </li>
            <li className={styles.buttonLine} />
            <li>
              <button className={styles.button} type="button">
                Edit
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.progressWrapper}>
          <MdOutlineIncompleteCircle
            fontSize="4.2rem"
            color="#379cf6"
          />
          <div className={styles.progress}>
            <span className={styles.percentage}>
              80%
            </span>
            <span className={styles.completed}>
              Completed
            </span>
          </div>
        </div>
      </div>
      <div className={styles.updateWrapper}>
        <div className={styles.currentWrapper}>
          <span className={styles.currentChapter}>CURRENT CHAPTER</span>
          <span className={styles.chapter}>Chapter 3</span>
        </div>
        <button className={styles.updateProgress} type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;

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
  const wrapperClasses = `${styles.wrapper} f r`;
  const bookWrapperClasses = `${styles.bookWrapper} f r`;
  const bookContentClasses = `${styles.bookContent} f c`;
  const bookClasses = 'f c';
  const buttonsClasses = `${styles.buttons} f r`;
  const progressClasses = 'f c';
  const progressWrapperClasses = `${styles.progressWrapper} f r`;
  const updateWrapperClasses = `${styles.updateWrapper} f c`;
  const currentWrapperClasses = `${styles.currentWrapper} f c`;

  return (
    <li className={wrapperClasses}>
      <div className={bookWrapperClasses}>
        <div className={bookContentClasses}>
          <div className={bookClasses}>
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
          <ul className={buttonsClasses}>
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
        <div className={progressWrapperClasses}>
          <MdOutlineIncompleteCircle
            fontSize="4.2rem"
            color="#379cf6"
          />
          <div className={progressClasses}>
            <span className={styles.percentage}>
              80%
            </span>
            <span className={styles.completed}>
              Completed
            </span>
          </div>
        </div>
      </div>
      <div className={updateWrapperClasses}>
        <div className={currentWrapperClasses}>
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

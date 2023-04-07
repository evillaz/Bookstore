import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Books from '../routes/Books';
import Categories from '../routes/Categories';

const BookStoreApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Route>
  </Routes>
);

export default BookStoreApp;

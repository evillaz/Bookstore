import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => (
  <>
    <NavBar />
    <div className="wrapper f c">
      <Outlet />
    </div>
  </>
);

export default Layout;

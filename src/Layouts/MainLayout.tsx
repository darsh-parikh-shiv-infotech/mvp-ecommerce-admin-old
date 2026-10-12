import { Outlet } from 'react-router-dom';
import Navbar from './Common/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;

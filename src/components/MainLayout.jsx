import { Outlet } from 'react-router-dom';
import Navs from './Navs';

function MainLayout() {
  return (
    <>
      <Navs />
      <h1>This is a Home page</h1>
      <Outlet />
    </>
  );
}

export default MainLayout;

// Outlet --- is the children elements which are between the MainLayout Route Tag(look in the App.jsx)

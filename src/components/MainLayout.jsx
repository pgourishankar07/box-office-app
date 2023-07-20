import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';

function MainLayout() {
  return (
    <>
      <AppTitle />
      <Navs />
      <Outlet />
    </>
  );
}

export default MainLayout;

// Outlet --- is the children elements which are between the MainLayout Route Tag(look in the App.jsx)

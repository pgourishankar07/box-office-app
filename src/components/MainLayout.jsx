import { Outlet } from 'react-router-dom';
import Navs from './Navs';

function MainLayout() {
  return (
    <>
      <h1>Box Office</h1>
      <div>Are you looking for a movie or an actor ?</div>
      <Navs />
      <Outlet />
    </>
  );
}

export default MainLayout;

// Outlet --- is the children elements which are between the MainLayout Route Tag(look in the App.jsx)

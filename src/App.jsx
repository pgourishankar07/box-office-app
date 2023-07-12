import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// __________________COMMENTS_______________

// {/* <Route path="/contact" element={<div>Contact</div>} /> but dont use like this  */}

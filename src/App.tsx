import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/header/Header';
import Scroll from './components/scroll/Scroll';

import { createBrowserRouter, RouterProvider } from 'react-router';


const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  errorElement: <NotFound/>,
  },
]);

function App() {
  return (
    <div className="relative">
      <RouterProvider router={router} />
    </div>
  )
}
export default App

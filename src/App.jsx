import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import CoffeeLayout from './components/CoffeeLayout';
import CoffeeRecipe from './components/CoffeeRecipe';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/coffee/:type',
    element: <CoffeeLayout />,
    children: [
      {
        path: ':id?',
        element: <CoffeeRecipe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

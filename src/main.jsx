import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createHashRouter, RouterProvider, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.jsx';

const Base = () => {
  return <div className='links'>
  <Link to="/users/12">Karl</Link>
  <Link to="/users/18">Cecilia</Link>
</div>
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    /*errorElement: <ErrorPage />,*/
    children: [
      {
        path: "/",
        element: <Base />,
      },
      {
        path: "users/:userId",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

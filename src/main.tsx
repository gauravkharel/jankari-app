import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './pages/Users';
import UserProfiles from './pages/UserProfiles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/profiles",
    element: <UserProfiles />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

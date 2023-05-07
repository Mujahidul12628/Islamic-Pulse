import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home'
import Main from './assets/components/Main/Main.jsx';
import Chefs from './assets/components/Chefs/Chefs.jsx';
import Login from './assets/components/Login/Login.jsx';

import AuthProvider from './assets/Provider/AuthProvider.jsx';
import Register from './assets/components/Register/Register.jsx';
import ChefsLayout from './assets/Layout/ChefsLayout/ChefsLayout.jsx';
import ChefsDetails from './assets/components/ChefsDetails/ChefsDetails.jsx';
import PrivateRoute from './assets/Route/PrivateRoute.jsx';
import Blog from './assets/components/Blog/Blog.jsx';
import NotFound from './assets/components/NotFound/NotFound.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Chefs></Chefs>

      },
      {
        path: "/blog",
        element: <Blog></Blog>

      },
      {
        path: "/chefs",
        element: <Chefs></Chefs>

      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },

    ],
  },
  {
    path: "chefs",
    element: <ChefsLayout></ChefsLayout>,
    children: [
      {
        path: "/chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefsDetails></ChefsDetails>
          </PrivateRoute>

        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)

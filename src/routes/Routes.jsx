import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import RecipeDetails from "../pages/recipeDetails/RecipeDetails";
import ChefRecipes from "../pages/chefRecipes/ChefRecipes";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5555/chef/${params.id}`
          ),
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5555/recipe/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () =>
          fetch("http://localhost:5555/questions"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;

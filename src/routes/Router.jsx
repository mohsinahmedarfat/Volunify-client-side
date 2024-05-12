import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from "./PrivateRoute";
import VolunteerAllPosts from "../pages/volunteerPosts/VolunteerAllPosts";
import VolunteerPostDetails from "../pages/volunteerPosts/VolunteerPostDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/add-volunteer",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer-need",
        element: <VolunteerAllPosts></VolunteerAllPosts>,
      },
      {
        path: "/volunteer-post/:id",
        element: <VolunteerPostDetails></VolunteerPostDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer-post/${params.id}`),
      },
    ],
  },
]);

export default Router;

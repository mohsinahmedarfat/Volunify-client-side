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
import MyPost from "../pages/myPost/MyPost";

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
        element: (
          <PrivateRoute>
            <VolunteerAllPosts></VolunteerAllPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer-post/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails></VolunteerPostDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer-post/${params.id}`),
      },
      {
        path: "/my-posts",
        element: <MyPost></MyPost>,
      },
    ],
  },
]);

export default Router;

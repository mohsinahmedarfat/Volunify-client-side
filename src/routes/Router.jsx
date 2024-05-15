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
import UpdatePost from "../pages/myPost/UpdatePost";
import BeVolunteer from "../pages/volunteer/BeVolunteer";
import MyVolunteerReq from "../pages/volunteer/MyVolunteerReq";

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
          fetch(`${import.meta.env.VITE_API_URL}/volunteer-post/${params.id}`),
      },
      {
        path: "/be-volunteer/:id",
        element: (
          <PrivateRoute>
            <BeVolunteer></BeVolunteer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/be-volunteer/${params.id}`),
      },
      {
        path: "/my-posts",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-post/:id",
        element: (
          <PrivateRoute>
            <UpdatePost></UpdatePost>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteer-post/${params.id}`),
      },
      {
        path: "/my-requests/:email",
        element: (
          <PrivateRoute>
            <MyVolunteerReq></MyVolunteerReq>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/volunteer-requests/${params.email}`
          ),
      },
    ],
  },
]);

export default Router;

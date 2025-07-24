import { createBrowserRouter } from "react-router-dom"; // ✅ FIXED
import Main from "../layout/Main/Main";
import Home from "../layout/Main/Home";
import SignUp from "../sheared/SignUp";
import SignIn from "../sheared/SignIn";
import AllRooms from "../pages/AllRooms";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Error...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-rooms",
        element: <AllRooms />,
      },
      {
        path: "/rooms/:id",
        element: <RoomDetails />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default routes;

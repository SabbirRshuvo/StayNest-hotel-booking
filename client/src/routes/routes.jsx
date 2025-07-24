import { createBrowserRouter } from "react-router-dom"; // ✅ FIXED
import Main from "../layout/Main/Main";
import Home from "../layout/Main/Home";
import SignUp from "../sheared/SignUp";
import SignIn from "../sheared/SignIn";
import AllRooms from "../pages/AllRooms";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";
import HotelLayout from "../layout/HotelOwner/HotelLayout";
import AddRoom from "../layout/HotelOwner/AddRoom";
import ListRoom from "../layout/HotelOwner/ListRoom";
import Dashboard from "../layout/HotelOwner/Dashboard";

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
    path: "/owner",
    element: <HotelLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-room",
        element: <AddRoom />,
      },
      {
        path: "list-room",
        element: <ListRoom />,
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

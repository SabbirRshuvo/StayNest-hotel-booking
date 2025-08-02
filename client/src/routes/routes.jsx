import { createBrowserRouter } from "react-router-dom"; // ✅ FIXED
import Main from "../layout/Main/Main";
import Home from "../layout/Main/Home";
import SignUp from "../sheared/SignUp";
import SignIn from "../sheared/SignIn";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";
import HotelLayout from "../layout/HotelOwner/HotelLayout";
import AddRoom from "../layout/HotelOwner/AddRoom";
import ListRoom from "../layout/HotelOwner/ListRoom";
import Dashboard from "../layout/HotelOwner/Dashboard";
import Contact from "../pages/Contact";
import About from "../pages/About";
import HotelList from "../pages/HotelList";
import PrivateRoute from "../private/PrivateRoute";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/rooms",
        element: <HotelList />,
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
    path: "/dashboard",
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

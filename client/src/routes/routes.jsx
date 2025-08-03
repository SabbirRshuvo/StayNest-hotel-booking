import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../layout/Main/Home";
import Contact from "../pages/ExtraPages/Contact";
import About from "../pages/ExtraPages/About";
import HotelList from "../pages/ExtraPages/HotelList";
import RoomDetails from "../pages/ExtraPages/RoomDetails";
import MyBookings from "../pages/ExtraPages/MyBookings";
import HotelLayout from "../pages/HotelOwner/HotelLayout";
import OwnerDashboard from "../pages/HotelOwner/OwnerDashboard";
import AddRoom from "../pages/HotelOwner/AddRoom";
import ListRoom from "../pages/HotelOwner/ListRoom";
import SignIn from "../sheared/SignIn";
import SignUp from "../sheared/SignUp";

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
        element: <OwnerDashboard />,
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

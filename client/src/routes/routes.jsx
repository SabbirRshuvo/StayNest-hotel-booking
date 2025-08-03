import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../layout/Main/Home";
import Contact from "../pages/ExtraPages/Contact";
import About from "../pages/ExtraPages/About";
import HotelList from "../pages/ExtraPages/HotelList";
import RoomDetails from "../pages/ExtraPages/RoomDetails";
import MyBookings from "../pages/ExtraPages/MyBookings";
import SignIn from "../sheared/SignIn";
import SignUp from "../sheared/SignUp";
import UsersLayout from "../layout/Users/UsersLayout";
import UserDashboard from "../pages/Users/UserDashboard";
import Payment from "../pages/Users/Payment";
import BookingList from "../pages/Users/BookingList";
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
    path: "/users",
    element: (
      <PrivateRoute>
        <UsersLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <UserDashboard /> },
      { path: "payment", element: <Payment /> },
      { path: "bookings", element: <BookingList /> },
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

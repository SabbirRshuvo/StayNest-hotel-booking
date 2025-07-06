import { createBrowserRouter } from "react-router-dom"; // ✅ FIXED
import Main from "../layout/Main/Main";
import Home from "../layout/Main/Home";
import SignUp from "../sheared/SignUp";
import SignIn from "../sheared/SignIn";

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

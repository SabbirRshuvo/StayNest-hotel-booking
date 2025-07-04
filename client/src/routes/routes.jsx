import { createBrowserRouter, Router } from "react-router";
import Main from "../layout/Main/Main";
import Home from "../layout/Main/Home";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Error....</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;

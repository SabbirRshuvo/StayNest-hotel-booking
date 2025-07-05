import { createBrowserRouter } from "react-router-dom"; // ✅ FIXED
import Main from "../layout/Main/Main";
import Home from "../layout/Main/Home";

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
]);

export default routes;

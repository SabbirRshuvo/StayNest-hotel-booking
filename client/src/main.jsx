import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routes from "./routes/routes.jsx";
import AuthProvier from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvier>
      <RouterProvider router={routes} />
    </AuthProvier>
  </StrictMode>
);

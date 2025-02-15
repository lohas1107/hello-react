import { createHashRouter } from "react-router-dom";
import LoginPage from "./views/LoginPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

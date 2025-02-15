import { createHashRouter } from "react-router-dom";
import PortalLayout from "./shared/PortalLayout";
import LoginPage from "./views/LoginPage";
import ProductPage from "./views/ProductPage";
import ErrorPage from "./shared/ErrorPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <PortalLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

import { createHashRouter } from "react-router-dom";
import PortalLayout from "./shared/PortalLayout";
import LoginPage from "./home/LoginPage";
import ProductPage from "./product/ProductPage";
import ErrorPage from "./shared/ErrorPage";

export const router = createHashRouter([
  {
    index: true,
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <PortalLayout />,
    children: [
      {
        path: "products",
        element: <ProductPage />,
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

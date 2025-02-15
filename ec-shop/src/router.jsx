import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./views/ProductPage";
import ErrorPage from "./views/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/ec-shop/",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

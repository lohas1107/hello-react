import { createBrowserRouter } from "react-router-dom";
import ShopLayout from "./shop/ShopLayout";
import HomePage from "./home/HomePage";
import ProductPage from "./views/ProductPage";
import ErrorPage from "./views/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/ec-shop/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
